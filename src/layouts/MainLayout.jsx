import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
