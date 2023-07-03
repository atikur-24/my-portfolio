import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuItems = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="my-btn-outline w-fit"><a href="#resume">Resume</a></li>
    </>

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <p className="text-color text-3xl font-bold tracking-wide">Atikur Rahman</p>
                <ul className="hidden lg:flex items-center space-x-8 uppercase font-medium">
                { menuItems }
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <FaBars className="w-5 text-xl" />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                        <div className="p-5 bg-color border border-[#28e98c] rounded">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-color text-2xl font-bold tracking-wide">Atikur Rahman</p>
                                <div>
                                    <button
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    onClick={() => setIsMenuOpen(false)}
                                    >
                                    <FaTimes className="text-xl" />
                                    </button>
                                </div>
                            </div>
                            <nav> Asd54321
                            <ul className="space-y-4 uppercase">
                                { menuItems }
                            </ul>
                            </nav>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;