import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import {VscGithubInverted, VscGithub} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import {MdPhonelink} from 'react-icons/md'
//import {SiJavascript} from 'react-icons/si'
//import {FaCodepen, FaHackerrank} from 'react-icons/fa'
//import {SiLeetcode} from 'react-icons/si'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:py-2 bg-white">
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
      
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center ">
        <div className="flex-row md:justify-between md:mt-16">
        <div className="absolute content-center z-30 bg-palette-4 bg-opacity-95 -ml-20 sm:w-1/3 md:h-1/2 md:p-5">
          <p className="md:text-lg sm:text-sm text-left font-extralight text-gold">Hey there my name is</p>
          <div className="ml-10 py-3">
          <p className="md:text-xl sm:text-lg leading-none text-left text-primary">Elizabeth <br></br>Lukasiewicz</p>
          </div>
          <h4 className="md:text-lg sm:text-sm text-left text-opacity-75 font-medium text-primary">I build things for the web</h4>
          <p className="md:text-md sm:text-sm font-light text-primary">I'm a software engineer specializing in creating solutions for users</p>
        <button className="bg-primary mt-10 p-3 border-2 sm:text-md md:font-medium text-blue rounded-lg shadow-md transition duration-300 hover:bg-palette-4 hover:text-primary active:bg-palette-5"><a href="mailto:lizlukasiewicz@gmail.com">contact me</a></button>
        </div>
        <img src="/flushing.png" className="rounded-full -mr-10 md:flex-shrink-0"/>
        </div>
       
        <div className="md:w-3/4 grid grid-cols-2 gap-1 py-5 md:flex">
        <img src="/image1.png" width="400" height="382" className="md:float-left md:flex-shrink-0"/>
        <div className="bg-primary md:h-96 overflow-y-auto" title="about" id="about">
          <h1 className="md:text-xl text-blue font-light md:text-center">About Me: </h1>
          <p className="text-left md:overflow-ellipsis ">As a Full-Stack Software Engineer with a background in performing arts, I am composed of 
          strong interpersonal skills and driven by creating streamlined, user-friendly solutions with a pragmatic approach. I employ my skills 
          with back-end JavaScript and Python to create organized and automated software that is easily approachable for users. With a healthy 
          serving of ambition, I am always looking to challenge myself.  </p>
        </div>
      </div>
        <div className="md:w-3/4 grid grid-cols-3 my-5 gap-4">
          <div className="col-span-3"><h2 className="md:text-xl font-light text-blue text-left" title="tools" id="tools">Tools & Proficiencies</h2> </div>
          <div><p className="md:text-lg font-medium">Languages</p>
            <ul>
              <li className="font-light md:text-md"> Javascript</li>
              <li className="font-light md:text-md">Python</li>
              <li className="font-light md:text-md">Typescript</li>
              <li className="font-light md:text-md">HTML</li>
              <li className="font-light md:text-md">CSS</li>
            </ul>
          </div>
          <div><p className="md:text-lg font-medium">Libraries</p>
            <ul>
              <li className="font-light md:text-md">Node</li>
              <li className="font-light md:text-md">Axios</li>
              <li className="font-light md:text-md">JQuery</li>
              <li className="font-light md:text-md">Bootstrap</li>
              <li className="font-light md:text-md">Tailwind</li>
              <li className="font-light md:text-md">Bcrypt</li>
            </ul>
          </div>
          <div><p className="md:text-lg font-medium">Frameworks:</p>
            <ul>
            <li className="font-light md:text-md">Express</li>
            <li className="font-light md:text-md">React</li>
            <li className="font-light md:text-md">Next</li>
            <li className="font-light md:text-md">NextAuth</li>
            </ul>
          </div>
          <div>
            <ul><p className="md:text-lg font-medium">Databases:</p>
            <li className="font-light md:text-md">MongoDB</li>
            <li className="font-light md:text-md">Mongoose</li>
            <li className="font-light md:text-md">PostgreSQL</li>
            <li className="font-light md:text-md">Sequelize</li>
            </ul>
          </div>
          <div><p className="md:text-lg font-medium">Other:</p>
            <ul>
              <li className="font-light md:text-md">Git</li>
              <li className="font-light md:text-md">Github</li>
              <li className="font-light md:text-md">JSON</li>
              <li className="font-light md:text-md">AJAX</li>
              <li className="font-light md:text-md">RESTful Routing</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-10/12 grid grid-cols-2 gap-1 md:py-5">
          <div className="col-span-2"><h2 className="md:text-xl md:font-light text-blue text-center">Things I've Built</h2> </div>
          <div className="bg-palette-1">
            <div><h1 className="md:text-lg font-medium text-blue hover:text-purple"><Link href="/projects/#riders-guild">Riders Guild</Link></h1>
              <p><span className="md:text-md font-medium text-blue">Next.js, MongoDB, Mongoose, NextAuth, React </span><br></br></p>
              <div className="flex justify-evenly md:py-3">
              <a href="https://github.com/lizlukasiewicz/capstone" target="_blank" className="order-first"><VscGithub className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              <a href="https://capstone-nine.vercel.app/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              </div>
            </div> 
            <img src="/riders-guild.gif" alt="a gif of the Riders Guild webpage" className="p-2"  width="450" height="250"/>
          </div>
          <div className=" bg-palette-4 ">
            <div><h1 className="md:text-lg text-primary hover:text-orange"><Link href="/projects/#falendar">Falendar</Link></h1>
            <p><span className="font-medium text-primary">React.js, Styled-Components, MaterialUI, MongoDB, Express.js</span><br></br></p> 
            <div className="flex justify-evenly md:py-3">
            <a href="https://github.com/lizlukasiewicz/Collab-MERN-Client" target="_blank" className="order-first"> <VscGithub className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            </div>
            <img src="/falendar.gif" alt="a gif of the Falendar webpage" className="p-2" width="450" height="250"/>
          </div>
          <div className="bg-palette-3">
            <div>
            <h1 className="md:text-lg text-primary hover:text-orange"><Link href="/projects/#dispatch">Dispatch</Link></h1>
            <p><span className="font-medium text-primary">Sequelize, Express.js, Mapbox, PostgreSQL</span><br></br></p>
            <div className="flex justify-evenly md:py-3">
            <a href="https://github.com/lizlukasiewicz/dispatch" target="_blank" > <VscGithub className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://dispatch-lite.herokuapp.com/" target="_blank" > <MdPhonelink className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            </div>
            <img src="/dispatch.gif" alt="a gif of the Dispatch webpage" className="p-2" width="450" height="250"/>
          </div>
          <div className="bg-primary">
            <div>
            <h1 className="md:text-lg text-blue hover:text-purple"><Link href="/projects/#escape-noface">Escape Noface</Link></h1>
            <p><span className="font-medium text-blue">JavaScript, HTML Canvas, HTML, CSS</span><br></br></p>
            <div className="flex justify-evenly md:py-3">
            <a href="https://github.com/lizlukasiewicz/Project-1-escape-Noface" target="_blank" className="order-first"> <VscGithub className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            <a href="https://lizlukasiewicz.github.io/Project-1-escape-Noface/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            </div> 
            </div>
            <img src="/escape-noface.gif" alt="a gif of the Escape Noface webpage" className="p-2" width="450" height="250"/>
          </div>
        </div>
      
      
      </main>
      <div className="md:fixed items-end self-start space-y-5 bottom-10 left-20">
        <ul className="flex-col space-y-8">
          <li> <a href="https://github.com/lizlukasiewicz" target="_blank"><VscGithubInverted className="md:text-purple transform scale-150"/></a> </li>
          <li><a href="https://www.instagram.com/nycpigeon/" target="_blank"> <GrInstagram className="md:text-purple transform scale-150"/> </a> </li>
          <li><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/" target="_blank"> <GrLinkedin className="md:text-purple transform scale-150"/> </a> </li>
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
