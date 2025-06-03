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
        </div>
    )
}