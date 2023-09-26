import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Preview from  '@/pages/preview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Preview/>
  )
}
