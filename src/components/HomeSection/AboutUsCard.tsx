export default function AboutUsCard({title , body , icon}:any) {

    return (
        <div className="w-full  container mx-auto xl:h-[220px] h-auto flex">
            <div className="w-[80px] h-full text-2xl">
                <div className="w-[40px] h-[40px] bg-b-200 flex justify-center items-center text-white rounded-xl">
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-5">
                    {title}
                </h3>
                <p className="font-semibold text-slate-500">
                    {body}
                </p>
            </div>
        </div>
    )
}
