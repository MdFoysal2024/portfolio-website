import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="bg-[#d0f0fd] h-[100vh]">
            <Navbar></Navbar>
            <div className="container mx-auto">

            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;