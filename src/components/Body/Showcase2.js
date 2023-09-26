import Image from 'next/image'
import style from '@/styles/Showcase2.module.css'
import { data } from 'autoprefixer';

export default function Showcase2(props) {
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
		<div className={style.showcase2_container}>
			<div className={style.showcase2_row1}>
				<p className={style.showcase2_row1_t1}>Best Choices</p>
				<div className={style.showcase2_row1_t2}>
					<div></div>
					<p>Featured Choices</p>
					<div></div>
				</div>
				<div className={style.showcase2_row1_contents}>
					<div className={style.showcase2_row1_content}>
						<Image src={'/template1/content1.png'} width={800} height={800} alt='Content image' className={style.showcase2_content_image} />
						<div className={style.showcase2_content_details}>
							<p>Lorem Ipsum Dolor</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<div></div>
							<p>$1,000,000</p>
						</div>
					</div>
				</div>
				{/* <Image src={'/template1/showcase2.png'} width={800} height={800} alt='Hero Image' className={style.showcase2_row1_image} /> */}
				<div></div>
			</div>
			<div className={style.showcase2_row2}>
				{getBottomData()}
			</div>
		</div>
	);
}
