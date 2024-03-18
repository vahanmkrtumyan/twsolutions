"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { createClient } from "@/prismicio";

export default async function BrandActiveSlider() {
	const client = createClient();

	const brands = await client.getAllByType("brands");

	const swiperOptions = {
		modules: [Autoplay, Pagination, Navigation],
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			1200: {
				slidesPerView: brands.length < 6 ? brands.length : 6,
			},
			992: {
				slidesPerView: brands.length < 5 ? brands.length : 5,
			},
			768: {
				slidesPerView: brands.length < 4 ? brands.length : 4,
			},
			576: {
				slidesPerView: brands.length < 3 ? brands.length : 3,
			},
			0: {
				slidesPerView: brands.length < 2 ? brands.length : 2,
			},
		},
	};
	return (
		<div className='d-block'>
			<Swiper {...swiperOptions}>
				{brands.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='brand-item'>
								<img src={item?.data?.brand_image?.url} alt='' />
							</div>
						</SwiperSlide>
					);
				})}

				{/* <SwiperSlide>
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
				</SwiperSlide> */}
			</Swiper>
		</div>
	);
}
