import { useQuery } from "@tanstack/react-query";
import axiosInstans from './../api/axiosInstans';

export default function useProductDetails(productId) {
     const getProduct = async() =>{
    const response = await axiosInstans.get(`Products/${productId}`);

    return response.data;


    }

    const query = useQuery(
        {
            queryKey:['products', productId,"en"],
            queryFn:getProduct,
            staleTime:1000*60*5
        }
    );
  return query;
}
