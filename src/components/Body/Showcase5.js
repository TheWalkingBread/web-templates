import Image from 'next/image'
import style from '@/styles/Showcase5.module.css'
import { data } from 'autoprefixer';

export default function showcase5(props) {

	return (
		<div className={style.showcase5_container}>
			<Image src={'/template3/Showcase1/1.png'} width={1000} height={1000} alt='Card Image' className={style.showcase5_card1_image} />
			<Image src={'/template3/Showcase1/2.png'} width={1000} height={1000} alt='Card Image' className={style.showcase5_card1_image} />
			<Image src={'/template3/Showcase1/3.png'} width={1000} height={1000} alt='Card Image' className={style.showcase5_card1_image} />
			<Image src={'/template3/Showcase1/4.png'} width={1000} height={1000} alt='Card Image' className={style.showcase5_card1_image} />
		</div>
	);
}
