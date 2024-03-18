export default function About1({ goals, goalsInfo }) {
	const { goal_subtitle, goal_title, goal_text, goal_image } = goalsInfo;

	return (
		<>
			<section id='about' className='about-area pt-120 pb-120'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='about-img-wrap'>
								<img src={goal_image.url} alt='goal_image' />
								{/* <div className='shape'>
									<img src='/assets/img/images/about_shape01.png' alt='' />
								</div> */}
							</div>
						</div>
						<div className='col-lg-6'>
							<div className='about-content'>
								<div className='section-title mb-35 tg-heading-subheading animation-style3'>
									<span className='sub-title'>{goal_subtitle}</span>
									<h2 className='title tg-element-title'>{goal_title}</h2>
								</div>
								<div className='about-list'>
									{goals.map((item, _) => {
										return (
											<ul key={item.uid} className='list-wrap'>
												<li>
													<div className='icon'>
														<i className='flaticon-target' />
													</div>
													<div className='content'>
														<h4 className='title'>{item.data.name}</h4>
														<p>{item.data.text}</p>
													</div>
												</li>
											</ul>
										);
									})}
								</div>
								<p>{goal_text}</p>

								<div className='about-shape-wrap'>
									<img src='/assets/img/images/about_shape03.png' alt='' />
									<img
										src='/assets/img/images/about_shape04.png'
										alt=''
										className='ribbonRotate'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='about-left-shape'>
					<img src='/assets/img/images/about_shape02.png' alt='' />
				</div>
			</section>
		</>
	);
}
