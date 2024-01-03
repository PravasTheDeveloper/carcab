import Herosection from '@/components/HomeSection/HeroSection'
import CatagorySection from '@/components/HomeSection/CatagorySection'
import NavBarSection from '@/components/NavBarSection/NavBarSection'
import FooterSection from '@/components/Footer/FooterSection'
import InventorySection from '@/components/HomeSection/InventorySection'
import AboutUs from '@/components/HomeSection/AboutUs'
import OurAchivments from '@/components/HomeSection/OurAchivments'

export default function Home() {
  return (
    <>
      <NavBarSection />
      <Herosection />
      <CatagorySection />
      <InventorySection />
      <AboutUs />
      <OurAchivments />
      <FooterSection />
    </>
  )
}
