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
    <div className="flex flex-col static items-stretch sm:items-center w-screen sm:w-full min-h-screen py-0 pr-0 sm:py-2 bg-white">
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
      
      <main className="flex flex-col items-center w-full flex-1 px-1 md:px-20 space-y-2 md:space-y-0 text-center divide-y-2 md:divide-y-0 divide-gold md:divide-transparent divide-solid md:divide-none ">
        <div className="flex-row justify-center md:w-10/12 sm:mt-1 md:pb-72" id="splash">
        <div className="content-center md:left-20 top-0 bg-palette-4 bg-opacity-95 h-64 md:h-1/2 p-3 md:p-5 md:mx-20" id="box">
          <p className="text-md md:text-lg leading-loose text-left font-light md:font-extralight text-gold">Hey there! my name is</p>
          <div className="md:ml-10 md:py-3">
          <p className="text-lg md:text-xl leading-none text-center md:text-left text-primary">Elizabeth <br></br>Lukasiewicz</p>
          </div>
          <h4 className="text-md md:text-lg text-left text-opacity-75 text-primary">I build things for the web</h4>
          <p className="hidden md:block text-sm md:text-md font-light text-primary">I'm a software engineer specializing in creating solutions for users</p>
        <button className="bg-primary mt-5 md:mt-10 p-3 border-2 sm:text-md md:font-medium text-blue rounded-lg shadow-md transition duration-300 hover:bg-palette-4 hover:text-primary active:bg-palette-5"><a href="mailto:lizlukasiewicz@gmail.com">contact me</a></button>
        </div>
        
        </div>
       
        <div className="w-full md:w-3/4 grid md:grid-cols-2 py-5 md:gap-x-3 md:divide-x divide-gold md:divide-gold md:flex">
        <img src="/image1.png" width="400" height="382" className="md:float-left"/>
        <div className="bg-primary md:h-96 mt-5 md:mt-0 overflow-y-auto md:pl-5" title="about" id="about">
          <h1 className="text-lg md:text-xl text-blue font-light md:text-center">About Me: </h1>
          <p className="text-center md:overflow-ellipsis ">As a Full-Stack Software Engineer with a background in performing arts, I am composed of 
          strong interpersonal skills and driven by creating streamlined, user-friendly solutions with a pragmatic approach. I employ my skills 
          with back-end JavaScript and Python to create organized and automated software that is easily approachable for users. With a healthy 
          serving of ambition, I am always looking to challenge myself.  </p>
        </div>
      </div>
      <div className="w-full md:w-11/12 md:grid md:grid-cols-2 md:gap-1 md:py-5">
          <div className="col-span-2 py-5"><h2 className="text-lg md:text-xl md:font-light text-blue text-center">Things I've Built</h2> </div>
          <div className="bg-palette-1 pb-2 md:pb-0">
            <div><h1 className="text-lg font-medium text-blue hover:text-purple"><Link href="/projects/#riders-guild">Riders Guild</Link></h1>
              <p><span className="md:text-md font-medium text-blue">Next.js, MongoDB, Mongoose, NextAuth, React </span><br></br></p>
              <div className="flex justify-evenly py-2 md:py-3">
              <a href="https://github.com/lizlukasiewicz/capstone" target="_blank" className="order-first"><VscGithub className="transform scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              <a href="https://capstone-nine.vercel.app/" target="_blank" className="order-last"><MdPhonelink className="transform scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              </div>
            </div> 
            <img src="/riders-guild.gif" alt="a gif of the Riders Guild webpage" className="md:ml-3 mb-2"  width="500" height="300"/>
          </div>
          <div className=" bg-palette-4 pb-2 md:pb-0">
            <div><h1 className="text-lg text-primary hover:text-orange"><Link href="/projects/#falendar">Falendar</Link></h1>
            <p><span className="font-medium text-primary">React.js, Styled-Components, MaterialUI, MongoDB, Express.js</span><br></br></p> 
            <div className="flex justify-evenly py-2 md:py-3">
            <a href="https://github.com/lizlukasiewicz/Collab-MERN-Client" target="_blank" className="order-first"> <VscGithub className="transform scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank" className="order-last"><MdPhonelink className="transform scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            </div>
            <img src="/falendar.gif" alt="a gif of the Falendar webpage" className="md:ml-3 mb-2" width="500" height="300"/>
          </div>
          <div className="bg-palette-3 pb-2 md:pb-0">
            <div>
            <h1 className="text-lg text-primary hover:text-orange"><Link href="/projects/#dispatch">Dispatch</Link></h1>
            <p><span className="font-medium text-primary">Sequelize, Express.js, Mapbox, PostgreSQL</span><br></br></p>
            <div className="flex justify-evenly py-2 md:py-3">
            <a href="https://github.com/lizlukasiewicz/dispatch" target="_blank" > <VscGithub className="transform scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://dispatch-lite.herokuapp.com/" target="_blank" > <MdPhonelink className="transform scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            </div>
            <img src="/dispatch.gif" alt="a gif of the Dispatch webpage" className="md:ml-3 mb-2" width="500" height="300"/>
          </div>
          <div className="bg-primary pb-2 md:pb-0">
            <div>
            <h1 className="text-lg text-blue hover:text-purple"><Link href="/projects/#escape-noface">Escape Noface</Link></h1>
            <p><span className="font-medium text-blue">JavaScript, HTML Canvas, HTML, CSS</span><br></br></p>
            <div className="flex justify-evenly py-2 md:py-3">
            <a href="https://github.com/lizlukasiewicz/Project-1-escape-Noface" target="_blank" className="order-first"> <VscGithub className="transform scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            <a href="https://lizlukasiewicz.github.io/Project-1-escape-Noface/" target="_blank" className="order-last"><MdPhonelink className="transform scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            </div> 
            </div>
            <img src="/escape-noface.gif" alt="a gif of the Escape Noface webpage" className="md:ml-3 mb-2" width="500" height="300"/>
          </div>
        </div>
        <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 my-0 md:my-5 pb-5 gap-0 md:gap-4">
          <div className="col-span-2 md:col-span-3">
            <h2 className="text-lg md:text-xl font-medium md:font-light text-blue text-center md:text-left" title="tools" id="tools">Tools & Proficiencies</h2> </div>
          <div className="justify-self-start">
            <p className="text-md md:text-lg font-medium">Languages</p>
            <ul>
              <li className="font-light text-md"> Javascript</li>
              <li className="font-light text-md">Python</li>
              <li className="font-light text-md">Typescript</li>
              <li className="font-light text-md">HTML</li>
              <li className="font-light text-md">CSS</li>
            </ul>
          </div>
          <div className="justify-self-end md:justify-self-center">
            <p className="text-md md:text-lg font-medium">Libraries</p>
            <ul>
              <li className="font-light text-md">Node</li>
              <li className="font-light text-md">Axios</li>
              <li className="font-light text-md">JQuery</li>
              <li className="font-light text-md">Bootstrap</li>
              <li className="font-light text-md">Tailwind</li>
              <li className="font-light text-md">Bcrypt</li>
            </ul>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <p className="text-md md:text-lg font-medium">Frameworks</p>
            <ul>
            <li className="font-light text-md">Express</li>
            <li className="font-light text-md">React</li>
            <li className="font-light text-md">Next</li>
            <li className="font-light text-md">NextAuth</li>
            </ul>
          </div>
          <div className="justify-self-end md:justify-self-end">
            <p className="text-md md:text-lg font-medium">Databases</p>
            <ul>
            <li className="font-light text-md">MongoDB</li>
            <li className="font-light text-md">Mongoose</li>
            <li className="font-light text-md">PostgreSQL</li>
            <li className="font-light text-md">Sequelize</li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 justify-self-center md:justify-self-end">
            <p className="text-md md:text-lg font-medium">Other</p>
            <ul>
              <li className="font-light text-md">Git</li>
              <li className="font-light text-md">Github</li>
              <li className="font-light text-md">JSON</li>
              <li className="font-light text-md">AJAX</li>
              <li className="font-light text-md">RESTful Routing</li>
            </ul>
          </div>
        </div>
      </main>
      <div className="fixed items-end self-start space-y-1 md:space-y-5 bottom-8 md:bottom-10 left-0 md:left-10 bg-primary md:bg-transparent bg-opacity-75 md:bg-opacity-0 rounded-lg p-2 md:p-0">
        <ul className="flex-col space-y-8">
          <li> <a href="https://github.com/lizlukasiewicz" target="_blank"><VscGithubInverted className="text-purple transform scale-150"/></a> </li>
          <li><a href="https://www.instagram.com/nycpigeon/" target="_blank"> <GrInstagram className="text-purple transform scale-150"/> </a> </li>
          <li><a href="https://www.linkedin.com/in/elizabeth-lukasiewicz-a2904a59/" target="_blank"> <GrLinkedin className="text-purple transform scale-150"/> </a> </li>
        </ul>
        <div className="flex-col md:h-40 border-r-4 md:border-purple"></div>
      </div>
      <Footer />
      <style jsx>{`
        #splash {
          background-image: url('/flushing.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position-x: -50px;
          background-position-y: -50px;
        }
        #box{
          width: 500px;
        }
        @media only screen and (max-width: 650px) {
        #box{
          width: 350px;
          margin: 0px;
        }
      }
      `}</style>
    </div>
  )
}
//<li><a> <FaCodepen className="text-purple transform scale-150"/> </a> </li>
//          <li><a> <FaHackerrank className="text-purple transform scale-150"/> </a> </li>
//          <li><a><SiLeetcode className="text-purple transform scale-150"/></a></li>