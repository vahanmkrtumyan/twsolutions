export default function About1() {
  const CHOOSE_DATA = [
    {
      title: 'Professionalism and Integrity',
      text: 'Our dedication to professionalism and integrity forms the foundation of every trade engagement we undertake.'
    },
    {
      title: 'Considerable Network',
      text: 'Our extensive network of suppliers and partners globally and locally enables us to offer you the best options available.'
    },
    {
      title: 'Quality Assurance',
      text: 'We prioritize quality in every step, ensuring that the products meet stringent standards before they reach your hands.'
    },
    {
      title: 'Expert Guidance',
      text: 'Our experienced team provides personalized guidance and support throughout the purchasing and trading process.'
    },
    {
      title: 'Collaborative Approach',
      text: 'We believe in fostering mutually beneficial relationships, valuing transparency, and nurturing partnerships built on trust.'
    },
    {
      title: 'Shared Vision',
      text: 'Join hands with us to contribute to a more efficient and interconnected global trade ecosystem.'
    }
  ];
  return (
    <>
      <section id="about" className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-35 tg-heading-subheading animation-style3">
                  <span className="sub-title">Why should clients choose</span>
                  <h2 className="title tg-element-title">
                    Tradewise solutions as a trade partner?
                  </h2>
                </div>
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
                            <p>{item.text}</p>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="section-title mb-35 tg-heading-subheading animation-style3">
                  <p>
                    <span className="sub-title">Market Opportunity: </span>
                    We operate in a vibrant and evolving market, presenting
                    substantial opportunities for growth and expansion.
                  </p>
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
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <img src={'/assets/img/img2.jpg'} alt="goal_image" />
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
