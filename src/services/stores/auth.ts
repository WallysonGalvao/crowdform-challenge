import { USER } from '@app/utils/data';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserProps = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const initialAuthStoreState = {
  token: undefined,
  user: USER,
  users: [USER],
};

type AuthStore = {
  token?: boolean;
  setToken: (token: boolean) => void;

  user: UserProps | null;
  setUser: (user: UserProps | null) => void;

  users: UserProps[];
  setUsers: (users: UserProps) => void;

  reset: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: undefined,
      setToken: token => set({ token }),

      user: USER,
      setUser: user => set({ user }),

      users: [USER],
      setUsers: user => set({ users: [...get().users, user] }),

      reset: () => set(initialAuthStoreState),
    }),
    {
      name: 'user-storage', // unique name
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        console.log('[AuthStore] \u001b[34m hydration start');
        return (_, error) => {
          if (error) {
            console.log('an error happened during hydration', error);
          } else {
            console.log('[AuthStore] \u001b[1;32m hydration finished');
          }
        };
      },
    },
  ),
);
