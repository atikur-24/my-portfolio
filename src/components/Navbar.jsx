import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/img/logo/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = (
        <>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li className="resume-btn w-fit">
                <a href="https://drive.google.com/uc?export=download&id=1XLqSn0cLd-2y1vKaS5QadN5KjrxWmnUY">Resume</a>
            </li>
        </>
    );
    return (
        <div className="px-4 md:px-24 lg:px-8 pt-5 pb-5 sm:pb-0 lg:pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="relative flex items-center justify-between">
                <figure>
                    <img src={logo} alt="Atikur" />
                </figure>
                <ul className="hidden lg:flex items-center space-x-8 uppercase font-medium">{menuItems}</ul>
                <div className="lg:hidden px-8">
                    <button aria-label="Open Menu" title="Open Menu" onClick={() => setIsMenuOpen(true)}>
                        <FaBars className="w-5 text-xl" />
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="py-5 px-8 bg-primary border border-[#28e98c] rounded">
                                <div className="flex items-center justify-between mb-4">
                                    <img className="w-12" src={logo} alt="Atikur" />
                                    <div>
                                        <button aria-label="Close Menu" title="Close Menu" onClick={() => setIsMenuOpen(false)}>
                                            <FaTimes className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4 uppercase">{menuItems}</ul>
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
