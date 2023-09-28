import Image from 'next/image'
import style from '@/styles/Cards2.module.css'
import { data } from 'autoprefixer';

export default function About1(props) {


	return (
		<div className={style.cards2_container}>
			<p className={style.cards2_p1}>OUR SERVICES</p>

			<div className={style.cards2_row}>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 1</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 2</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 3</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 4</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 5</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 6</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
				<div className={style.cards2_card}>
					<Image src={'/template2/services/service1.png'} width={800} height={800} alt='Content image' className={style.cards2_card_image} />
					<div>
						<p className={style.cards2_card_name}>Lorem Ipsum 7</p>
						<p className={style.cards2_card_title}>Lorem ipsum dolor sit amet</p>
					</div>
				</div>
			</div>

		</div>
	);
}
