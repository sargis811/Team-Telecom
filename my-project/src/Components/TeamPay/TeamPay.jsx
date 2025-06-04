import MoreApplications from "./MoreApplications.jsx";
import MainSlider from "./TeamPaySlider.jsx";

let list = [
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/16510708696227.png', title: 'My Team', text: `My Team հավելվածի
միջոցով Դուք կարող եք՝ 
Հաշվեկշռի և փաթեթների
մնացորդների… `, button: 'Միանալ'},
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/17116228874075.png', title: 'Team Energy', text: `Team Energy հավելվածի միջոցով
կարող եք գտնել մոտակա
էլեկտրական լիցքավորման կայանը, 
հետևելով քայլերի… `, button: 'Միանալ'}
]

export default  function TeamPay(){
    return (
        <div className="flex flex-col w-[100vw] justify-center gap-[50px] ml-[100px] mt-[50px]">
            <div className="flex gap-[20px]">
                <p>Գլխավոր</p>
                <p><i className="fa-solid fa-chevron-right"></i></p>
                <p>Team հավելվածներ</p>
            </div>
            <div className="flex flex-col gap-[50px] mb-[50px]">
                <h1 className="text-[30px] text-[800]">Team Pay</h1>
                <div className="flex gap-[50px]">
                <div className="flex gap-[30px]">
                    <div className="w-[200px] h-[200px] rounded-[30px] bg-cover bg-[url(https://www.telecomarmenia.am/images/team_apps/1/16590919068437.png)]"></div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center gap-[30px]">
                        <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="apple" />
                        <div className="flex gap-[15px]">
                        {
                            [1, 2, 3, 4, 5].map((el) => {
                                return <i className="fa-solid fa-star text-yellow-300"></i>
                            })
                        }
                        <p>5.0</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[30px]">
                        <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="apple" />
                        <div className="flex gap-[15px]">
                        {
                            [1, 2, 3, 4, 5].map((el) => {
                                if(el <= 3){
                                    return <i className="fa-solid fa-star text-yellow-300"></i>
                                } else{
                                    return <i className="fa-solid fa-star text-gray-300"></i>
                                }
                            })
                        }
                        <p>3.0</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex flex-col flex-start">
            <div className="flex w-[800px] mb-[50px]">
                <div className="flex w-[500px] justify-center">
                    <div className="p-[20px] border-b-[5px] border-blue-400">
                        iOS
                    </div>
                    <div className="p-[20px] border-b-[2px] border-gray-400">
                        Android
                    </div>
                </div>
            </div>
            <MainSlider/>
            <ul className="list-disc mt-[20px] ml-[60px]">
                <li>Էլեկտրոնային դրամապանակ ավելի քան 50 տեսակի վճարումների համար</li>
                <li>Հատուկ առաջարկեր և ակցիաներ</li>
            </ul>
            <div className="flex flex-col gap-[80px] mt-[50px] ml-[50px]">
                <h1 className="text-[30px]">Այլ Հավելվածներ</h1>
                <div>
                    <MoreApplications list={list}/>
                </div>
            </div>
            </div>
        </div>
    )
}