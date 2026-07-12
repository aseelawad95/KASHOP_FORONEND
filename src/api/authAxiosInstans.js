import axios from "axios";
import useAuthStore from "../store/useAuthStore";
const tokenStore = useAuthStore.getState().token;
console.log(tokenStore);
  const token = localStorage.getItem("accessToken");

const auth = axios.create(
    {
        baseURL: `${import.meta.env.VITE_BURL}/`,
         headers:{
            'Accept-Language' :'en',
              "Authorization": `Bearer ${token}`
        }
    }
);

export default auth;