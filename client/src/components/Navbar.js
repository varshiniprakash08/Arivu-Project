// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-dark w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="text-white text-xl font-semibold">
                            EduAI Platform
                        </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link
                                to="/"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/features"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Features
                            </Link>
                            <Link
                                to="#scholarship-awareness"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Scholarships
                            </Link>
                            <Link
                                to="#nptel-courses"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                NPTEL Courses
                            </Link>
                            <Link
                                to="#contact"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Contact
                            </Link>
                            <Link
                                to="/login"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <Link
                        to="/"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/features"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Features
                    </Link>
                    <Link
                        to="#scholarship-awareness"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Scholarships
                    </Link>
                    <Link
                        to="#nptel-courses"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        NPTEL Courses
                    </Link>
                    <Link
                        to="#contact"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
