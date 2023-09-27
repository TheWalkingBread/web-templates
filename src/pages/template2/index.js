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
            <Sections.Header2 style={style}>
                <Link href={'/template1'}>Home</Link>
                <Link href={'/template1/'}>About Us</Link>
                <Link href={'/template1/'}>Our Services</Link>
                <Link href={'/template1/'}>Contact Us</Link>
            </Sections.Header2>

            <Sections.Body1 style={style}>
                <Body.Hero2
                    t1={'LOREM IPSUM'}
                    t2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    bt={'Explore More'}
                    
                />
                <Body.Showcase3
                />
                <Body.Showcase4
                />
            </Sections.Body1>

            <Sections.Footer1 style={style}>

            </Sections.Footer1>

        </main>
    )
}
