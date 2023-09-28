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
            <Sections.Header1 style={style}>
                <Link href={'/template1'}>Home</Link>
                <Link href={'/template1/about'}>About Us</Link>
                <Link href={'/template1/'}>Agents</Link>
                <Link href={'/template1/'}>Contact</Link>
            </Sections.Header1>

            <Sections.Body1 style={style}>
                <Body.Hero1
                    t1={'Lorem Ipsum dolor sit Amet, Consectetur adipiscing elit'}
                    t2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    bt={'Get Started'}
                    bottomData={{
                        'Listed Properties': '1500 +',
                        'Active Customers': '5000 +',
                        'Partners': '200 +',
                    }}
                />
                <Body.Showcase1
                    t1={'Why Choose Us?'}
                    t2={'Lorem Ipsum dolor sit Amet, Consectetur adipiscing elit'}
                    t3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    bottomData={{
                        'Lorem Ipsum': 'Lorem Ipsum dolor sit Amet, Consectetur adipiscing elit',
                        'Lorem Ipsum2': 'Lorem Ipsum dolor sit Amet, Consectetur adipiscing elit',
                        'Lorem Ipsum3': 'Lorem Ipsum dolor sit Amet, Consectetur adipiscing elit',
                    }}
                />
                <Body.Showcase2
                />
            </Sections.Body1>

            <Sections.Footer1 style={style}>

            </Sections.Footer1>

        </main>
    )
}
