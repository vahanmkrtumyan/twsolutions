import Layout from "@/components/layout/Layout";
import BrandActiveSlider from "@/components/slider/BrandActiveSlider";
import Link from "next/link";
// import { createClient } from "@/prismicio";

export default function Partners() {
	// const client = createClient();

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle='Partners'>
				<div>
					<section className='mb-30'>
						<div className='container'>
							<h2 className='title text-center mt-50 mb-100'>
								We Are Trust Them
							</h2>
							<div className='row mb-30 partner-item'>
								<div className='col-xl-6 pl-0'>
									<img
										className='partner-image-border-fix'
										src={"/assets/img/partner1.png"}
										alt=''
									/>
								</div>
								<div className='col-xl-6'>
									<div className='left-side-content pt-20'>
										<h4 className='title mt-20'>Business Relationships:</h4>
										<span className='mt-30'>
											Impact Trade FZ-LLC, Registration number 0000004033035,
											Registration date 08-04-2021, License Number 47005061,
											5025708, 5023948, Customs code AE-6010964, Manager
											V.Harutyunyan, Address B4-603A1, Business Center 04, RAKEZ
											Business Zone, Ras Al Khaimah, United Arab Emirates,
											<br />
											Email։ info@impact-trade.biz Web www.impact-trade.biz{" "}
											<br />
											Tel +971 561662972, +971 586625223 <br />
											Bank EMIRATES NBD BANK PJSC
											<br />
											CIF 57897844 <br />
											Branch MURAQABAT <br />
											Swift EBILAEAD IBAN#
											<br />
											AE920260001015789784401 (AED) IBAN#
											<br />
											AE730260001025789784403 (EUR) IBAN#
											<br />
											AE030260001025789784402 (USD)
										</span>
									</div>
								</div>
							</div>
							<div className='row mb-30 partner-item'>
								<div className='col-xl-6 pl-0'>
									<img
										className='partner-image-border-fix'
										src={"/assets/img/partner2.png"}
										alt=''
									/>
								</div>
								<div className='col-xl-6'>
									<div className='left-side-content pt-20'>
										<h4 className='title mt-20'>Business Relationships:</h4>
										<span className='mt-30'>
											{/* {item?.data?.partner_full_description} */}
										</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
}
