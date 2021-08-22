import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {VscGithubInverted} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'


export default function Resume() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
        <Head>
        <title>This is my Resume</title>
        <link rel="icon" href="/icon.png" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
          rel="preload"
          as="style" 
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap"
          />
          <link 
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" 
          media="print"
          onLoad="this.media='all'"
          />
          <noscript>
            <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap"
            />
          </noscript>

      </Head>
      <Header />
      
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center ">
        <div className="flex flex-row w-full justify-around">
            <ul>
                <li><button className="p-3 m-2 bg-palette-5 rounded-lg text-primary transition duration-150 ease-in-out hover:bg-palette-4 transform hover:-translate-y-1 hover:scale-100"><a href="/elizabeth-resume.pdf" target="_blank">View PDF</a></button></li>
                <li><button className="p-3 m-2 bg-palette-5 rounded-lg text-primary transition duration-150 ease-in-out hover:bg-palette-4 transform hover:-translate-y-1 hover:scale-100"><a href="/elizabeth-resume.pdf" download="/resume.pdf" target="_blank">Download PDF</a></button></li>
            </ul>
            <ul>
              <li><button className="p-3 m-2 bg-palette-3 rounded-lg text-primary transition duration-150 ease-in-out hover:bg-palette-4 transform hover:-translate-y-1 hover:scale-100"><a href="/elizabeth-resume.docx" target="_blank">View WordDoc</a></button></li>
              <li><button className="p-3 m-2 bg-palette-3 rounded-lg text-primary transition duration-150 ease-in-out hover:bg-palette-4 transform hover:-translate-y-1 hover:scale-100"><a href="/elizabeth-resume.docx" download="/resume.docx" target="_blank">Download WordDoc</a></button></li>
            </ul>
        </div>
            <Image src="/elizabeth-resume.jpg" alt="an image of authors reume" width="1000" height="1294"/>
        </main>
        <div className="fixed items-end self-start space-y-1 md:space-y-5 bottom-8 md:bottom-10 left-0 md:left-10 bg-primary md:bg-transparent bg-opacity-75 md:bg-opacity-0 rounded-lg p-2 md:p-0">
        <ul className="flex-col space-y-8">
          <li> <a href="https://github.com/lizlukasiewicz" target="_blank"><VscGithubInverted className="text-purple transform scale-150"/></a> </li>
          <li><a href="https://www.instagram.com/nycpigeon/" target="_blank"> <GrInstagram className="text-purple transform scale-150"/> </a> </li>
          <li><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/" target="_blank"> <GrLinkedin className="text-purple transform scale-150"/> </a> </li>
          {/* <li><a> <FaCodepen className="text-purple transform scale-150"/> </a> </li>
          <li><a> <FaHackerrank className="text-purple transform scale-150"/> </a> </li>
          <li><a><SiLeetcode className="text-purple transform scale-150"/></a></li> */}
        </ul>
        <div className="flex-col md:h-40 border-r-4 md:border-purple"></div>
      </div>
        <Footer />
        </div>
    )
}
