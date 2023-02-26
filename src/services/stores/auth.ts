import { create } from 'zustand';

export const initialAuthStoreState = {
  token: null,
};

type AuthStore = {
  token: string | null | boolean;
  setToken: (token: string | null | boolean) => void;
};

export const useAuthStore = create<AuthStore>()(set => ({
  token: null,
  setToken: token => set({ token }),

  reset: () => set(initialAuthStoreState),
}));
