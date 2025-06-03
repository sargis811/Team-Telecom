let base = [
    {
        id: 1,
        img: 'https://www.telecomarmenia.am/files/icons/1/16511434160671/220x220.png',
        text: 'Սմարթֆոններ'
    },
    {
        id: 2,
        img: 'https://www.telecomarmenia.am/files/icons/1/16511436682774/220x220.png',
        text: 'Համարներ'
    }, 
    {
        id: 3,
        img: 'https://www.telecomarmenia.am/files/icons/1/16511433995815/220x220.png',
        text: 'Սարքավորումներ'
    },
    {
        id: 4,
        img: 'https://www.telecomarmenia.am/files/icons/1/16511434076021/220x220.png',
        text: 'Աքսեսուարներ'
    },
]

export default function ShopGroup(){
   return (
        <div className="flex gap-[20px] mt-[20px] mb-[20px] ">
            {
                base.map((el) => {
                    return <div className="p-[15px] bg-gray-400 flex gap-[20px] rounded-[30px]">
                        <img src={el.img} alt="img" className="w-[50px]"/>
                        <p className="text-white">{el.text}</p>
                    </div>
                })
            }
        </div>
   )
}