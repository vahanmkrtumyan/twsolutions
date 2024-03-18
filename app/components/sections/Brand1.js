import BrandActiveSlider from "../slider/BrandActiveSlider";

export default function Brand1() {
	return (
		<>
			<div className='section-title mb-35 tg-heading-subheading animation-style3'>
				<h2 className='title mt-50 text-center tg-element-title'>Our Brands</h2>
			</div>{" "}
			<div className='brand-area'>
				<div className='container'>
					<div className='swiper-container brand-active'>
						<BrandActiveSlider />
					</div>
				</div>
			</div>
		</>
	);
}
