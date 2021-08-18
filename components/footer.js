//import Link from 'next/link'
export default function Footer() {
    return(
        <footer className="flex items-center justify-center w-full h-40 bg-palette-5">
        <ul className="">
          <li className="flex items-center text-primary hover:text-orange">
            <a href="mailto:lizlukasiewicz@gmail.com">
             <p> Email:<span className="hover:underline">lizlukasiewicz@gmail.com</span></p>
            </a>
          </li>
          <li className="flex items-center text-primary hover:text-orange">
          <a>
            <p>Resume: <a href="/elizabeth-resume.pdf" download="/elizabeth-resume.pdf" target="_blank">Download</a></p>
          </a>
          </li>
        </ul>
        <img src="/self.png" alt="circular portrait photo" className="h-24 ml-20" />
      </footer>
    )
}
