import { useQuery } from "@tanstack/react-query";
import axiosInstans from './../api/axiosInstans';

export default function useCategories() {
     const getCategories = async() =>{
    const response = await axiosInstans.get(`Categories`
       
    );
    return response.data;


    }

    const query = useQuery(
        {
            queryKey:['categories'],
            queryFn:getCategories,
            staleTime:1000*60*5
        }
    );
  return query;
}
