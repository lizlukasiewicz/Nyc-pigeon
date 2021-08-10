import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {VscGithubInverted, VscGithub} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import {MdPhonelink} from 'react-icons/md'


export default function Projects() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>I made this</title>
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
      <main className="flex flex-col items-center w-full flex-1 md:px-20 text-center ">
        <div className="md:w-5/6 md:grid grid-cols-2 gap-1 space-y-6">
          <div className="col-span-2"><h2 className="text-xl font-light text-blue text-center md:py-5 tracking-wider">Things I've Built</h2> </div>
          
          <div className="bg-palette-1 md:h-96 flex items-center justify-center" id="riders-guild">
          <img src="/riders-guild.gif" alt="a gif of the Riders Guild webpage" width="450" height="250"/>
          </div>
          <div className="bg-palette-1 md:h-96 md:overflow-y-auto"><h1 className="md:text-lg font-medium text-blue hover:text-purple"><a href="https://capstone-nine.vercel.app/" target="_blank">Riders Guild</a></h1>
              <h4 className="font-medium text-blue">Next.js, MongoDB, Mongoose, NextAuth, React</h4>
              <div className="flex justify-evenly py-3">
              <a href="https://github.com/lizlukasiewicz/capstone" target="_blank" className="order-first"><VscGithub className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              <a href="https://capstone-nine.vercel.app/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
              </div>
              <p className="text-blue text-sm text-right">A Blog built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.<br></br> 
              Learned and implemented Next.js and launched the app for a 5-Day Sprint.
              </p>
          </div> 
          <div className=" bg-palette-4 md:h-96 md:overflow-y-auto" id="falendar">
            <h1 className="md:text-lg text-primary hover:text-orange"><a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank">Falendar</a></h1>
            <h4 className="font-medium text-primary">React.js, Styled-Components, MaterialUI, MongoDB, Express.js</h4>
            <div className="flex justify-evenly py-3">
            <a href="https://github.com/lizlukasiewicz/Collab-MERN-Client" target="_blank" className="order-first"> <VscGithub className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            <p className="text-sm text-primary text-left">The goal was to make a stripped down calendar which is easy to read at a glance. Regular events 
              are available at the click of a button, but your daily itinerary is immediately available, which 
              is really what most people use most to stay on top of the days activities.
              <br></br>Utilized React Calendar Component to record and render Schedules stored within MongoDB that 
            could be synchronized between multiple users, user login info is also encrypted.<br></br>
            Worked within a team to build web app complete with GitHub manager, experienced team workflow, 
            merge conflicts, and debugging.
            </p>
          </div>
          <div className=" bg-palette-4 md:h-96 flex items-center justify-center">
          <img src="/falendar.gif" alt="a gif of the Falendar webpage" width="450" height="250"/>
          </div>
          <div className="bg-palette-3 md:h-96 flex items-center justify-center" id="dispatch">
          <img src="/dispatch.gif" alt="a gif of the Dispatch webpage" width="450" height="250"/>
          </div>
          <div className="bg-palette-3 md:h-96 md:overflow-y-auto">
            <h1 className="md:text-lg text-primary hover:text-orange"><a href="https://dispatch-lite.herokuapp.com/" target="_blank">Dispatch</a></h1>
            <h4 className="font-medium text-primary">Sequelize, Express.js, Mapbox, PostgreSQL</h4>
            <div className="flex justify-evenly py-3">
            <a href="https://github.com/lizlukasiewicz/dispatch" target="_blank" > <VscGithub className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            <a href="https://dispatch-lite.herokuapp.com/" target="_blank" > <MdPhonelink className="transform md:scale-150 text-primary transition duration-150 ease-in-out hover:text-orange"/></a>
            </div>
            <p className="text-primary text-sm text-right">Full stack Express and Postgres app that uses Sequelize as an ORM to interact with protected 
            customer data with full CRUD functionality for each user. Data is run through the Mapbox API 
            which geocodes customer addresses and renders them on map. Users are able to chart out zones 
            on the map and the app displays the corresponding zone the geocoded data is within.
            <br></br>
            Project requirements were to create a full stack app that uses a database and interacts with at 
            least one API. I used this opportunity to create a potential solution for dispatchers working for 
            delivery services that lacked tools to automate the repetitive and time consuming aspects of their job.
            </p>
          </div>
            <div className="bg-primary md:h-96 md:overflow-y-auto" id="escape-noface"> 
            <h1 className="md:text-lg font-medium text-blue hover:text-purple">Escape Noface</h1>
            <h4 className="font-medium text-blue">JavaScript, HTML Canvas, HTML, CSS</h4>
            <div className="flex justify-evenly py-3">
            <a href="https://github.com/lizlukasiewicz/Project-1-escape-Noface" target="_blank" className="order-first"> <VscGithub className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            <a href="https://lizlukasiewicz.github.io/Project-1-escape-Noface/" target="_blank" className="order-last"><MdPhonelink className="transform md:scale-150 text-blue transition duration-150 ease-in-out hover:text-purple"/></a>
            </div> 
            <p className="text-sm text-blue text-left">Sucess! NoFace has eaten the medicine you got from the River Spirit, But now he's projectile vomiting 
              all the contents of his massive stomach and he's coming to get you! You are Chihiro running through the 
              bathhouse to escape the wrath of NoFace, but the other employees of the bathhouse are in your way. Avoid 
              these obstacles and make it out of the bathhouse before NoFace eats you to win the game!
              <br></br>A single player online game that utilized the Javascript event loop and
            object-oriented design to create gravitational elements, collision detection, 
            random obstacle placement and movement, animated sprite sheets, as well as scrolling backgrounds.</p>
            </div>
            <div className="bg-primary h-96 flex items-center justify-center">
            <img src="/escape-noface.gif" alt="a gif of the Escape Noface webpage" width="450" height="250"/>
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