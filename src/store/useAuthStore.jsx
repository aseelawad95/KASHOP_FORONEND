
import { create } from 'zustand';


const useAuthStore = create((set) => ({
    token:localStorage.getItem('accessToken') || null,
    setToken: (token) => {
        set({ token });
          localStorage.setItem('accessToken', token);
    },
    logout:() => {
        set({ token: null });
        localStorage.removeItem('accessToken');
    }
}));

export default useAuthStore;

