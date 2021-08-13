import Link from 'next/link'
import {FaHome} from 'react-icons/fa'


export default function Header() {
    return(
        <nav className="relative border-b-4 border-gold w-full bg-primary">
            <div className="max-w-screen-sm md:max-w-screen-2xl mx-0 md:mx-auto md:px-4">
                <div className="flex justify-between items-center md:py-6 space-x-5 flex-shrink md:justify-between md:space-x-5 lg:justify-between">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>     
                    <div className="flex sm:justify-start">
                        <Link href="/">
                            <img className="md:h-20 w-auto motion-safe:hover:animate-spin" src="/icon.png" alt="Pigeon logo" />
                        </Link>
                    </div>
                    
                    <div className="md:flex-shrink md:justify-end md:space-x-5">
                        <Link href="/#about">
                            <a className="md:text-md font-medium transition duration-500 ease-in-out hover:text-blue">    
                            About Me
                            </a>
                        </Link>
                        <Link href="/projects" >
                        <a className="md:text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Projects
                        </a>
                        </Link>
                        <Link href="/#tools">
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Tools 
                        </a>
                        </Link>
                        <Link href="/resume" >
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Resume
                        </a>
                        </Link>
                        <Link href="/contact" >
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Contact
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/">
                        <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                        <FaHome />
                        </a>
                    </Link>
                    <Link href="/#about">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        About Me
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        My Work
                        </a>
                    </Link>
                    <Link href="/#tools">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Tools & Proficiencies
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Resume
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Contact Me
                        </a>
                    </Link>
                </div>
            </div>        
        </nav>
    )
}