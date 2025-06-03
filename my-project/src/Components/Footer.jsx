import QrAndApp from "./QrAndApp"
import FooterList from "./FooterList"

let l2 = [
    ["Մեր մասին"],
    ["Կապի թանգարան"],
    ["Նորություններ"],
    ["Աշխատանք Տելեկոմ Արմենիայում"],
    ["Արդյունքներ և հաշվետվություններ"],
    ["Գործարար էթիկա և Կոմպլայենս"],
    ["Կայուն զարգացում"],
    ["Բաժնետերերին"]
  ]
  

let l3 = [
    ["Ընդհանուր դրույթներ և պայմաններ"],
    ["Անվտանգություն"],
    ["E-shop պայմաններ"],
    ["Ապառիկ վաճառքի պայմաններ"],
    ["Առաքման պայմաններ"],
    ["Վաճառքի և սպասարկման կենտրոններ"],
    ["Ծածկույթ"],
    ["Բջջային ցանցի ծածկույթ"],
    ["Team ինտերնետի հասանելիության ծածկույթ"],
    ["Օգտակար փաստաթղթեր"],
    ["Գործընկերներին և մատակարարներին"],
    ["Գաղտնիության քաղաքականություն"],
    ["ՀՀ մարզերի կոդեր"]
  ]
  
  let l4 = [
        ["TeamTV"],
        ["My Team"],
        ["Team Pay", "/teamPay"],
        ["Team Energy"]
  ]
  

export function Footer(){
    return (
        <footer className="w-[100vw]">
            <div className="fLine flex w-[100%] justify-around bg-sky-800 p-[20px]">
                <div className="l1 flex flex-col gap-[10px]">
                <img src="https://www.telecomarmenia.am/img/logo-light.svg?v=1" alt="logo" />
                <div className="applications flex gap-[10px]">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="about flex flex-col gap-[10px]">
                    <p className="flex gap-[10px] text-[16px] items-center"><i className="fa-solid fa-phone text-[16px]"></i><span className="text-[white]">100</span></p>
                    <p className="flex gap-[10px] text-[16px] items-center"><i className="fa-solid fa-envelope text-[16px]"></i><span className="text-[white]">info@telecomarmenia.am</span></p>
                </div>
                <QrAndApp/>
                <div className="certified flex gap-[30px]">
                    <img src="https://www.telecomarmenia.am/img/redesign/iso_1.png" alt="round" className="h-[63px] w-[63px]" />
                    <img src="https://www.telecomarmenia.am/img/redesign/iso_1.png" alt="round" className="h-[63px] w-[63px]"/>
                </div>
                </div>
                <div className="l2">
                    <h3 className="text-[white] mb-[10px]">Ընկերության մասին</h3>
                    <div className="flex flex-col gap-[20px]">
                        <FooterList list={l2}/>
                    </div>
                </div>
                <div className="l3">
                    <h3 className="text-[white] mb-[10px]">Տեղեկատվություն</h3>
                    <div className="flex flex-col gap-[20px]">
                        <FooterList list={l3}/>
                    </div>
                </div>
                <div className="l4">
                    <h3 className="text-[white] mb-[10px]">Team հավելվածներ</h3>
                    <div className="flex flex-col gap-[20px]">
                        <FooterList list={l4}/>
                    </div>
                </div>
            </div>
            <div className="sLine w-[100vw] flex justify-center bg-sky-500 text-[white]">
                Team © 2025
            </div>
        </footer>
    )
}