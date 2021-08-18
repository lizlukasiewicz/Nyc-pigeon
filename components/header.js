import Link from 'next/link'
import {FaHome} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'


export default function Header() {
    function myFunction() {
        var x = document.getElementById("mobile-menu");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    return(
        <nav className="border-b-4 border-gold w-full bg-primary ">
            <div className="max-w-screen-sm md:max-w-screen-2xl mx-0 md:mx-auto md:px-4">
                <div className="flex justify-between items-center py-3 md:py-6 space-x-5 flex-shrink md:justify-between justify-between">
                    <div className="right-0 flex items-center md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-purple hover:text-blue hover:bg-palette-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <GiHamburgerMenu className="block h-9 w-9" onClick={myFunction}/>
                            <GiHamburgerMenu className="hidden h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>     
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="">
                            <img src="/icon.png" alt="Pigeon logo" className="block md:hidden h-12 md:h-20 w-auto hover:animate-spin"/>
                        </Link>
                        <Link href="/" className="">
                            <img src="/icon.png" alt="Pigeon logo" className="hidden md:block h-8 md:h-20 w-auto hover:animate-spin"/>
                        </Link>
                        </div>
                    </div>
                    
                    <div className="hidden md:block sm:ml-6">
                        <div className="flex space-x-4">
                        <Link href="/#about">
                            <a className="md:text-md font-medium transition duration-500 ease-in-out hover:text-green">    
                            About Me
                            </a>
                        </Link>
                        <Link href="/projects" >
                        <a className="md:text-md font-medium transition duration-500 ease-in-out hover:text-green">
                            Projects
                        </a>
                        </Link>
                        <Link href="/#tools">
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-green">
                            Tools 
                        </a>
                        </Link>
                        <Link href="/resume" >
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-green">
                            Resume
                        </a>
                        </Link>
                        <Link href="/contact" >
                        <a className=" md:text-md font-medium transition duration-500 ease-in-out hover:text-green">
                            Contact
                        </a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden" id="mobile-menu" >
                <div className="grid grid-cols-1 grid-rows-6 px-2 pt-2 pb-3 space-y-1 absolute bg-primary">
                    <Link href="/">
                        <a className="text-purple block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                        <FaHome className="scale-150"/>
                        </a>
                    </Link>
                    <Link href="/#about">
                        <a className="text-purple hover:bg-palette-3 hover:text-blue px-3 py-2 rounded-md text-md font-medium">
                        About Me
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className="text-purple hover:bg-palette-3 hover:text-blue px-3 py-2 rounded-md text-md font-medium">
                        Projects
                        </a>
                    </Link>
                    <Link href="/#tools">
                        <a className="text-purple hover:bg-palette-3 hover:text-blue px-3 py-2 rounded-md text-md font-medium">
                        Tools
                        </a>
                    </Link>
                    <Link href="/resume">
                        <a className="text-purple hover:bg-palette-3 hover:text-blue px-3 py-2 rounded-md text-md font-medium">
                        Resume
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-purple hover:bg-palette-3 hover:text-blue px-3 py-2 rounded-md text-md font-medium">
                        Contact
                        </a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
            @media only screen and (max-width: 650px) {
                #mobile-menu{
                    display: none;
                }
            }
            
            `}</style>        
        </nav>
    )
}

// <div className="md:flex-shrink md:justify-end md:space-x-5">
//className="block md:hidden h-8 md:h-20 w-auto motion-safe:hover:animate-spin"