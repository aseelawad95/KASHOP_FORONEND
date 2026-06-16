import { createBrowserRouter } from "react-router";
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';

const router = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        children : [
            {
               index : true,
                element : <Home />
            },
            {
                path: 'products',
                element : <Products />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
])
export default router;