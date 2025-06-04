export default function NewsInTeam({base}){
    return(
        <div className="flex w-[1050px] flex-wrap gap-[10px]">
            {
                base.map(el => {
                    return (
                        <div className="p-[20px] flex flex-col gap-[10px] w-[500px] bg-gray-200 rounded-[15px]">
                            <p>{el.date}</p>
                            <h1 className="text-[20px]">{el.title}</h1>
                            <p>{el.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}