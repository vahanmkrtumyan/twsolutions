import Layout from '@/components/layout/Layout';
import About1 from '@/components/sections/About1';
import Banner1 from '@/components/sections/Banner1';
import Brand1 from '@/components/sections/Brand1';
import Project1 from '@/components/sections/Project1';
import Services1 from '@/components/sections/Services1';

import { createClient } from '@prismicio/client';

export const metadata = {
  title: 'TW Solutions'
};

export default async function Home() {
  const client = createClient();
  const home = {};
  // const home = await client.getSingle('home');
  // console.log('home: ', home);
  // const goals = await client.getAllByType("goal");

  const { data } = home;
  console.log('data: ', data);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} transparent>
        <asd>asd</asd>
        {/* <Banner1 data={data} /> */}
        {/* <About1 goalsInfo={data} goals={goals} /> */}
        {/* <Brand1 /> */}
        {/* <Services1 /> */}
        {/* <Project1 data={data} /> */}
      </Layout>
    </>
  );
}
