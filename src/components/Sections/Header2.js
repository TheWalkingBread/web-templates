
import Image from 'next/image'
import style from '@/styles/Header2.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Header2(props) {
	const [toggleMenu, setToggleMenu] = useState(false)
	return (
		<header className={style.header2_container}>
			{/* <Image alt='page_logo' width={200} height={50} src="/header_logo.png"></Image> */}
			<p className={style.header2_logo}>Your Logo Here</p>
			<div className={toggleMenu ? style.header2_links_expanded : style.header2_links}>
				<div className={style.menu_close} onClick={() => setToggleMenu(!toggleMenu)}>X</div>
				{/* {props.children} */}

				<Link href={'/template2'}>Home</Link>
				<Link href={'/template2/about'}>About Us</Link>
				<Link href={'/template2/services'}>Our Services</Link>
				<Link href={'/template2/contact'}>Contact Us</Link>
			</div>

			<div className={style.menu_container} onClick={() => setToggleMenu(!toggleMenu)}>
				<div className={style.menu_line}></div>
				<div className={style.menu_line}></div>
				<div className={style.menu_line}></div>
			</div>
		</header>
	);
}
