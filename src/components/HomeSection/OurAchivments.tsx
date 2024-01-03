export default function OurAchivments() {
    return (
        <>
            <div className="md:w-[1000px] w-full container mx-auto mt-40 md:px-0 px-4">
                <div className="w-full mb-24">
                    <div className="text-4xl font-bold text-center">
                        Our <span className='text-b-200'> Achievements </span>
                    </div>
                    <div className="w-auto text-center mt-5 text-slate-500 font-semibold">
                        Find Your Expected Car From Our Inventory Where Our Popular Cars
                    </div>
                </div>
                <div className="w-full md:h-[200px] h-full rounded-xl md:flex justify-between p-10 shadow-xl border">
                    <div className="md:w-1/3 h-full flex flex-col justify-center items-center md:pb-0 pb-5">
                        <div className="text-b-200 text-4xl font-bold mb-3">
                            4000+
                        </div>
                        <div className="font-bold">
                            Active Members
                        </div>
                    </div>
                    <div className="md:w-1/3 h-full md:border-r md:border-l border-t border-b md:border-t-0 md:border-b-0 py-5 md:py-0 flex flex-col justify-center items-center">
                        <div className="text-b-200 text-4xl font-bold mb-3">
                            100+
                        </div>
                        <div className="font-bold">
                            Car Models
                        </div>
                    </div>
                    <div className="md:w-1/3 h-full flex flex-col justify-center items-center md:pt-0 pt-5">
                        <div className="text-b-200 text-4xl font-bold mb-3">
                            6K
                        </div>
                        <div className="font-bold">
                            Satified Clients
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
