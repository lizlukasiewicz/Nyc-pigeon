import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {VscGithubInverted} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'
import Image from 'next/image'

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
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center ">
        <div className="w-5/6 grid grid-cols-2 gap-1">
          <div className="col-span-2"><h2 className="text-xl font-extralight text-blue text-center">Things I've Built</h2> </div>
          
          <div className="bg-palette-1">
            
          </div>
          <div className="bg-palette-1"><h1 className="text-lg">Riders Guild</h1>
              <h4>Next.js, MongoDB, NextAuth, React</h4> 
              <p>A Blog built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.<br></br> 
              Learned and implemented Next.js and launched the app for a 5-Day Sprint.
              </p>
          </div> 
          <div className=" bg-palette-4 ">
            <div><h1 className="text-lg text-primary">Falendar</h1>
            <h4>React.js, Styled-Components, MaterialUI, MongoDB, Express.js</h4><p>
            Utilized React Calendar Component to record and render Schedules stored within MongoDB that 
            could be synchronized between multiple users, user login infois also encrypted.<br></br>
            Worked within a team to build web app complete with GitHub manager, experienced team workflow, 
            merge conflicts, and debugging.
            </p>
            </div>
          </div>
          <div className="bg-palette-3">
            <div>
            <h1 className="text-lg text-primary">Dispatch</h1>
            <h4>Sequelize, Express, Mapbox, PostgreSQL</h4><p>
            Full stack Express and Postgres app that uses Sequelize as an ORM to interact with protected 
            customer data with full CRUD functionality for each user. Data is run through the Mapbox API 
            which geocodes customer addresses and renders them on map. Users are able to chart out zones 
            on the map and the app displays the corresponding zone the geocoded data is within.
            <br></br>
            Project requirements were to create a full stack app that uses a database and interacts with at 
            least one API. I used this opportunity to create a potential solution for dispatchers working for 
            delivery services that lacked tools to automate the repetitive and time consuming aspects of their job.
            </p>
            </div>
          </div>
          <div className="bg-primary">

          </div>
            <div className="bg-primary"> 
            <h1 className="text-lg">Escape Noface</h1>
            <h4>JavaScript, HTML Canvas, HTML, CSS</h4><p>
            A single player online game that utilized the Javascript event loop and
            object-oriented design to create gravitational elements, collision detection, 
            random obstacle placement and movement, animated sprite sheets, as well as scrolling backgrounds.</p>
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