import Link from "next/link";

export default function Banner1({ data }) {
	const { banner_subtitle, banner_title, banner_text, bannerimage } = data;
	return (
		<>
			<section
				className='banner-area banner-bg'
				data-background={bannerimage.url}
			>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='banner-content'>
								<span
									className='sub-title'
									data-aos='fade-up'
									data-aos-delay={0}
								>
									{banner_subtitle}
								</span>
								<h2 className='title' data-aos='fade-up' data-aos-delay={200}>
									{banner_title}
								</h2>
								<p data-aos='fade-up' data-aos-delay={400}>
									{banner_text}
								</p>
								<Link
									href='/about'
									className='btn'
									data-aos='fade-up'
									data-aos-delay={600}
								>
									Read More
								</Link>
							</div>
							<div className='banner-shape'>
								<img
									src='/assets/img/banner/banner_shape01.png'
									alt=''
									className='rightToLeft'
								/>
								<img
									src='/assets/img/banner/banner_shape02.png'
									alt=''
									className='ribbonRotate'
								/>
							</div>
						</div>
					</div>
					{/* <div className="banner-social">
                        <h5 className="title">Follow us</h5>
                        <ul className="list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                        </ul>
                    </div> */}
					<div className='banner-scroll'>
						<Link href='#about'>
							Scroll Down{" "}
							<span>
								<i className='fas fa-arrow-right' />
							</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
