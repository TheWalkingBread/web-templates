import Image from 'next/image'
import style from '@/styles/Cards1.module.css'
import { data } from 'autoprefixer';

export default function About1(props) {


	return (
		<div className={style.cards1_container}>
			<div className={style.cards1_rule}></div>
			<p className={style.cards1_p1}>Agents</p>

			<div className={style.cards1_row}>
				<div className={style.cards1_card}>
					<div className={style.cards1_card_image}></div>
					<p className={style.cards1_card_name}>Lorem Ipsum</p>
					<p className={style.cards1_card_title}>Real Estate Agent</p>
					<button className={style.cards1_card_button}>Contact Me</button>
				</div><div className={style.cards1_card}>
					<div className={style.cards1_card_image}></div>
					<p className={style.cards1_card_name}>Lorem Ipsum</p>
					<p className={style.cards1_card_title}>Real Estate Agent</p>
					<button className={style.cards1_card_button}>Contact Me</button>
				</div><div className={style.cards1_card}>
					<div className={style.cards1_card_image}></div>
					<p className={style.cards1_card_name}>Lorem Ipsum</p>
					<p className={style.cards1_card_title}>Real Estate Agent</p>
					<button className={style.cards1_card_button}>Contact Me</button>
				</div>
			</div>

			<div className={style.cards1_rule}></div>
		</div>
	);
}
