//
import { create } from "zustand";

interface ClientLoader {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
export const useClientLoader = create<ClientLoader>()((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
