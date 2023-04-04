import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  token: string;
};

interface TUserStore {
  user?: User;
  setUser: (user: User) => void;
  logoutUser: () => void;
}

export const useUserStore = create<TUserStore>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (data) => set((_) => ({ user: data })),
      logoutUser: () => set((_) => ({ user: undefined })),
    }),
    {
      name: "hrms",
    }
  )
);
