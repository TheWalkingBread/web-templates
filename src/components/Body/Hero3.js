import Image from 'next/image'
import style from '@/styles/Hero3.module.css'
import { data } from 'autoprefixer';

export default function Hero3(props) {

	return (
		<div className={style.hero_container}>
			{/* <Image src={'/template2/hero2BG.png'} width={1000} height={1000} alt='Hero Image' className={style.hero_image} /> */}
			<div className={style.hero_side1}>
				<div className={style.hero_side1_1}>
					<h1 className={style.hero_heading}>Lorem ipsum dolor sit amet, consectetur</h1>
					<h2 className={style.hero_subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
				</div>
				<div className={style.hero_side1_2}>
					<div className={style.hero_side1_2_content}>
						<Image src={'/template4/heroContent1.png'} width={1000} height={1000} alt='Hero Image' className={style.hero_content_image} />
						<div className={style.hero_side1_2_content_details}>
							<div>
								<p className={style.hero_side1_2_content_heading}>Siargao, Philippines</p>
								<p className={style.hero_side1_2_content_subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do </p>
							</div>
							<button className={style.hero_side1_2_content_button}>Book Now</button>
						</div>
					</div>
					<div className={style.hero_side1_2_content}>
						<Image src={'/template4/heroContent2.png'} width={1000} height={1000} alt='Hero Image' className={style.hero_content_image} /><div className={style.hero_side1_2_content_details}>
							<div>
								<p className={style.hero_side1_2_content_heading}>Seoul, South Korea</p>
								<p className={style.hero_side1_2_content_subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do </p>
							</div>
							<button className={style.hero_side1_2_content_button}>Book Now</button>
						</div>
					</div>
					<div className={style.hero_side1_2_content}>
						<Image src={'/template4/heroContent3.png'} width={1000} height={1000} alt='Hero Image' className={style.hero_content_image} /><div className={style.hero_side1_2_content_details}>
							<div>
								<p className={style.hero_side1_2_content_heading}>Tokyo, Japan</p>
								<p className={style.hero_side1_2_content_subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do </p>
							</div>
							<button className={style.hero_side1_2_content_button}>Book Now</button>
						</div>
					</div>
				</div>
			</div>
			<div className={style.hero_side2}>
				<p className={style.hero_side2_heading}>Book a flight</p>
				<div className={style.hero_side2_row1}>
					<button className={style.hero_side2_row1_button}>Destination</button>
					<button className={style.hero_side2_row1_button}>Date</button>
					<button className={style.hero_side2_row1_button}>Channel</button>
					<button className={style.hero_side2_row1_button}>Seat Type</button>
					<button className={style.hero_side2_row1_button}>Passengers</button>
				</div>
				<div className={style.hero_side2_row2}>
					<div className={style.hero_side2_row2_1}>
						<div className={style.hero_side2_row2_t1}>
							<p className={style.hero_side2_row2_t1_1}>MNL</p>
							<p className={style.hero_side2_row2_t1_2}>Manila, Philippines</p>
						</div>
						<div className={style.hero_side2_row2_rule}></div>
						<div className={style.hero_side2_row2_t2}>
							<p className={style.hero_side2_row2_t2_1}>From</p>
							<p className={style.hero_side2_row2_t2_2}>15 October 2023</p>
						</div>
						<div className={style.hero_side2_row2_rule}></div>
						<div className={style.hero_side2_row2_t2}>
							<p className={style.hero_side2_row2_t2_1}>Seat Type</p>
							<p className={style.hero_side2_row2_t2_2}>Economy</p>
						</div>
						<div className={style.hero_side2_row2_t2}>
							<p className={style.hero_side2_row2_t2_1}>Passengers</p>
							<p className={style.hero_side2_row2_t2_2}>2</p>
						</div>
					</div>
					<div className={style.hero_side2_row2_2}>
						<div className={style.hero_side2_row2_t1}>
							<p className={style.hero_side2_row2_t1_1}>BKK</p>
							<p className={style.hero_side2_row2_t1_2}>Bangkok, Thailand</p>
						</div>
						<div className={style.hero_side2_row2_rule}></div>
						<div className={style.hero_side2_row2_t2}>
							<p className={style.hero_side2_row2_t2_1}>To</p>
							<p className={style.hero_side2_row2_t2_2}>15 October 2023</p>
						</div>
						<div className={style.hero_side2_row2_rule}></div>
						<div className={style.hero_side2_row2_t2}>
							<p className={style.hero_side2_row2_t2_1}>Airlines</p>
							<p className={style.hero_side2_row2_t2_2}>Lorem Ipsum</p>
						</div>
					</div>
				</div>
				<button className={style.hero_side2_button}>Check Availability</button>
			</div>

			{/* <button className={style.hero_button}>{props.bt}</button> */}

		</div>
	);
}
