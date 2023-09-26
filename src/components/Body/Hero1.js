import Image from 'next/image'
import style from '@/styles/Hero1.module.css'

export default function Hero1(props) {
    return (
      <div className={style.hero_container}>
        <h1 className={style.hero_heading}>{props.t1}</h1>
        <h2 className={style.hero_subheading}>{props.t2}</h2>
        <button className={style.hero_button}>{props.bt}</button>
      </div>
    );
  }
  