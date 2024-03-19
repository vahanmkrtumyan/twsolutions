import Layout from "@/components/layout/Layout";

export default function Services() {
	return (
		<>
			<Layout
				headerStyle={1}
				footerStyle={1}
				breadcrumbTitle='Products & Services'
			>
				<section
					className='services__area-five services__bg-five'
					data-background='/assets/img/bg/inner_services_bg02.jpg'
				>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-xl-6 col-lg-8'>
								<div className='section-title text-center mb-40'>
									<span className='sub-title'>WHAT WE OFFER</span>
									<h2 className='title'>
										We Offer An Effective Wide Area Business solutions
									</h2>
								</div>
							</div>
						</div>
						<div className='services-item-wrap'>
							<div className='row justify-content-center'>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img01.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-profit' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Strategic marketing</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img02.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-investment-1' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Investment Planning</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img03.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-pie-chart' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Insights analytics</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img04.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-light-bulb' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Business consulting</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img05.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-investment' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Business Development</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img06.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-piggy-bank' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Tax Audit</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img07.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-financial-profit' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Financial Growth</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
								<div className='col-xl-3 col-lg-4 col-md-6 col-sm-8'>
									<div className='services-item shine-animate-item'>
										<div className='services-thumb'>
											<p className='shine-animate'>
												<img
													src='/assets/img/services/services_img08.jpg'
													alt=''
												/>
											</p>
										</div>
										<div className='services-content'>
											<div className='icon'>
												<i className='flaticon-budget' />
											</div>
											<h4 className='title'>
												<p href='/service-details'>Revenue Calculate</p>
											</h4>
											<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
											<p className='btn'>Read More</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}
