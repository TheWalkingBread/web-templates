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
            <Sections.Header3 style={style} page={"index"}/>

            <Sections.Body1 style={style}>
                <Body.Hero3
                    t1={'LOREM IPSUM'}
                    t2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                    bt={'Explore More'}

                />
                <Body.Showcase5/>

            </Sections.Body1>

            <Sections.Footer1 style={style}/>

            <Sections.BG1/>

        </main>
    )
}
