import Image from 'next/image'
import style from '@/styles/Hero3.module.css'
import { data } from 'autoprefixer';

export default function Hero3(props) {

	return (
		<div className={style.hero_container}>
			<div className={style.hero_main}>
				<Image src={'/template3/hero1Image1.svg'} width={1000} height={1000} alt='Hero Image' className={style.hero_image} />

				<div className={style.hero_image_bg_text}>
					<p className={style.hero_image_bg_text_1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					<p className={style.hero_image_bg_text_2}>LOREM IPSUM</p>
				</div>
			</div>

			<div className={style.hero_footer}>
				<Image src={'/template3/heroBG.png'} width={1000} height={1000} alt='Hero Prop' className={style.hero_footer_BG} />
				<div className={style.hero_footer_row1}>

					<Image src={'/template3/heroProp1.png'} width={100} height={100} alt='Hero Prop' className={style.hero_prop} />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
					<Image src={'/template3/heroProp2.png'} width={100} height={100} alt='Hero Prop' className={style.hero_prop} />
				</div>
				<div className={style.hero_footer_row2}>

					<Image src={'/template3/heroProp3.png'} width={400} height={400} alt='Hero Prop' className={style.hero_prop2} />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
				</div>
			</div>
			{/* <button className={style.hero_button}>{props.bt}</button> */}

		</div>
	);
}
