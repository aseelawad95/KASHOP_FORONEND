import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  count: 8,
 increment: () => set((state) => ({ count: state.count + 1 })),
}));
