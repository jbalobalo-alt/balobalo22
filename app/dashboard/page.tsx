"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from 'react';

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = 'Guest';

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {username}!</h2>
        <p className="text-blue-100">Here's what's happening with your account today.</p>
      </div>

      {/* Debug Info - Collapsible */}
      {token && (
        <details className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <summary className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-800">
            Debug Information
          </summary>
          <div className="mt-4">
            <p className="text-sm text-lightblue-600 mb-2">Your Bearer Token:</p>
            <pre className="p-3 bg-light-blue-100 text-xs rounded break-all overflow-x-auto">{token}</pre>
          </div>
        </details>
      )}
    </div>
  );
}
