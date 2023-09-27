import Image from 'next/image'
import style from '@/styles/BG1.module.css'
import { data } from 'autoprefixer';

export default function BG1(props) {


  return (
    <div className={style.BG1_container}>
        <div className={style.mr_1}></div>
        <div className={style.mr_2}></div>
        <div className={style.mr_3}></div>
        <div className={style.mr_4}></div>

    </div>
  );
}
