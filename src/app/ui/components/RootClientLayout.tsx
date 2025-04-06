'use client';

import { useEffect, useState } from 'react';
import Loader from './loader/Loader';


export default function RootClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate load delay (or replace with logic to wait for API/data readiness)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : <>{children}</>;
}
