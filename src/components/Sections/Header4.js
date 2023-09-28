
import Image from 'next/image'
import style from '@/styles/Header4.module.css'
import { useState } from 'react';

export default function Header4(props) {
  const [toggleMenu,setToggleMenu] = useState(false)
    return (
      <header className={style.header4_container}>
        {/* <Image alt='page_logo' width={200} height={50} src="/header_logo.png"></Image> */}
        <p className={style.header4_logo}>Your Logo Here</p>
        <div className={toggleMenu ? style.header4_links_expanded : style.header4_links}>
            <div className={style.menu_close} onClick={() => setToggleMenu(!toggleMenu)}>X</div>
            {props.children}
        </div>
            
        <div className={style.menu_container} onClick={() => setToggleMenu(!toggleMenu)}>
            <div className={style.menu_line}></div>
            <div className={style.menu_line}></div>
            <div className={style.menu_line}></div>
        </div>
      </header>
    );
  }
  