import { useQuery } from "@tanstack/react-query";
import axiosInstans from './../api/axiosInstans';

export default function useProducts() {
     const getProducts = async() =>{
    const response = await axiosInstans.get(`Products`
       
    );
    return response.data;


    }

    const query = useQuery(
        {
            queryKey:['products'],
            queryFn:getProducts,
            staleTime:1000*60*5
        }
    );
  return query;
}
