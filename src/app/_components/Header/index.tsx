'use client';

import { useEffect, useState } from "react";


const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  
    const handleIconClick = () => {
        window.location.reload();
    };

    return (
        <>  
        <div className="mx-auto max-w-screen-2xl bg-white overflow-x-hidden">
        <div className="flex flex-col mx-0 lg:mx-16">
            <div className="shadow-sm md:bg-white bg-headingColor-500">
                <div className="flex flex-col flex-shrink-0 justify-center h-16 xlg:h-20 w-full">
                    <div className="flex justify-between items-center px-6 lg-px-0">
                        <div className="block md:hidden flex items-start justify-start w-auto" onClick={toggleMenu}>
                            <svg
                                className="block md:hidden"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 12H17M3 6H21M3 18H21"
                                    stroke="#F4EBFF"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="flex items-center font-bold text-xl md:text-2xl  justify-center md:justify-center sm:justify-center w-full md:w-auto">
                            <div onClick={handleIconClick} className="cursor-pointer">
                                TestTaker.
                            </div>
                        </div>

                        <div className="hidden md:flex md:items-center md:space-x-4">
                        <a  href="#home" className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-textColor-500 font-inter font-semibold leading-5 lg:leading-6">
                                Home
                            </a>
                            <a href="#" className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-textColor-500 font-inter font-semibold leading-5 lg:leading-6">
                                Support
                            </a>
                            <a href="#" className="hover:text-buttonHover-400 flex justify-center items-center gap-2 text-textColor-500 font-inter font-semibold leading-5 lg:leading-6">
                                Features
                            </a>
                            <div  className="cursor-pointer hover:text-buttonHover-400 flex justify-center items-center gap-2 text-textColor-500 font-inter font-semibold leading-5 lg:leading-6">
                                Login
                            </div>
                            <div  className="cursor-pointer hover:bg-buttonHover-500 flex justify-center items-center gap-2 px-[1.125rem] p-2 rounded-lg border border-buttonColor-500 bg-buttonColor-500 text-white font-inter font-semibold leading-5 lg:leading-6 cursor-pointer">
                                Sign Up
                            </div>
                          
                        </div>

                        {isMobile && (
                            <div className="flex justify-center items-center rounded-lg bg-[#6941c6]">
                                <div className="flex items-start">
                                    <div className="flex justify-center items-center text-white font-inter text-sm font-semibold leading-5">
                                        Join
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {menuOpen && (
                    <div className="flex flex-col bg-white py-2 px-6">
                        <a   href="#home" className="py-2 text-textColor-500 font-inter font-semibold leading-6">
                            Home
                        </a>
                        <a href="#" className="py-2 text-textColor-500 font-inter font-semibold leading-6">
                            Features
                        </a>
                        <a href="/login" className="py-2 text-textColor-500 font-inter font-semibold leading-6">
                            Login
                        </a>
                        <a href="/signup" className="py-2 text-textColor-500 font-inter font-semibold leading-6">
                            Sign Up
                        </a>
                    </div>
                )}
            </div>
            </div>
            </div>
                </>
    );
};

export default Navbar;
