import  { useEffect } from 'react';
import auth from './../../api/authAxiosInstans';
import { useCounterStore } from './../../store/useCounterStore';


export default function Cart() {
  const count = useCounterStore((state) => state.count);
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
    <div> Cart{count}</div>
    <button onClick={useCounterStore.getState().increment}>Increment</button>
     </>
  );
}
