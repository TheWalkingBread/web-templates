import Image from 'next/image'
import style from '@/styles/About2.module.css'
import { data } from 'autoprefixer';

export default function About1(props) {

	return (
		<div className={style.about2_container}>
			<div className={style.about2_row1}>
				<div className={style.about2_row1_details}>
					<p className={style.about2_p1}>ABOUT US</p>
					<p className={style.about2_p2}>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</div>
	);
}
