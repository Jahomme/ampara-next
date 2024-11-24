import { cookies } from 'next/headers';

export function getAuthTokenServer() {
  const cookieStore = cookies();
  return cookieStore.get('jwt')?.value || null;
}
