import Link from "next/link";

const PARTNER_DATA = [
	{
		title: "Procurement Solutions",
		subtext1: "Sourcing Goods:",
		subtext2: "Supplier Vetting:",
		text1:
			" We specialize in seeking the goods our clients require, meticulously searching both local and global markets to match their specifications.",
		text2:
			" Finding reputable and reliable suppliers is crucial. We conduct rigorous vetting processes to ensure the highest quality standards.",
		url: "/assets/img/img1.jpg",
	},
	{
		title: "Global Trade Expertise",
		subtext1: "International Sales:",
		subtext2: "Export Services:",
		text1:
			" Utilizing our expertise, we purchase goods and facilitate seamless transactions for clients looking to sell abroad.",
		text2:
			" We assist in navigating the complexities of exporting goods to various international markets.",
		url: "/assets/img/img2.jpg",
	},
	{
		title: "Local Supplier Engagement",
		subtext1: "Negotiation and Procurement:",
		subtext2: "Supply Chain Management:",
		text1:
			" Engaging with local suppliers efficiently and effectively, negotiating the best deals on our clients’ behalf.",
		text2:
			" We optimize the supply chain process, ensuring timely delivery and cost-effective solutions.",
		url: "/assets/img/img3.jpg",
	},
];

export default function Project1() {
	return (
		<>
			<section className='project-area'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-6 col-lg-7'>
							<div className='section-title text-center mb-50 tg-heading-subheading animation-style3'>
								{/* <span className='sub-title'>OUR PARTNERS</span> */}
								<h2 className='title tg-element-title'>Our Services Include</h2>
							</div>
						</div>
					</div>
				</div>
				<div className='project-item-wrap'>
					<div className='container custom-container-two'>
						<div className='row justify-content-center'>
							{PARTNER_DATA.map((item, index) => {
								return (
									<div key={index} className='mt-3 col-xl-3 col-md-6'>
										<div className='project-item'>
											<div className='project-thumb'>
												<Link href='/project-details'>
													<img src={item.url} alt='' />
												</Link>
											</div>
											<div className='project-content'>
												<div className='left-side-content'>
													<h4 className='title'>
														<p style={{ fontSize: "16px", fontWeight: "bold" }}>
															{item.title}
														</p>
													</h4>
													<span className='mt-2'>
														<span
															style={{ color: "#3e4073", display: "inline" }}
														>
															*{item.subtext1}
														</span>
														{item.text1}
													</span>
													<span className='mt-2'>
														<span
															style={{ color: "#3e4073", display: "inline" }}
														>
															*{item.subtext2}
														</span>
														{item.text2}
													</span>
													<span></span>
												</div>
												{/* <div className='link-arrow'>
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
												</div> */}
											</div>
										</div>
									</div>
								);
							})}
						</div>
						{/* <div className='row justify-content-center'>
							<div className='col-12'>
								<div className='project-content-bottom'>
									<Link href='/partners' className='btn'>
										For more info
									</Link>
								</div>
							</div>
						</div> */}
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
			</section>
		</>
	);
}
