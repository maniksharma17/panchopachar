import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Mentors from "@/components/Mentors";
import Navbar from "@/components/Navbar";
import Program1 from "@/components/Program1";
import { SocialsMediaBanner } from "@/components/SocialsMediaBanner";

export default function Home() {
  return <div>
  <div className="img-bg">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
  <Program1></Program1>
  <Mentors></Mentors>
  <SocialsMediaBanner></SocialsMediaBanner>
  <Footer></Footer>
  </div>
}
