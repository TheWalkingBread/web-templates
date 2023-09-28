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
            <Sections.Header2 style={style}>
                <Link href={'/template2'}>Home</Link>
                <Link href={'/template2/'}>About Us</Link>
                <Link href={'/template2/'}>Our Services</Link>
                <Link href={'/template2/'}>Contact Us</Link>
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

                <Body.Carousel1 images={imagesForGallery} />

            </Sections.Body1>

            <Sections.Footer1 style={style}/>

            <Sections.BG1/>

        </main>
    )
}
