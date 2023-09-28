import Image from 'next/image'
import style from '@/styles/Contact2.module.css'
import { data } from 'autoprefixer';

export default function Contact1(props) {

	return (
		<div className={style.contact2_container}>
			<div className={style.contact2_row1}>
				<div className={style.contact2_row1_details}>
					<p className={style.contact2_p1}>CONTACT US</p>
					<div className={style.contact2_p2}>loremipsum.com</div>
					<div className={style.contact2_p2}>facebook.com/loremipsum</div>
					<div className={style.contact2_p2}>loremipsum@dolor.com</div>
					<div className={style.contact2_p2}>+63 9123456789</div>

				</div>
			</div>
		</div>
	);
}
