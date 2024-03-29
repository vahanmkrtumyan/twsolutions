import Layout from '@/components/layout/Layout';
import { createClient } from '@/prismicio';
import Link from 'next/link';
import Form from './form';

import styles from './style.module.scss';

export default function Contact() {
  // const contacts = await client.getAllByType("contacts");
  // console.log("contacts: ", contacts);
  // const callback = await client.getSingle("callback");
  // console.log("callback: ", callback);
  // const { data: callbackData } = callback;
  // const { data } = contacts[0];
  // const { callback_title, callback_text } = callbackData;
  // const {
  // 	contact_email,
  // 	contact_address,
  // 	contact_phone,
  // 	contact_text,
  // 	contact_title,
  // 	second_contact_phone,
  // } = data;

  // useEffect(() => {
  // 	async function fetchData() {
  // 		if (contacts.length === 0 || Object.keys(callbackData).length === 0) {
  // 			const fetchedContacts = await client.getAllByType("contacts");
  // 			const fetchedCallback = await client.getSingle("callback");
  // 			setContacts(fetchedContacts);
  // 			setCallbackData(fetchedCallback?.data);
  // 		}
  // 	}

  // 	fetchData();
  // }, []);

  // if (contacts.length === 0 || Object.keys(callbackData).length === 0) {
  // 	return <Preloader />;
  // }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact With Us">
        <div>
          <section className="contact__area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.0272890678675!2d55.07792336012214!3d24.965186163201892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d09f63d6bd7%3A0xaf6808670ddb6d08!2sTaSK%20Plus%20Ingredients%20and%20Solutions!5e0!3m2!1sen!2sam!4v1710965751777!5m2!1sen!2sam"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="contact__content">
                    <div className="section-title mb-35">
                      <h2 className="title">Contacts</h2>
                    </div>

                    <div className="contact__info">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <h4 className="title">Address</h4>
                            <p>
                              BCW, Office number 1129, Floor 11, Jafza One,
                              Jebel Ali Free Zone, Dubai, U.A.E.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <h4 className="title">Phone</h4>
                            <p>+971504305140</p>
                            {/* {"second_contact_phone" && (
															<p>
																<Link href={"second_contact_phone"}>
																	{"second_contact_phone"}
																</Link>
															</p>
														)} */}
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-mail" />
                          </div>
                          <div className="content">
                            <h4 className="title">E-mail</h4>
                            <Link href="mailto:info@twsolutions.ae">
                              info@twsolutions.ae
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="content">
                            <h4 className="title">Company Info</h4>
                            <p>
                              Company name: Tradewise Solutions General Trading
                              FZE
                              <br /> Legal status: FZE (Limited Liability)
                              <br />
                              License number: 70929196 <br />
                              Registration number: 69445435
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className='col-lg-7'>
									<div className='contact__form-wrap'>
										<h2 className='title'>Give Us a Message</h2>
										<p>
											Your email address will not be published. Required fields
											are marked *
										</p>
										<form
											id='contact-form'
											action='assets/mail.php'
											method='POST'
										>
											<div className='form-grp'>
												<textarea name='message' placeholder='Message' />
											</div>
											<div className='row'>
												<div className='col-md-4'>
													<div className='form-grp'>
														<input type='text' name='name' placeholder='Name' />
													</div>
												</div>
												<div className='col-md-4'>
													<div className='form-grp'>
														<input
															type='email'
															name='email'
															placeholder='Email'
														/>
													</div>
												</div>
												<div className='col-md-4'>
													<div className='form-grp'>
														<input
															type='number'
															name='phone'
															placeholder='Phone'
														/>
													</div>
												</div>
											</div>
											<div className='form-grp checkbox-grp'>
												<input type='checkbox' name='checkbox' id='checkbox' />
												<label htmlFor='checkbox'>
													Save my name, email, and website in this browser for
													the next time I comment.
												</label>
											</div>
											<button type='submit' className='btn'>
												Submit post
											</button>
										</form>
										<p className='ajax-response mb-0' />
									</div>
								</div> */}
              </div>
            </div>
          </section>
          {/* contact-area-end */}
          {/* call-back-area */}
          <section className="call-back-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="call-back-content">
                    <div className="section-title white-title mb-10">
                      <h2 className="title">For Call Back</h2>
                    </div>
                    <p>
                      {' '}
                      Please feel free to reach out for any further information
                      or documentation required to complete the KYC process.
                    </p>
                    <div className="shape">
                      <img
                        src="/assets/img/images/call_back_shape.png"
                        alt=""
                        data-aos="fade-right"
                        data-aos-delay={400}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="call-back-form">
                    <Form />
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
