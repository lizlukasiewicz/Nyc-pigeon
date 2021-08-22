import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {VscGithubInverted, VscGithub} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import {MdEmail} from 'react-icons/md'

export default function Contact() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>Elizabeth Lukasiewicz</title>
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
      <main className="flex flex-col items-start md:items-center w-full flex-1 md:px-20 text-center ">
      <div className="w-full md:w-5/6 grid grid-cols-1 md:grid-cols-2 md:gap-1 md:space-y-6">
       <ul className="flex flex-col justify-start mt-5 md:mt-10 ml-5 md:ml-20">
        <li className="inline-flex space-x-4 justify-self-end py-2 z-10"><a href="mailto:lizlukasiewicz@gmail.com"> <MdEmail className="transform scale-150"/> </a><p>lizlukasiewicz@gmail.com </p></li>
        <li className="inline-flex space-x-4 justify-self-end py-3 z-10"><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/" target="_blank"> <GrLinkedin className="transform scale-150"/></a><p>linkedin.com/in/elizabeth-lukasiewicz/</p></li>
        </ul>
        <img src="/contact.jpg" alt="image of Elizabeth" width="994" height="1427"  />
        </div> 
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