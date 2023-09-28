
import Image from 'next/image'
import Link from 'next/link';
import style from '@/styles/Header1.module.css'
import { useState } from 'react';

export default function Header1(props) {
	const [toggleMenu, setToggleMenu] = useState(false)
	return (
		<header className={style.header1_container}>
			{/* <Image alt='page_logo' width={200} height={50} src="/header_logo.png"></Image> */}
			<p className={style.header1_logo}>Your Logo Here</p>
			<div className={toggleMenu ? style.header1_links_expanded : style.header1_links}>
				<div className={style.menu_close} onClick={() => setToggleMenu(!toggleMenu)}>X</div>
				{/* {props.children} */}

				<Link href={'/template1'}>Home</Link>
				<Link href={'/template1/about'}>About Us</Link>
				<Link href={'/template1/agents'}>Agents</Link>
				<Link href={'/template1/contact'}>Contact Us</Link>
			</div>

			<div className={style.menu_container} onClick={() => setToggleMenu(!toggleMenu)}>
				<div className={style.menu_line}></div>
				<div className={style.menu_line}></div>
				<div className={style.menu_line}></div>
			</div>
		</header>
	);
}
