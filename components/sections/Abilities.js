import React from "react";

function Abilities() {
	const ABILITIES_DATA = [
		{
			title: "Commitment to Reputability and Reliability:",
			subtext1: "Transparent Operations:",
			subtext2: "Reliable Partnerships:",
			text1:
				"We uphold transparent and ethical business practices, ensuring compliance with all regulatory standards and requirements.",
			text2:
				"Building and supporting reliable partnerships are at the heart of our operations. We prioritize trust and mutual respect in all our interactions.",
			url: "/assets/img/img1.jpg",
		},
		{
			title: "Compliance Adherence:",
			subtext1: "Regulatory Compliance:",
			subtext2: "Due Diligence:",
			text1:
				"We strictly adhere to all regulatory guidelines, maintaining comprehensive records and processes to ensure compliance in all our business dealings.",
			text2:
				"Thorough due diligence is a cornerstone of our operations, mitigating risks and maintaining the highest standards of integrity.",
			url: "/assets/img/img2.jpg",
		},
		{
			title: "Financial Sustainability:",
			subtext1: "Solid Financial Standing:",
			subtext2: "Strategic Growth Plan:",
			text1:
				"We maintain a strong financial position, driven by prudent management practices and a focus on sustainable growth",
			text2:
				"Our strategic roadmap outlines a clear path for expansion, diversification and increasing profitability.",
			url: "/assets/img/img3.jpg",
		},
	];
	return (
		<section className='mb-30'>
			<div className='container'>
				<h2 className='title tg-element-title text-center mt-50 mb-100'>
					You Should Also Know
				</h2>
				{ABILITIES_DATA.map((item, index) => {
					if (index === 1) {
						return (
							<div key={index} className='row mb-30 partner-item d-flex'>
								<div className='col-md-6'>
									<div
										style={{ margin: "30px auto" }}
										className='left-side-content'
									>
										<h4 className='title'>
											<p style={{ fontSize: "16px", fontWeight: "bold" }}>
												{item.title}
											</p>
										</h4>
										<span className='mt-2'>
											<span style={{ color: "#3e4073", display: "inline" }}>
												*{item.subtext1}
											</span>
											{item.text1}
										</span>
										<span className='mt-2'>
											<span style={{ color: "#3e4073", display: "inline" }}>
												*{item.subtext2}
											</span>
											{item.text2}
										</span>
										<span></span>
									</div>
								</div>
								<div className='col-md-6 pl-0'>
									<img
										className='partner-image-border-fix'
										src={`/assets/img/img${index + 1}.jpg`}
										alt=''
									/>
								</div>
							</div>
						);
					} else
						return (
							<div key={index} className='row mb-30 partner-item d-flex'>
								<div className='col-md-6 pl-0'>
									<img
										className='partner-image-border-fix'
										src={`/assets/img/img${index + 1}.jpg`}
										alt=''
									/>
								</div>
								<div className='col-md-6'>
									<div
										style={{ margin: "30px auto" }}
										className='left-side-content'
									>
										<h4 className='title'>
											<p style={{ fontSize: "16px", fontWeight: "bold" }}>
												{item.title}
											</p>
										</h4>
										<span className='mt-2'>
											<span style={{ color: "#3e4073", display: "inline" }}>
												*{item.subtext1}
											</span>
											{item.text1}
										</span>
										<span className='mt-2'>
											<span style={{ color: "#3e4073", display: "inline" }}>
												*{item.subtext2}
											</span>
											{item.text2}
										</span>
									</div>
								</div>
							</div>
						);
				})}
			</div>
		</section>
	);
}

export default Abilities;
