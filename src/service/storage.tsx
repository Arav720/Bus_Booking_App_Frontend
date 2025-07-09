import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

// Access Token
export const setAccessToken = (token: string) => {
  storage.set('accessToken', token);
};

export const getAccessToken = (): string | undefined => {
  return storage.getString('accessToken') || undefined;
};

export const removeAccessToken = () => {
  storage.delete('accessToken');
};

// Refresh Token
export const setRefreshToken = (token: string) => {
  storage.set('refreshToken', token);
};

export const getRefreshToken = (): string | undefined => {
  return storage.getString('refreshToken') || undefined;
};

export const removeRefreshToken = () => {
  storage.delete('refreshToken');
};

// Guest Session Handling
export const setGuestSession = () => {
  storage.set('isGuest', 'true');
};

export const isGuestSession = (): boolean => {
  return storage.getString('isGuest') === 'true';
};

export const clearGuestSession = () => {
  storage.delete('isGuest');
};

// Guest Info Storage
export const setGuestInfo = (name: string, email: string) => {
  storage.set('guestName', name);
  storage.set('guestEmail', email);
};

export const getGuestInfo = (): { name?: string; email?: string } => {
  return {
    name: storage.getString('guestName'),
    email: storage.getString('guestEmail'),
  };
};

export const clearGuestInfo = () => {
  storage.delete('guestName');
  storage.delete('guestEmail');
};