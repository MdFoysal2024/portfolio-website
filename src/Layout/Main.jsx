import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="bg-[#10171d] text-white">
            <Navbar></Navbar>
            <div className="container mx-auto">

            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;