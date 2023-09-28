import Image from 'next/image'
import style from '@/styles/About1.module.css'
import { data } from 'autoprefixer';

export default function About1(props) {

	return (
		<div className={style.about1_container}>
			<div className={style.about1_row1}>
				<div className={style.about1_row1_details}>
					<div className={style.about1_rule}></div>
					<p className={style.about1_p1}>About Us</p>
					<p className={style.about1_p2}>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<div className={style.about1_rule}></div>
				</div>
			</div>
		</div>
	);
}
