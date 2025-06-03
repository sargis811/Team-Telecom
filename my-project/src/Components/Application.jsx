import QrAndApp from "./QrAndApp"

export default function Application(){
    return(
        <div className="contain flex items-center jutify-center w-[100vw] mt-[50px] ml-[40px]">
            <div className="inner flex flex-col gap-[20px] ">
                <h1 className="text-[#2c3843] font-[bolder] text-[30px]">Հավելված My Team</h1>
                <p>Ներբեռնե՛ք My Team-ը iOS և Android համակարգերի համար</p>
                <p>Կատարե՛ք վճարումներ, ստացեք բոնուսներ, շեյքեք և օգտվեք այլ հնարավորություններից</p>
                <QrAndApp/>
            </div>
            <img src="https://www.telecomarmenia.am/img/redesign/app-img.png" className="w-[250px] h-[300px]" alt="telephone" />
        </div>
    )
}