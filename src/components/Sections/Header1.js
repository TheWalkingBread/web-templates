
import Image from 'next/image'
import MenuButton from '@/components/Buttons/Menu'

export default function Header1(props) {
    return (
      <header className={props.style.header_container}>
        {/* <Image alt='page_logo' width={200} height={50} src="/header_logo.png"></Image> */}
        <p className={props.style.header_logo}>Your Logo Here</p>
        <div className={props.style.header_links}>
            <MenuButton/>
            {props.children}
        </div>
      </header>
    );
  }
  