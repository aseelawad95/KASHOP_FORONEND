import  { useEffect } from 'react';
import auth from './../../api/authAxiosInstans';
import { useCounterStore } from './../../store/useCounterStore';
import useAuthStore from './../../store/useAuthStore';


export default function Cart() {
  const token = useAuthStore((state) => state.token);
  const getItems = async () => {
    try {
      const response = await auth.get(
        "Carts",  

      );
      console.log(response.data); 
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getItems(); 
  }, []);

  return (
    <>
    <div> Cart{token}</div>
    <button onClick={useCounterStore.getState().increment}>Increment</button>
     </>
  );
}
