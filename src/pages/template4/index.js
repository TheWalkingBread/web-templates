import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Sections from '../../components/Sections'
import * as Body from '../../components/Body'
import style from './Style.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const imagesForGallery = [
        '/template2/images/image1.png',
        '/template2/images/image2.png',
        '/template2/images/image1.png',
        '/template2/images/image2.png',
        '/template2/images/image1.png',
        '/template2/images/image2.png',
        '/template2/images/image1.png',
        '/template2/images/image2.png',
        // ... add more images as needed
    ];
    return (
        <main className={style.main}>
            <Sections.Header3 style={style}>
                <Link href={'/template1'}>Home</Link>
                <Link href={'/template1/'}>About Us</Link>
                <Link href={'/template1/'}>Our Services</Link>
                <Link href={'/template1/'}>Contact Us</Link>
            </Sections.Header3>

            <Sections.Body1 style={style}>
                <Body.Hero3/>
                {/* <Body.Showcase3/>
                <Body.Showcase4/> */}


            </Sections.Body1>

            <Sections.Footer1 style={style}/>


        </main>
    )
}
