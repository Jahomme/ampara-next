'use client';

import { DiariesContainer } from '@/components/Diaries';
import { getAuthTokenClient } from '@/utils/get-token-client';
import { getAuthTokenServer } from '@/utils/get-token-server';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Diaries() {
  const token = getAuthTokenClient();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [router, token]);

  return <DiariesContainer />;
}
