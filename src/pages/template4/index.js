import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Sections from '../../components/Sections'
import * as Body from '../../components/Body'
import style from './Style.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    return (
        <main className={style.main}>
            <Sections.Header4 style={style}>
                <Link href={'/template4'}>Home</Link>
                <Link href={'/template4/'}>About Us</Link>
                <Link href={'/template4/'}>Our Services</Link>
                <Link href={'/template4/'}>Contact Us</Link>
            </Sections.Header4>

            <Sections.Body1 style={style}>
                <Body.Hero4/>
                {/* <Body.Showcase3/>
                <Body.Showcase4/> */}


            </Sections.Body1>

            <Sections.Footer1 style={style}/>


        </main>
    )
}
