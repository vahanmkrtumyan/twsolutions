import Link from "next/link";

export default function Banner1() {
	return (
		<>
			<section
				className='banner-area banner-bg'
				data-background={"/assets/img/img1.jpg"}
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
									{"TW Solutions"}
								</span>
								<h2
									style={{ color: "#FFF" }}
									className='title'
									data-aos='fade-up'
									data-aos-delay={200}
								>
									{"TradeWise solutions"}
								</h2>
								<p
									style={{ color: "#FFF" }}
									data-aos='fade-up'
									data-aos-delay={400}
								>
									At TradeWise solutions, we value the significance of
									compliance and transparency in fostering strong, enduring
									relationships. As part of our commitment to upholding
									regulatory standards and establishing trust, we are pleased to
									submit our company profile for KYC purposes.
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
