
import Image from 'next/image'
import style from '@/styles/Header3.module.css'
import { useState } from 'react';

export default function Header3(props) {
  const [toggleMenu,setToggleMenu] = useState(false)
    return (
      <header className={style.header3_container}>
        {/* <Image alt='page_logo' width={200} height={50} src="/header_logo.png"></Image> */}
        <p className={style.header3_logo}>Your Logo Here</p>
        <div className={toggleMenu ? style.header3_links_expanded : style.header3_links}>
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
  