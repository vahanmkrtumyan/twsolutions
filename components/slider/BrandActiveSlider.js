"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { createClient } from "@/prismicio";

export default function BrandActiveSlider() {
	// const client = createClient();

	// const brands = await client.getAllByType("brands");

	const swiperOptions = {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: 6,
			},
			992: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			0: {
				slidesPerView: 2,
			},
		},
	};
	return (
		<div className='d-block'>
			<Swiper {...swiperOptions}>
				{[1, 2, 3, 4, 5].map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='brand-item'>
								<img src={"/assets/img/images/about_shape01.png"} alt='' />
							</div>
						</SwiperSlide>
					);
				})}

				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img02.png' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img03.png' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img04.png' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img05.png' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img06.png' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='brand-item'>
						<img src='/assets/img/brand/brand_img03.png' alt='' />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
