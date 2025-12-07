'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getToken } from '@/lib/auth';

export default function DashboardLayout({children}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/login');
    }
  }, [router]);


  return (
    <div className="min-h-screen bg--50 flex flex-col">
      <header className="bg-blue-100 shadow-sm border-b border-blue-200 px-6 py-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to my Dashboard</h1>
      </header>

      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}