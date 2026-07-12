import { Link } from "react-router";
import useAuthStore from './../../store/useAuthStore';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = ()=>{
    logout(),
    navigate('/login')
  }
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {token ? (
          <>
            <Link to="/Cart">Cart</Link>
            <Link to="/logout" onClick={handleLogout} component="button">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
    </nav>
  )
}
