import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="bg-[#f8d9fd] h-[100vh]">
            <Navbar></Navbar>
            <div className="container mx-auto">

            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;