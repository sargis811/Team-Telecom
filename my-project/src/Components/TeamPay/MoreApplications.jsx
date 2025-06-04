export default function MoreApplications({list}){
    return (
        <div className="flex gap-[50px]">
            {
                list.map(el => {
                    return (
                        <div className="flex gap-[20px] mb-[30px]">
                            <img className="w-[200px] h-[200px] rounded-[30px] bg-cover" src={el.url}/>
                            <div className="flex flex-col gap-[10px] w-[200px]">
                                <h1 className="text-[20px]">{el.title}</h1>
                                <p className="w-[200px]"><pre>{el.text}</pre></p>
                                <button className="bg-red-500 text-white w-[100px] p-[10px] rounded-[20px]">{el.button}</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}