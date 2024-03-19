import Link from "next/link";

export default function Footer1() {
	return (
		<>
			<footer>
				<div className='footer-area'>
					<div className='footer-bottom'>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-lg-12'>
									<div className='text-center'>
										<p>
											We recognize the importance of a healthy KYC process in
											building permanent relationships with financial
											institutions such as{" "}
											<span style={{ color: "#c90101", fontWeight: "bold" }}>
												YOUR BANK
											</span>
											. As we attempt to maintain the highest standards of
											compliance and transparency, we trust that this profile
											provides a comprehensive overview of our commitment to
											being a reputable and reliable partner.
										</p>

										<p>Copyright © TW Solutions / All Right Reserved</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='footer-shape'>
						<img
							src='/assets/img/images/footer_shape01.png'
							alt=''
							data-aos='fade-right'
							data-aos-delay={400}
						/>
						<img
							src='/assets/img/images/footer_shape02.png'
							alt=''
							data-aos='fade-left'
							data-aos-delay={400}
						/>
						<img
							src='/assets/img/images/footer_shape03.png'
							alt=''
							data-parallax='{"x" : 100 , "y" : -100 }'
						/>
					</div>
				</div>
			</footer>
		</>
	);
}
