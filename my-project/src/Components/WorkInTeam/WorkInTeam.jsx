export default function WorkInTeam(){
    return (
        <div>
            <img src="https://www.telecomarmenia.am/images/menu/1/15789192063747.jpeg" alt="nkar" className="w-[100vw] h-[500px]"/>
        <div className="flex flex-col gap-[20px] mt-[50px] w-[100vw] ml-[100px] mb-[50px]">
            <div className="flex gap-[20px]">
                <p>Գլխավոր</p>
                <p><i className="fa-solid fa-chevron-right"></i></p>
                <p>Ընկերության Մասին</p>
                <p><i className="fa-solid fa-chevron-right"></i></p>
                <p>Աշխատանք Տելեկոմ Արմենիայում</p>
            </div>
            <h1 className="text-[30px]">Աշխատանք Տելեկոմ Արմենիայում</h1>
            <div className="flex w-[800px] ">
                <div className="flex w-[500px] justify-center">
                <div className="p-[20px] border-b-[2px] border-gray-400">
                        Նորություններ
                    </div>
                    <div className="p-[20px] border-b-[5px] border-blue-400">
                        Հայտարարություններ
                    </div>
                    <div className="p-[20px] border-b-[2px] border-gray-400">
                        Բոլորը
                    </div>
                </div>
            </div>
            <div className="flex gap-[20px]">
                <div className="bg-gray-200 p-[10px] rounded-[5px]">
                    2025.06.04 - 2025.06.04 <i class="fa-solid fa-calendar-days"></i>
                </div>
                <button className="p-[10px] bg-red-500 text-white rounded-[20px]">
                    Որոնում
                </button>
            </div>
            
        </div>
        </div>
    )
}