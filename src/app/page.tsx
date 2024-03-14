import dynamic from "next/dynamic";
import About from "@/Components/About/About";
import Header from "@/Components/Header/Header";
import Layout from "@/Components/Layout/Layout";
import MobileDetect from "mobile-detect";
import { headers } from "next/headers";
import JSONSchema from "@/Components/Meta/JSONSchema";

const Navbar = dynamic(() => import("@/Components/Navigation/Navbar"));
const Offers = dynamic(() => import("@/Components/Offers/Offers"));
const Portfolio = dynamic(() => import("@/Components/Portfolio/Portfolio"));
const Contact = dynamic(() => import("@/Components/Contact/Contact"));
const Footer = dynamic(() => import("@/Components/Footer/Footer"));
const Achievements = dynamic(
  () => import("@/Components/Achievements/Achievements")
);

export default async function Home() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const md = new MobileDetect(userAgent as string);
  return (
    <>
      <JSONSchema />
      <Navbar />
      <Layout isBlue>
        <Header isMobile={Boolean(md.mobile())} />
        <About />
      </Layout>
      <Portfolio isMobile={Boolean(md.mobile())} />
      <Achievements />
      <Offers />
      <Layout isBlue>
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}
