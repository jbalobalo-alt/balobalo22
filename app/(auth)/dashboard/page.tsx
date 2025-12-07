"use client";

import React, { use, useEffect, useState } from "react";
import { getToken, logoutUser } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import { API_BASE } from "@/lib/config";

interface Position {
  positions_id?: number;
  position_code?: string;
  position_name?: string;
}


export default function DashboardHome() {
  const router = useRouter();
  const [positions, setPositions] = useState<Position[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // form state for create / edit
  const [newPositionCode, setNewPositionCode] = useState("");
  const [newPositionName, setNewPositionName] = useState("");
  const [editingPositionId, setEditingPositionId] = useState<number | null>(null);


  // ensure user is aunthenticated
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/login");
    }
    fetchPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  function authHeaders() {
    const token = getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  //method to fetch the data form the backend [Get] */
  async function fetchPositions() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/positions`, {
        method: "GET",
        headers: authHeaders(),
      });


      if (res.status === 401) {
        logoutUser();
        router.push("/login");
        return;
      }

      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      setPositions(data.map((p: any) => ({
        positions_id: p.positions_id,
        position_code: p.positions_code,
        position_name: p.positions_name,
      })));
    } catch (e: any) {
      setError(e.message || "Failed to fetch positions");
    } finally {
      setLoading(false);
    }
  }

  /* This handle the creation of date (postion) using the POST method AND DATA MODIFICATION using the PUT method */
  async function handleCreateOrUpdate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
  
    const payload = { position_code: newPositionCode, position_name: newPositionName };

    try {
      let res: Response;
      if (editingPositionId) {
        // update - workaround: delete old and create new since PATCH doesn't work
        const deleteRes = await fetch(`${API_BASE}/positions/${editingPositionId}`, {
          method: "DELETE",
          headers: authHeaders(),
        });

        if (!deleteRes.ok) {
          throw new Error("Failed to delete old position for update");
        }

        // create new position
        res = await fetch(`${API_BASE}/positions`, {
          method: "POST",
          headers: {
            ...authHeaders(),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        // create
        res = await fetch(`${API_BASE}/positions`, {
          method: "POST",
          headers: {
            ...authHeaders(),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }


      if (res.status === 401) {
        logoutUser();
        router.push("/login");
        return;
      }

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Request failed: ${res.status}`);
      }

      // success - refresh list
      setNewPositionCode('');
      setNewPositionName('');
      setEditingPositionId(null);
      await fetchPositions(); 
    } catch (e: any) {
      setError(e.message || 'Save failed');
    }
  }
  function startEdit(position: Position) {
    setEditingPositionId(position.positions_id || null);
    setNewPositionCode(position.position_code || '');
    setNewPositionName(position.position_name || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id?: number) {
    if (!id) return;
    if (!confirm('Delete this position?')) return;
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/positions/${id}`, {
        method: "DELETE",
        headers: authHeaders(),
      });

      if (res.status === 401) {
        logoutUser();
        router.push("/login");
        return;
      }

      if (!res.ok) throw new Error("Delete failed");
      await fetchPositions();
    } catch (e: any) {
      setError(e.message || "Delete failed");
    }
  }

  function handleCancelEdit() {
    setEditingPositionId(null);
    setNewPositionCode('');
    setNewPositionName('');
  }

  function handleLogout() {
    logoutUser();
    router.push("/login");
  }

  return (
    <div className="p-4">
      <div className="w-full max-w-none">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Positions Dashboard</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => fetchPositions()} className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Refresh</Button>
            <Button variant="destructive" onClick={handleLogout} className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Logout</Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent>
            <h2 className="text-lg font-semibold mb-4">{editingPositionId ? 'Edit Position' : 'Create New Position'}</h2>
            <form onSubmit={handleCreateOrUpdate} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Position Code"
                value={newPositionCode}
                onChange={(e) => setNewPositionCode(e.target.value)}
                required
              />
              <Input
                placeholder="Position Name"
                value={newPositionName}
                onChange={(e) => setNewPositionName(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <Button type="submit" className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">{editingPositionId ? 'Update' : 'Create'}</Button>
                {editingPositionId && (
                  <Button variant="outline" onClick={handleCancelEdit} className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Cancel</Button>
                )}
              </div>
            </form>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </CardContent>
        </Card>
        
        <section>
          <h2 className="text-lg font-semibold mb-4">Positions List {loading && '(loading...)'}</h2>

          <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-inner">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600">Code</th>
                  <th className="px-4 py-2 text-left text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {positions.length === 0 && !loading && (
                  <tr>
                    <td colSpan={4} className="px-4 py-2 text-center text-gray-500">No positions found</td>
                  </tr>
                )}

                {positions.map((position) => (
                    <tr key={position.positions_id} className="border-t">
                      <td className="px-4 py-2">{position.positions_id}</td>
                      <td className="px-4 py-2">{position.position_code}</td>
                      <td className="px-4 py-2">{position.position_name}</td>
                      <td className="px-4 py-2">
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" onClick={() => startEdit(position)} className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Edit</Button>
                          <Button variant="destructive" size="sm" onClick={() => handleDelete(position.positions_id)} className="hover:scale-105 hover:shadow-md transition-all duration-200 active:scale-95">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}