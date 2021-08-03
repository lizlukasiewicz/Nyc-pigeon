import Link from 'next/link'

export default function Header() {
    return(
        <nav className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-2">
                <div className="flex justify-between items-center py-6 space-x-10 md:justify-start md:space-x-10">
                    <div className="flex justify-start flex-none">
                        <Link href="/">
                            <img className="h-8 w-auto sm:h-20" src="/icon.png" alt="Pigeon logo" />
                        </Link>
                    </div>
                    <nav className="flex justify-center px-20">
                    
                    </nav>
                    <div class="flex justify-end space-x-10">
                        <a className="whitespace-nowrap text-lg font-medium hover:text-blue">
                        <Link href="/about">
                            About Me
                        </Link>
                        </a>
                        <a className="whitespace-nowrap text-lg font-medium hover:text-blue">
                        <Link href="/projects" >
                            My Work
                        </Link>
                        </a>
                        <a className="whitespace-nowrap text-lg font-medium hover:text-blue">
                        <Link href="/tools" >
                            Tools 
                        </Link>
                        </a>
                        <a className="whitespace-nowrap text-lg font-medium hover:text-blue">
                        <Link href="/resume" >
                            Resume
                        </Link>
                        </a>
                        <a className="whitespace-nowrap text-lg font-medium hover:text-blue">
                        <Link href="/contact" >
                            Contact
                        </Link>
                        </a>
                    </div>
                </div>
            </div>        
        </nav>
    )
}