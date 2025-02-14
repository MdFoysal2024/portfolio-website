import { MdOutlineShoppingCart } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className='bg-[#deaaff]   p-6 '>
            <div className="navbar container  mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 p-2 shadow">
                            <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline  font-bold' : 'hover:text-warning'}`}

                            to="/">Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/statistics">Statistics
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/dashboard">Dashboard
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/contactUs">Contact Us
                        </NavLink>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-black text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg text-black px-1 gap-8">
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline  font-bold' : 'hover:text-warning'}`}

                            to="/">Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/statistics">Statistics
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/dashboard">Dashboard
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:text-warning'}`}

                            to="/contactUs">Contact Us
                        </NavLink>

                    </ul>
                </div>
                <div className="navbar-end flex gap-4 text-xl">
                    <button className="btn text-xl  border-2 border-gray-300 rounded-full"><MdOutlineShoppingCart /></button>
                    <button className="btn  text-xl border-2 border-gray-300 rounded-full"><FiHeart /></button>
                </div>
            </div>

            {/* <div className='text-center text-white py-12 space-y-6'>
                <h2 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='btn btn-primary'>Shop Now</button>
            </div>


            <div className='    '>
                <Banner></Banner>
            </div> */}

        </header>
    );
};

export default Navbar;