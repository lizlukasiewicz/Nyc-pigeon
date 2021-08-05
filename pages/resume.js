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
            <ul>
                <li><a href="/resume.pdf" target="_blank"><button>View PDF</button></a></li>
                <li><a href="/resume.pdf" download="/resume.pdf" target="_blank"><button>Download PDF</button></a></li>
            </ul>
            <Image src="/resume.jpg" alt="an image of authors reume" width="1000" height="1294"/>
        </main>
        <div className="fixed items-end self-start space-y-5 bottom-10 left-20">
        <ul className="flex-col space-y-8">
          <li> <a href="https://github.com/lizlukasiewicz" target="_blank"><VscGithubInverted className="text-purple transform scale-150"/></a> </li>
          <li><a href="https://www.instagram.com/nycpigeon/" target="_blank"> <GrInstagram className="text-purple transform scale-150"/> </a> </li>
          <li><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/" target="_blank"> <GrLinkedin className="text-purple transform scale-150"/> </a> </li>
          {/* <li><a> <FaCodepen className="text-purple transform scale-150"/> </a> </li>
          <li><a> <FaHackerrank className="text-purple transform scale-150"/> </a> </li>
          <li><a><SiLeetcode className="text-purple transform scale-150"/></a></li> */}
        </ul>
        <div className="flex-col h-40 border-r-4 border-purple"></div>
      </div>
        <Footer />
        </div>
    )
}
