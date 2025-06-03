export default function QrAndApp(){
    return (
        <div className="qrZone flex items-center justify-center w-[220px] gap-[20px]">
            <img src="https://www.telecomarmenia.am/img/redesign/qr.svg" alt="qr" className="w-[90px] h-[90px]"/>
            <div className="imgCont flex flex-col gap-[10px] ">
                <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="apple" className="w-[180px] h-[50px]"/>
                <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="playMarket" className="w-[180px] h-[50px]"/>
            </div>
        </div>
    )
}