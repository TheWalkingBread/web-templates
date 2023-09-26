import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Sections from '../../components/Sections'
import * as Body from '../../components/Body'
import style from './Style.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Sections.Header style={style}>
                <Link href={'/template1'}>Home</Link>
                <Link href={'/template1/'}>About Us</Link>
                <Link href={'/template1/'}>Services</Link>
                <Link href={'/template1/'}>Contact</Link>
            </Sections.Header>

            <Sections.Body style={style}>
                <Body.Hero1
                    t1={'Innovate with Tech Solutions'}
                    t2={'Bringing the future to your doorstep.'}
                    bt={'Learn More'}
                />
            </Sections.Body>

            <Sections.Footer style={style}>

            </Sections.Footer>

        </main>
    )
}
