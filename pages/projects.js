import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import {VscGithubInverted} from 'react-icons/vsc'
import {GrInstagram, GrLinkedin} from 'react-icons/gr'

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
            <div><h1 className="text-lg">Riders Guild</h1>
              <p>Next.js, MongoDB, NextAuth, React <br></br> </p>
            </div> 
          </div>
          <div className=" bg-palette-4 ">
            <div><h1 className="text-lg text-primary">Falendar</h1>
            <p>React.js, Styled-Components, MaterialUI, MongoDB, Express.js, </p>
            </div>
          </div>
          <div className="bg-palette-3">
            <div>
            <h1 className="text-lg text-primary">Dispatch</h1>
            <p>Sequelize, Express, Mapbox, PostgreSQL</p>
            </div>
          </div>
          <div className="bg-primary">
            <div>
            <h1 className="text-lg">Escape Noface</h1>
            <p>JavaScript, HTML Canvas, HTML, CSS</p>
            </div>
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