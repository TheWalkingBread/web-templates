import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Sections from '../../components/Sections'
import * as Body from '../../components/Body'
import style from './Style.module.css'

export default function About() {
    return (
        <main>
            <Sections.Header1 style={style}>
            </Sections.Header1>

            <Sections.Body1 style={style}>
                <Body.About1/>
            </Sections.Body1>

            <Sections.Footer1 style={style}>

            </Sections.Footer1>

        </main>
    )
}
