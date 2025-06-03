let rounds = [
    {
        img: 'https://www.telecomarmenia.am/img/virtual-icon-1.png',
        text: 'Զանգերի բաշխում. ոչ մի բաց թողնված զանգ'
    },
    {
        img: 'https://www.telecomarmenia.am/img/virtual-icon-2.png',
        text: 'Հեռախոսազանգերի ձայնագրություն և զանգերի վիճակագրություն'
    },
    {
        img: 'https://www.telecomarmenia.am/img/virtual-icon-3.png',
        text: 'Ձայնային օգնական հաճախորդների համար'
    }
]

export default function Rounds(){
    return(
        <div className="flex gap-[50px] mt-[50px]">
            {
                rounds.map((el) => {
                    return (
                        <div className="w-[200px] flex flex-col items-center justify-center">
                            <img src={el.img} alt="img" className="w-[80px] h-[80px] mb-[10px]"/>
                            <p className="text-white  text-[12px] text-center">{el.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}