import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import BlogPost1 from "@/components/sections/BlogPost1";
import Brand1 from "@/components/sections/Brand1";
import Callback1 from "@/components/sections/Callback1";
import Choose1 from "@/components/sections/Choose1";
import Consulting1 from "@/components/sections/Consulting1";
import Counter1 from "@/components/sections/Counter1";
import Project1 from "@/components/sections/Project1";
import Request1 from "@/components/sections/Request1";
import Services1 from "@/components/sections/Services1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Team1 from "@/components/sections/Team1";
import { createClient } from "@/prismicio";
import Partners from "./partners/page";
import Abilities from "@/components/sections/Abilities";
import Head from "next/head";

export const metadata = {
	title: "TW Solutions",
};

export default function Home() {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout headerStyle={1} footerStyle={1} transparent>
				<Banner1 />
				<About1 />
				<Abilities />
				{/* <Services1 /> */}
				{/* <Choose1 /> */}
				{/* <Counter1 /> */}
				<Project1 />
				{/* <Request1 /> */}
				{/* <Team1 /> */}
				{/* <Consulting1 /> */}
				{/* <Testimonial1 /> */}
				{/* <BlogPost1 /> */}
				{/* <Callback1 /> */}
			</Layout>
		</>
	);
}
