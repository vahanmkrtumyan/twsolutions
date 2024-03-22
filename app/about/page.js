import Layout from '@/components/layout/Layout';
import BrandActiveSlider from '@/components/slider/BrandActiveSlider';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          <section className="about__area-four">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-10">
                  <div className="about__img-wrap-four">
                    <img src="/assets/img/images/inner_about01.jpg" alt="" />
                    <img src="/assets/img/images/inner_about02.jpg" alt="" />
                    <div className="shape">
                      <img
                        src="/assets/img/images/inner_about_shape.jpg"
                        alt=""
                        className="alltuchtopdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about__content-four">
                    <div className="section-title mb-30">
                      <span className="sub-title">now a little bit </span>
                      <h2 className="title">About Us</h2>
                    </div>
                    <p>
                      TRADEWISE SOLUTIONS GENERAL TRADING FZE is a distinguished
                      commercial entity specializing in providing a wide array
                      of trade services to both local and international
                      partners. Our core values of reliability, integrity, and
                      professionalism define our commitment to being a reputable
                      trade partner in the global market. At TradeWise
                      solutions, we are dedicated to revolutionizing our
                      clients’ commercial experience. With a commitment to
                      excellence and an extensive network, we specialize in
                      providing a wide spectrum of commercial services tailored
                      to meet our clients’ diverse needs. We specialize in
                      offering a comprehensive suite of commercial services,
                      including procurement solutions, global trade expertise,
                      and local supplier engagement. Our mission is to
                      streamline the process of sourcing, purchasing and trading
                      goods, both domestically and internationally, while
                      ensuring utmost quality and efficiency.
                    </p>
                    <Link href="/contact" className="btn">
                      Contact With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className='mb-30'>
						<div className='container'>
							<h2 className='title text-center'>Licenses And Certificates</h2>
							<div className='d-flex flex-wrap mt-80 mb-40 cerificates-section justify-content-center'>
								{[1, 2, 3, 4].map((item, index) => {
									return (
										<img
											className='mr-10'
											width={280}
											src={"/assets/img/images/about_shape01.png"}
											key={index}
											alt=''
										/>
									);
								})}
							</div>
						</div>
					</section> */}
          {/* about-area-end */}
          {/* brand-area */}
          {/* <div className='brand__area-four'>
						<div className='container'>
							<div className='swiper-container brand-active'>
								<BrandActiveSlider />
							</div>
						</div>
					</div> */}
          {/* brand-area */}
          {/* choose-area */}
          {/* <section className='choose__area-four'>
						<div className='container'>
							<div className='row align-items-center'>
								<div className='col-lg-5'>
									<div className='choose__content-four'>
										<div className='section-title white-title mb-20'>
											<span className='sub-title'>Why We Are The Best</span>
											<h2 className='title'>
												Digital Solutions For Your Online Business
											</h2>
										</div>
										<p>
											We successfully cope with tasks of varying complexity
											provide area longerty guarantees and regularly master new
											Practice Following gies heur.
										</p>
									</div>
								</div>
								<div className='col-lg-7'>
									<div className='choose__list-two'>
										<ul className='list-wrap'>
											<li>
												<div className='choose__list-box-two'>
													<div className='choose__list-icon-two'>
														<i className='flaticon-investment' />
													</div>
													<div className='choose__list-content-two'>
														<h4 className='title'>Business Solutions</h4>
														<p>
															Semper egetuis kelly for tellus urna area
															condition.
														</p>
													</div>
												</div>
											</li>
											<li>
												<div className='choose__list-box-two'>
													<div className='choose__list-icon-two'>
														<i className='flaticon-financial-profit' />
													</div>
													<div className='choose__list-content-two'>
														<h4 className='title'>Finance Planning</h4>
														<p>
															Semper egetuis kelly for tellus urna area
															condition.
														</p>
													</div>
												</div>
											</li>
											<li>
												<div className='choose__list-box-two'>
													<div className='choose__list-icon-two'>
														<i className='flaticon-investment-1' />
													</div>
													<div className='choose__list-content-two'>
														<h4 className='title'>Market Analysis</h4>
														<p>
															Semper egetuis kelly for tellus urna area
															condition.
														</p>
													</div>
												</div>
											</li>
											<li>
												<div className='choose__list-box-two'>
													<div className='choose__list-icon-two'>
														<i className='flaticon-report' />
													</div>
													<div className='choose__list-content-two'>
														<h4 className='title'>Business Solutions</h4>
														<p>
															Semper egetuis kelly for tellus urna area
															condition.
														</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='choose__shape-wrap-four'>
							<img
								src='/assets/img/images/inner_choose_shape01.png'
								alt=''
								data-aos='fade-right'
								data-aos-delay={400}
							/>
							<img
								src='/assets/img/images/inner_choose_shape02.png'
								alt=''
								data-aos='fade-left'
								data-aos-delay={400}
							/>
						</div>
					</section> */}
        </div>
      </Layout>
    </>
  );
}
