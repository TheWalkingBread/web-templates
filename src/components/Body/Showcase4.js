import Image from 'next/image'
import style from '@/styles/Showcase4.module.css'
import { data } from 'autoprefixer';

export default function showcase4(props) {
    const getBottomData = () => {
        try {
          const bottomData = Object.keys(props.bottomData).map(dataKey => {
            return (
              <div key={dataKey} className={style.showcase4_row2_column}>
                <p className={style.showcase4_row2_column_label}>{dataKey}</p>
                <p className={style.showcase4_row2_column_value}>{props.bottomData[dataKey]}</p>
              </div>
            );
          })
          return bottomData
        }
        catch (error) {
    
        }
      }

    return (
        <div className={style.showcase4_container}>
            <div className={style.showcase4_row1}>
                <Image src={'/template2/showcase4.png'} width={800} height={800} alt='Hero Image' className={style.showcase4_row1_image} />
                <div className={style.showcase4_row1_details}>
                    <p className={style.showcase4_row1_details_p1}>LOREM IPSUM DOLOR SIT</p>
                    <p className={style.showcase4_row1_details_p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
            </div>
            <div className={style.showcase4_row2}>
                <p className={style.showcase4_row2_t1}>OUR PARTNERS</p>
            </div>
        </div>
    );
}
