import Link from 'next/link';
import { createClient } from '@/prismicio';

export default async function Project1({ data }) {
  const client = createClient();

  // const partners = await client.getAllByType("partners");

  return (
    <>
      {/* <section className='project-area'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-7'>
							<div className='section-title text-center mb-50 tg-heading-subheading animation-style3'>
								
								<h2 className='title tg-element-title'>{data.partner_title}</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='project-item-wrap'>
					<div className='container custom-container-two'>
						<div className='row justify-content-center'>
							{partners.map((item, index) => {
								return (
									<div key={index} className='col-xl-3 col-md-6'>
										<div className='project-item'>
											<div className='project-thumb'>
												<Link href='/project-details'>
													<img src={item?.data?.partner_logo?.url} alt='' />
												</Link>
											</div>
											<div className='project-content'>
												<div className='left-side-content'>
													<h4 className='title'>
														<Link href='/project-details'>
															{item?.data?.partner_name}
														</Link>
													</h4>
													<span>{item?.data?.partner_description}</span>
												</div>
												<div className='link-arrow'>
													<Link href='/partners'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 18 15'
															fill='none'
														>
															<path
																fillRule='evenodd'
																clipRule='evenodd'
																d='M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z'
																fill='currentcolor'
															/>
															<path
																fillRule='evenodd'
																clipRule='evenodd'
																d='M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z'
																fill='currentcolor'
															/>
														</svg>
													</Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className='row justify-content-center'>
							<div className='col-12'>
								<div className='project-content-bottom'>
									<Link href='/partners' className='btn'>
										For more info
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='project-shape-wrap'>
					<img
						src='/assets/img/project/project_shape01.png'
						alt=''
						className='alltuchtopdown'
					/>
					<img
						src='/assets/img/project/project_shape02.png'
						alt=''
						className='rotateme'
					/>
				</div>
			</section> */}
    </>
  );
}
