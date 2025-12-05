export const TOKEN_KEY = "accessToken";
export const REGISTERED_USERS_KEY = "registeredUsers";

export function saveToken(token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
}

export function logoutUser() {
  if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
}

export function saveRegisteredUser(username: string) {
  if (typeof window !== 'undefined') {
    const users = getRegisteredUsers();
    if (!users.includes(username)) {
      users.push(username);
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
    }
  }
}

export function getRegisteredUsers(): string[] {
  if (typeof window !== 'undefined') {
    const users = localStorage.getItem(REGISTERED_USERS_KEY);
    return users ? JSON.parse(users) : [];
  }
  return [];
}

export function isUserRegistered(username: string): boolean {
  const users = getRegisteredUsers();
  return users.includes(username);
}