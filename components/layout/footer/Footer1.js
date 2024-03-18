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
											Copyright © <Link href='/'>Azariyah</Link> | All Right
											Reserved
										</p>
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
