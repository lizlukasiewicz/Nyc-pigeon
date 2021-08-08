import Link from 'next/link'


export default function Header() {
    return(
        <nav className="relative border-b-4 border-gold w-full bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-2">
                <div className="flex justify-between items-center py-6 space-x-5 flex-shrink md:justify-between md:space-x-5 lg:justify-between">
                    <div className="flex justify-start flex-shrink">
                        <Link href="/">
                            <img className="h-8 w-auto sm:h-20 motion-safe:hover:animate-spin" src="/icon.png" alt="Pigeon logo" />
                        </Link>
                    </div>
                    
                    <div className="flex-shrink justify-end space-x-5">
                        <Link href="/#about">
                            <a className="whitespace-nowrap flex-shrink text-md font-medium transition duration-500 ease-in-out hover:text-blue ">    
                            About Me
                            </a>
                        </Link>
                        <Link href="/projects" >
                        <a className="flex-shrink text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Projects
                        </a>
                        </Link>
                        <Link href="/#tools">
                        <a className=" flex-shrink text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Tools 
                        </a>
                        </Link>
                        <Link href="/resume" >
                        <a className="flex-shrink text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Resume
                        </a>
                        </Link>
                        <Link href="/contact" >
                        <a className="flex-shrink text-md font-medium transition duration-500 ease-in-out hover:text-blue">
                            Contact
                        </a>
                        </Link>
                    </div>
                </div>
            </div>        
        </nav>
    )
}