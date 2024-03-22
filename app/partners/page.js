import Layout from '@/components/layout/Layout';
import BrandActiveSlider from '@/components/slider/BrandActiveSlider';
import Link from 'next/link';
// import { createClient } from "@/prismicio";

export default function Partners() {
  // const client = createClient();

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Partners">
        <div>
          <section className="mb-30">
            <div className="container">
              <h2 className="title text-center mt-50 mb-100">
                OUR TRUSTED PARTNERS
              </h2>
              <div className="partner-images">
                <img
                  className="partner-image"
                  src="/assets/img/partner1.png"
                  alt=""
                />
                <img
                  className="partner-image"
                  src="/assets/img/partner2.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
