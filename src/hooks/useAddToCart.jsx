import { useMutation } from '@tanstack/react-query';
import auth from './../api/authAxiosInstans';

export default function useAddToCart() {
  return useMutation({
    mutationFn: async ({ productId, count }) => {
      return await auth.post('/Carts', {
        ProductId: productId,
        Count: count,
      });
    },
  });
}
