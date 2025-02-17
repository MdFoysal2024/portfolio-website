import iconImg from '../assets/image.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='navbar fixed z-10 bg-opacity-50 shadow-2xl px-16 md:px-24 lg:px-40  bg-gray-900  hover:text-opacity-100 '>
            <div className="navbar container  mx-auto ">


                <div className='navbar-start'>

                    <Link to='/'>
                        <button className="flex   cursor-pointer  items-center gap-2 lg: text-2xl  text-black font-bold">
                            <img className='w-10' src={iconImg} alt="" />
                            <span className='lg:flex hidden  text-white'>MD FOYSAL</span></button>
                    </Link>
                </div>



                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg text-white px-1 gap-8">
                        <NavLink
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline  font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/">Home
                        </NavLink>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/statistics"> <a href="#about">About</a>
                        </button>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/Skills"><a href="#skills">Skills</a>
                        </button>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/dashboard"> <a href="#education">Education</a>
                        </button>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            ><a href="#course">Course</a>
                        </button>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/p"> Project
                        </button>
                        <button
                            className={({ isActive }) =>
                                ` ${isActive ? 'underline font-bold text-red-600' : 'hover:font-bold'}`}

                            to="/contactUs"> <a href="#contact">Contact</a>
                        </button>

                    </ul>
                </div>

                <div className="dropdown dropdown-end navbar-end lg:hidden ">
                    <div tabIndex={0} role="button" className="btn m-1"><svg
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
                            </svg></div>
                    <ul tabIndex={0} className="dropdown-content mt-48 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline  font-bold' : 'hover:font-bold'}`}

                                to="/">Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/statistics">About
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

                                to="/p">Project
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/contactUs">Contact
                            </NavLink>
                    </ul>
                </div>

                {/* <div className="navbar-end lg:hidden ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button m-12" className="lg:hidden">
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
                            tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow">
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline  font-bold' : 'hover:font-bold'}`}

                                to="/">Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/statistics">About
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

                                to="/p">Project
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    ` ${isActive ? 'underline font-bold' : 'hover:font-bold'}`}

                                to="/contactUs">Contact
                            </NavLink>

                        </ul>
                    </div>

                </div> */}

                <div className="navbar-end lg:flex hidden gap-4 text-xl">
                    <Link to='/resume'>
                        <button className="btn text-xl  border-2 border-gray-300 rounded-full">Resume</button>
                    </Link>

                </div>
            </div>



        </header>
    );
};

export default Navbar;