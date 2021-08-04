import Head from 'next/head'
import Header from '../components/header'
import {VscGithubInverted} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import {FaCodepen, FaHackerrank} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-primary">
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
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className="flex-row mt-16">
        <div className="absolute z-30 bg-palette-4 w-1/3 h-1/2 p-5">
          <p className="text-lg text-left font-light text-gold">Hey there my name is</p>
          <h1 className="text-xl text-primary">Elizabeth Lukasiewicz</h1>
          <h4 className="text-lg text-left text-opacity-75 font-medium text-primary">I build things for the web</h4>
          <p className="text-md font-light text-primary">I'm a software engineer specializing in creating solutions for users</p>
        <button className="bg-primary mt-10 p-3 border-2 text-md font-medium text-blue rounded-lg shadow-md transition duration-300 hover:bg-palette-4 hover:text-primary active:bg-palette-5">contact me</button>
        </div>
        <img src="/flushing.png" className=" rounded-full"/>
        </div>
        
        <div className="w-3/4 grid grid-cols-3 gap-4">
          <div className="col-span-3"><h2 className="text-xl font-thin text-purple text-left">Tools & Proficiencies</h2> </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>

        </div>
      
      
      </main>
      <div className="fixed items-end self-start space-y-5 bottom-10 left-20">
        <ul className="flex-col space-y-8">
          <li> <a href="https://github.com/lizlukasiewicz" ><VscGithubInverted className="text-purple transform scale-150"/></a> </li>
          <li><a href="https://www.instagram.com/nycpigeon/"> <GrInstagram className="text-purple transform scale-150"/> </a> </li>
          <li><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/"> <GrLinkedin className="text-purple transform scale-150"/> </a> </li>
          {/* <li><a> <FaCodepen className="text-purple transform scale-150"/> </a> </li>
          <li><a> <FaHackerrank className="text-purple transform scale-150"/> </a> </li>
          <li><a><SiLeetcode className="text-purple transform scale-150"/></a></li> */}
        </ul>
        <div className="flex-col h-16 border-r-4 border-purple"></div>
      </div>
      <footer className="flex items-center justify-center w-full h-40 border-t bg-palette-3">
        <a
          className="flex items-center justify-center text-primary hover:text-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/self.png" alt="circular portrait photo" className="h-24 ml-20" />
        </a>
      </footer>
    </div>
  )
}
