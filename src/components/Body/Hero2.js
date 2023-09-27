import Image from 'next/image'
import style from '@/styles/Hero2.module.css'
import { data } from 'autoprefixer';

export default function Hero2(props) {
  const getBottomData = () => {
    try {
      const bottomData = Object.keys(props.bottomData).map(dataKey => {
        return (
          <div key={dataKey} className={style.hero_bottom_data_column}>
            <p className={style.hero_bottom_data_column_value}>{props.bottomData[dataKey]}</p>
            <p className={style.hero_bottom_data_column_label}>{dataKey}</p>
          </div>
        );
      })
      return bottomData
    }
    catch (error) {

    }
  }

  return (
    <div className={style.hero_container}>
    <Image src={'/template2/hero2BG.png'} width={1000} height={1000} alt='Hero Image' className={style.hero_image} />
      <h1 className={style.hero_heading}>{props.t1}</h1>
      <h2 className={style.hero_subheading}>{props.t2}</h2>
      <button className={style.hero_button}>{props.bt}</button>

    </div>
  );
}
