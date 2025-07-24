// Centralized API fetch wrapper for session expiry handling
export async function apiFetch(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  if (res.status === 401) {
    // Session expired, log out in frontend
    localStorage.removeItem('manacle_session');
    window.location.href = '/login';
    return null;
  }
  return res;
}
