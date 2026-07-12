import { useQuery } from "@tanstack/react-query";
import auth from "../api/authAxiosInstans"

export default function useCart() {
    const getItems = async () => {
      const response = await auth.get('/Carts');
        return response.data;
    }
  return  useQuery({
   queryFn: getItems,
   queryKey: ['cart','en'],
   staleTime: 1000 * 60 * 5

  })
}
