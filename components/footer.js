//import Link from 'next/link'
export default function Footer() {
    return(
        <footer className="flex items-center justify-center w-full h-40 bg-palette-5">
        <ul>
          <li className="flex items-center text-primary hover:text-orange">
            <a href="mailto:lizlukasiewicz@gmail.com">
             <p className=""> Email:<span className="hover:underline">lizlukasiewicz@gmail.com</span></p>
            </a>
          </li>
          <li className="flex items-center text-primary hover:text-orange">
            <p>Resume: <a href="/e-lukasiewicz.pdf" download="/e-lukasiewicz.pdf" target="_blank">Download</a></p>
          </li>
        </ul>
        <img src="/self.png" alt="circular portrait photo" className="h-16 md:h-24 ml-20"/>
        <style jsx>{`
          @media only screen and (max-width: 650px) {
            footer{
              display: flex;
              flex-direction: column;
            }
          }
        `}</style>
      </footer>
    )
}
