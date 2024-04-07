export default function ServisesNew() {
  const CHOOSE_DATA = [
    {
      title: 'Procurement Solutions',
      text1:
        'Sourcing Goods: We specialize in seeking the goods our clients require, meticulously searching both local and global markets to match their specifications.',
      text2:
        'Supplier Vetting: Finding reputable and reliable suppliers is crucial. We conduct rigorous vetting processes to ensure the highest quality standards.'
    },
    {
      title: 'Global Trade Expertise',
      text1:
        'International Sales: Utilizing our expertise, we purchase goods and facilitate seamless transactions for clients looking to sell abroad.',
      text2:
        'Export Services: We assist in navigating the complexities of exporting goods to various international markets.'
    },
    {
      title: 'Local Supplier Engagement',
      text1:
        'Negotiation and Procurement: Engaging with local suppliers efficiently and effectively, negotiating the best deals on our clients’ behalf.',
      text2:
        'Supply Chain Management: We optimize the supply chain process, ensuring timely delivery and cost-effective solutions.'
    }
  ];
  return (
    <>
      <section id="about" className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="section-title mb-35 tg-heading-subheading animation-style3">
              <h2 className="title tg-element-title">Our Services Include</h2>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <img src={'/assets/img/img3.jpg'} alt="goal_image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="about-list">
                  {CHOOSE_DATA.map((item, _) => {
                    return (
                      <ul key={item.uid} className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-target" />
                          </div>
                          <div className="content">
                            <h4 className="title">{item.title}</h4>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </div>

                <div className="about-shape-wrap">
                  <img src="/assets/img/images/about_shape03.png" alt="" />
                  <img
                    src="/assets/img/images/about_shape04.png"
                    alt=""
                    className="ribbonRotate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-left-shape">
          <img src="/assets/img/images/about_shape02.png" alt="" />
        </div>
      </section>
    </>
  );
}
