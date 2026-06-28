import axios from "axios";

const axiosInstans = axios.create(
    {
        baseURL: `${import.meta.env.VITE_BURL}/`,
         headers:{
            'Accept-Language' :'en'
        }
    }
);

export default axiosInstans;