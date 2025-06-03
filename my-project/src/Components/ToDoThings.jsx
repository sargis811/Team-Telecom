export default function ToDoThings({base}){
    return(
        base.map(thisBase => {
                return <div className="bg-[#003f5b] p-[30px] flex gap-[50px] w-[350px] rounded-[30px] w-[450px] h-[200px]" key={thisBase.title + 'div'}> 
                    <div className="info flex-col flex justify-between items-center">
                        <div className="div">
                            <h1 className="text-[white] text-[25px]" key={thisBase.title}>{thisBase.title}</h1>
                            <p className="text-[white]" key={thisBase.text + thisBase.title}>{thisBase.text}</p>
                        </div>
                        <p className="text-[white]">{base.end}</p>
                    </div>
                        <img src={thisBase.imgUrl} className="w-[200px] h-[150px]" alt="nkar" />
                </div>
        })
    )
}