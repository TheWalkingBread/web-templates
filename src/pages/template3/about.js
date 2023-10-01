import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import * as Sections from '../../components/Sections'
import * as Body from '../../components/Body'
import style from './Style.module.css'

export default function About() {
    return (
        <main className={style.main}>
            <Sections.Header2 style={style}>
            </Sections.Header2>

            <Sections.Body1 style={style}>
                <Body.About2/>
            </Sections.Body1>

            <Sections.Footer2 style={style}>

            </Sections.Footer2>

            <Sections.BG1 />
        </main>
    )
}
