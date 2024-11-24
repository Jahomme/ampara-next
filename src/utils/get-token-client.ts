export function getAuthTokenClient() {
  if (typeof document !== 'undefined') {
    const cookieString = document.cookie;
    const cookies = Object.fromEntries(
      cookieString.split('; ').map((cookie) => {
        const [key, value] = cookie.split('=');
        return [key, decodeURIComponent(value)];
      }),
    );
    return cookies['jwt'] || null;
  }

  // Caso seja executado no servidor, retornar null
  return null;
}
