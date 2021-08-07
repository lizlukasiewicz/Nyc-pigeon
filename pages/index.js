import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
//import Email from '../components/email'
import {VscGithubInverted, VscGithub} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import {MdPhonelink} from 'react-icons/md'
//import {SiJavascript} from 'react-icons/si'
//import {FaCodepen, FaHackerrank} from 'react-icons/fa'
//import {SiLeetcode} from 'react-icons/si'

export default function Home() {
  return (
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
      
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center ">
        <div className="flex-row justify-between mt-16">
        <div className="absolute content-center z-30 bg-palette-4 bg-opacity-95 -ml-20 w-1/3 h-1/2 p-5">
          <p className="text-lg text-left font-extralight text-gold">Hey there my name is</p>
          <div className="ml-10 py-3">
          <p className="text-xl leading-none text-left text-primary">Elizabeth <br></br>Lukasiewicz</p>
          </div>
          <h4 className="text-lg text-left text-opacity-75 font-medium text-primary">I build things for the web</h4>
          <p className="text-md font-light text-primary">I'm a software engineer specializing in creating solutions for users</p>
        <button className="bg-primary mt-10 p-3 border-2 text-md font-medium text-blue rounded-lg shadow-md transition duration-300 hover:bg-palette-4 hover:text-primary active:bg-palette-5"><a href="mailto:lizlukasiewicz@gmail.com">contact me</a></button>
        </div>
        <img src="/flushing.png" className="rounded-full -mr-10 flex-shrink"/>
        </div>
       
        <div className="w-3/4 grid grid-cols-2 gap-1">
        <div><img src="image1.png" /></div>
        <div className="bg-primary" title="about" id="about"><h1 className="text-xl text-blue font-light text-center">About Me: </h1><p className="text-md antialiased"><br></br>A Full-Stack Software Engineer with a background in performing arts, I am composed of strong interpersonal skills and driven by creating streamlined, user-friendly solutions with a pragmatic approach. I employ my skills with back-end JavaScript and Python to create organized and automated software that is easily approachable for users. With a healthy serving of ambition, I am always looking to challenge myself.  </p></div>
      </div>
        <div className="w-3/4 grid grid-cols-3 my-5 gap-4">
          <div className="col-span-3"><h2 className="text-xl font-extralight text-blue text-left" title="tools" id="tools">Tools & Proficiencies</h2> </div>
          <div><p className="text-lg font-medium">Languages</p>
            <ul>
              <li className="font-light text-md"> Javascript</li>
              <li className="font-light text-md">Python</li>
              <li className="font-light text-md">Typescript</li>
              <li className="font-light text-md">HTML</li>
              <li className="font-light text-md">CSS</li>
            </ul>
          </div>
          <div><p className="text-lg font-medium">Libraries</p>
            <ul>
              <li className="font-light text-md">Node</li>
              <li className="font-light text-md">Axios</li>
              <li className="font-light text-md">JQuery</li>
              <li className="font-light text-md">Bootstrap</li>
              <li className="font-light text-md">Tailwind</li>
              <li className="font-light text-md">Bcrypt</li>
            </ul>
          </div>
          <div><p className="text-lg font-medium">Frameworks:</p>
            <ul>
            <li className="font-light text-md">Express</li>
            <li className="font-light text-md">React</li>
            <li className="font-light text-md">Next</li>
            <li className="font-light text-md">NextAuth</li>
            </ul>
          </div>
          <div>
            <ul><p className="text-lg font-medium">Databases:</p>
            <li className="font-light text-md">MongoDB</li>
            <li className="font-light text-md">Mongoose</li>
            <li className="font-light text-md">PostgreSQL</li>
            <li className="font-light text-md">Sequelize</li>
            </ul>
          </div>
          <div><p className="text-lg font-medium">Other:</p>
            <ul>
              <li className="font-light text-md">Git</li>
              <li className="font-light text-md">Github</li>
              <li className="font-light text-md">JSON</li>
              <li className="font-light text-md">AJAX</li>
              <li className="font-light text-md">RESTful Routing</li>
            </ul>
          </div>
        </div>
        
        <div className="w-10/12 grid grid-cols-2 gap-1">
          <div className="col-span-2"><h2 className="text-xl font-extralight text-blue text-center">Things I've Built</h2> </div>
          <div className="bg-palette-1">
            <div><h1 className="text-lg">Riders Guild</h1>
              <p><span className="font-medium">Next.js, MongoDB, NextAuth, React </span><br></br> 
              <a href="https://github.com/lizlukasiewicz/capstone" target="_blank" ><VscGithub className="transform scale-150"/></a>
              <a href="https://capstone-nine.vercel.app/" target="_blank" ><MdPhonelink className="transform scale-150"/> Riders Guild</a>
              </p>
            </div> 
            <img src="/riders-guild.gif" className="object-left"/>
          </div>
          <div className=" bg-palette-4 ">
            <div><h1 className="text-lg text-primary">Falendar</h1>
            <p><span className="font-medium">React.js, Styled-Components, MaterialUI, MongoDB, Express.js</span><br></br> 
            <a href="" target="_blank" > <VscGithub className="transform scale-150"/></a>
            <a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank" ><MdPhonelink className="transform scale-150"/>Falendar</a>
            </p>
            </div>
            <img src="/falendar.gif" />
          </div>
          <div className="bg-palette-3">
            <div>
            <h1 className="text-lg text-primary">Dispatch</h1>
            <p><span className="font-meium">Sequelize, Express, Mapbox, PostgreSQL</span><br></br>
            <a href="https://github.com/lizlukasiewicz/dispatch" target="_blank" > <VscGithub className="transform scale-150"/></a>
            <a href="" target="_blank" > <MdPhonelink className="transform scale-150"/>Dispatch</a>
            </p>
            </div>
            <img src="/dispatch.gif" />
          </div>
          <div className="bg-primary">
            <div>
            <h1 className="text-lg">Escape Noface</h1>
            <p><span className="font-medium">JavaScript, HTML Canvas, HTML, CSS</span><br></br> 
            <a href="https://github.com/lizlukasiewicz/Project-1-escape-Noface" target="_blank" > <VscGithub className="transform scale-150"/></a>
            <a href="https://lizlukasiewicz.github.io/Project-1-escape-Noface/" target="_blank" ><MdPhonelink className="transform scale-150"/>Escape Noface</a>
            </p>
            </div>
            <img src="/escape-noface.gif" />
          </div>
        </div>
      
      
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
