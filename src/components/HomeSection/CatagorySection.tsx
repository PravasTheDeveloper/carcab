import DropdownComponents from '../Dropdown/DropdownComponents'

export default function CatagorySection() {

    return (
        <>
            <div className='h-auto w-full sm:my-[150px] my-[100px] container mx-auto flex justify-center'>
                <div className='h-auto w-[900px] shadow-xl rounded-xl bg-b-100 border p-10'>
                    <div className='text-slate-500 font-semibold'>
                        Find Your Expected Car
                    </div>
                    <div className='md:flex justify-between mt-5'>
                        <div className='sm:flex justify-between flex-1'>
                            <DropdownComponents />
                            <DropdownComponents />
                        </div>
                        <div className='md:ml-5 w-full mt-10 md:mt-0 ml-0 md:w-auto'>
                            <button className='bg-b-200 w-full px-12 h-10 rounded-full font-semibold text-white' >Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
