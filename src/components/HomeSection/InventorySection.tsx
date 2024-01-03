import InventoryCards from "./InventoryCards";

export default function InventorySection() {
    return (
        <>
            <div className="w-full container mx-auto">
                <div className="w-full mb-24">
                    <div className="text-4xl font-semibold text-center">
                        Our <span className='text-b-200'> Popular </span> Cars
                    </div>
                    <div className="w-auto text-center mt-5 text-slate-500 font-semibold">
                        Find Your Expected Car From Our Inventory Where Our Popular Cars
                    </div>
                </div>
                <div className="w-full h-auto grid 2xl:gap-24 gap-12 grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:px-0 px-5">
                    <InventoryCards />
                    <InventoryCards />
                    <InventoryCards />
                    <InventoryCards />
                    <InventoryCards />
                    <InventoryCards />
                </div>
            </div>
        </>
    )
}
