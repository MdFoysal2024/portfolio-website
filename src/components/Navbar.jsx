import iconImg from '../assets/image.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-[#92dffd]  py-2  '>
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
                                    ` ${isActive ? 'underline  font-bold' : 'hover:font-bold'}`}

                                to="/">Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/statistics">About Me
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/Skills">Skills
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/dashboard">Education
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/p">My Project
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/contactUs">Contact Me
                            </NavLink>

                        </ul>
                    </div>
                    <Link to='/'>
                        <button className="flex cursor-pointer  items-center gap-2 lg: text-3xl  text-black font-bold">
                            <img className='w-12' src={iconImg} alt="" />
                            <span>MD FOYSAL</span></button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg text-black px-1 gap-8">
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline  font-bold' : 'hover:font-bold'}`}

                            to="/">Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                            to="/statistics">About Me
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                            to="/Skills">Skills
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                            to="/dashboard">Education
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                            to="/p">My Project
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                            to="/contactUs">Contact Me
                        </NavLink>

                    </ul>
                </div>
                <div className="navbar-end flex gap-4 text-xl">
                    <Link to='/resume'>
                        <button className="btn text-xl  border-2 border-gray-300 rounded-full">Resume</button>
                    </Link>

                </div>
            </div>



        </header>
    );
};

export default Navbar;