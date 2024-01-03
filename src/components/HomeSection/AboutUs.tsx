import AboutUsCard from "./AboutUsCard";
import { FaPhoneAlt } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

export default function AboutUs() {
    return (
        <>
            <div className="md:w-[1000px] w-full container mx-auto mt-40">
                <div className="w-full mb-24">
                    <div className="text-4xl font-bold text-center">
                        Why <span className='text-b-200'> Choose </span> Us
                    </div>
                    <div className="w-auto text-center mt-5 text-slate-500 font-semibold">
                        Find Your Expected Car From Our Inventory Where Our Popular Cars
                    </div>
                </div>
                <div className="w-full h-auto grid 2xl:gap-24 gap-12 grid-cols-1 md:grid-cols-2 md:px-0 px-5">
                    <AboutUsCard
                        title="24 Hours Support"
                        body="Unlock a world of convenience with our car rentals, backed by 24/7 customer support. Whether day or night, our team is here to ensure your journey is smooth and stress-free. Choose reliability, choose CarCab."
                        icon={<FaPhoneAlt />}
                    />

                    <AboutUsCard
                        title="Best Price"
                        body="Discover unbeatable value with our car rentals at the best prices in town. We're committed to offering you top-notch vehicles and exceptional service without breaking the bank. Enjoy quality and affordability seamlessly blended for your ultimate satisfaction."
                        icon={<SlBadge />}
                    />

                    <AboutUsCard
                        title="Verified License"
                        body="Drive with confidence knowing all our vehicles come with a verified license, ensuring your safety and adherence to regulations. We prioritize transparency, providing you peace of mind with every rental. Choose reliability, choose our licensed fleet for a secure and enjoyable journey"
                        icon={<MdOutlineVerifiedUser />}
                    />

                    <AboutUsCard
                        title="Free Cancelation"
                        body="Enjoy the freedom to plan without worries with our 'Free Cancellation' policy. Life is unpredictable, and so are your plans – cancel with ease, no strings attached. At CarCab, flexibility meets convenience, ensuring your journey is as stress-free as possible."
                        icon={<MdOutlineCancel />}
                    />

                </div>
            </div>
        </>
    )
}
