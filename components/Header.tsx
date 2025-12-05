'use client';

import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/navigation';

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  if (isAuthPage) {
    return null;
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <Navigation />
      </div>
    </header>
  );
}