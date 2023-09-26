import Image from 'next/image'
import style from '@/styles/Showcase1.module.css'
import { data } from 'autoprefixer';

export default function Showcase1(props) {
    const getBottomData = () => {
        try {
          const bottomData = Object.keys(props.bottomData).map(dataKey => {
            return (
              <div key={dataKey} className={style.showcase1_row2_column}>
                <p className={style.showcase1_row2_column_label}>{dataKey}</p>
                <p className={style.showcase1_row2_column_value}>{props.bottomData[dataKey]}</p>
              </div>
            );
          })
          return bottomData
        }
        catch (error) {
    
        }
      }

    return (
        <div className={style.showcase1_container}>
            <div className={style.showcase1_row1}>
                <Image src={'/template1/showcase1.png'} width={800} height={800} alt='Hero Image' className={style.showcase1_row1_image} />
                <div className={style.showcase1_row1_details}>
                    <p className={style.showcase1_row1_details_p1}>{props.t1}</p>
                    <p className={style.showcase1_row1_details_p2}>{props.t2}</p>
                    <p className={style.showcase1_row1_details_p3}>{props.t3}</p>
                </div>
            </div>
            <div className={style.showcase1_row2}>
                {getBottomData()}
            </div>
        </div>
    );
}
