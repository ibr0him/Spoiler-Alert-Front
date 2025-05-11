
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import '../Styles/Slider.css'

const LayoutPage = () => {
    return (
        <>
        <Navbar></Navbar>
         <Outlet></Outlet> 
        </>
    );
}

export default LayoutPage;
