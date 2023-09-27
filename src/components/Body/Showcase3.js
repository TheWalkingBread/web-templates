import Image from 'next/image'
import style from '@/styles/Showcase3.module.css'
import { data } from 'autoprefixer';

export default function Showcase3(props) {
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
		<div className={style.showcase3_container}>
			<div className={style.showcase3_row1}>
				<p className={style.showcase3_row1_t1}>What We Offer</p>
				<div className={style.showcase3_row1_t2}>
					<p>OUR SERVICES</p>
				</div>
				<p className={style.showcase3_row1_t3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
				<div className={style.showcase3_row1_contents}>
					<div className={style.showcase3_row1_content}>
						<Image src={'/template2/content1.png'} width={800} height={800} alt='Content image' className={style.showcase3_content_image} />
						<div className={style.showcase3_content_details}>
							<p className={style.showcase3_content_details_t1}>Lorem Ipsum Dolor</p>
							<p className={style.showcase3_content_details_t2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

							<button className={style.showcase3_content_details_button}>Learn More</button>
						</div>
					</div>
					<div className={style.showcase3_row1_content}>
						<Image src={'/template2/content2.png'} width={800} height={800} alt='Content image' className={style.showcase3_content_image} />
						<div className={style.showcase3_content_details}>
							<p className={style.showcase3_content_details_t1}>Lorem Ipsum Dolor</p>
							<p className={style.showcase3_content_details_t2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className={style.showcase3_content_details_button}>Learn More</button>

						</div>
					</div>
					<div className={style.showcase3_row1_content}>
						<Image src={'/template2/content3.png'} width={800} height={800} alt='Content image' className={style.showcase3_content_image} />
						<div className={style.showcase3_content_details}>
							<p className={style.showcase3_content_details_t1}>Lorem Ipsum Dolor</p>
							<p className={style.showcase3_content_details_t2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<button className={style.showcase3_content_details_button}>Learn More</button>

						</div>
					</div>
				</div>
				{/* <Image src={'/template1/showcase3.png'} width={800} height={800} alt='Hero Image' className={style.showcase3_row1_image} /> */}
				<div></div>
			</div>
			{/* <div className={style.showcase3_row2}>
				{getBottomData()}
			</div> */}
		</div>
	);
}
