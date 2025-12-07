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
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-700 to-indigo-800 animate-gradient-shift">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float-1"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl animate-float-3"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-cyan-500/15 rounded-full blur-lg animate-float-4"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 min-h-[80vh] flex flex-col">
          <header className="bg-gradient-to-r from-green-100 to-purple-100 shadow-sm border-b border-blue-200 px-6 py-4 rounded-t-xl">
            <h1 className="text-2xl font-bold text-black text-center">Welcome to My Dashboard</h1>
          </header>

          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}