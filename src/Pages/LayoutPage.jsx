
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const LayoutPage = () => {
    return (
        <>
        <Navbar></Navbar>
         <Outlet></Outlet> 
        </>
    );
}

export default LayoutPage;
