import Herosection from '@/components/HomeSection/HeroSection'
import CatagorySection from '@/components/HomeSection/CatagorySection'
import NavBarSection from '@/components/NavBarSection/NavBarSection'
import FooterSection from '@/components/Footer/FooterSection'
import InventorySection from '@/components/HomeSection/InventorySection'

export default function Home() {
  return (
    <>
      <NavBarSection />
      <Herosection />
      <CatagorySection />
      <InventorySection />
      <FooterSection />
    </>
  )
}
