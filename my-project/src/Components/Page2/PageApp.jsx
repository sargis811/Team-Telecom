import { Header } from "../Header";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import MainSlider from './MainSlider.jsx'
import ImgSliderMain from "../ImgSliderMain";
import ToDoThings from "../ToDoThings.jsx";
import InputAbout from "./InputAbout.jsx";
const slides = [
    {
      id: 1,
      title: 'PRO',
      description: `• PROգրեսիվ 
• PROդուկտիվ  
• PROֆեսիոնալ`,
    button: {
        text: 'Մանրամասն',
        color: "text-white",
        bgColor: "bg-red-500",
    },
      image: "https://www.telecomarmenia.am/images/advanced_slider/1/1650973651394.png",
    },
    {
        id: 2,
        image: 'https://www.telecomarmenia.am/images/advanced_slider/1/1696925830142.png',
        description: 'Փորձարկե՛ք հնարավորություններն ԱՆՎՃԱՐ',
        title: "Միացե՛ք",
      button: {
          text: "Միանալ",
          color: "text-white",
          bgColor: "bg-red-500",
        },
    },
    {
      id: 3,
      image: "https://www.telecomarmenia.am/images/advanced_slider/1/16969336013421.png",
      title: 'Բիզնես',
      description: `• ԱՄՆ, Կանադա, Չինաստան ցանցեր
• ՀՀ բոլոր ցանցեր
• Ռուսաստան Beeline ցանց`,
      button: {
        text: "Մանրամասն",
        color: "text-white",
        bgColor: "bg-[red]",
      },
    },
]

let base = [
    {
        title: 'Կորպորատիվ ցանցեր',
        imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509737068164.png',
        end: 'Մանրամասն',
        text: 'Տեղեկատվության փոխանակման ապահով համակարգ',
    },
    {
        title: 'Mobile ID',
        imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509737228197.png',
        end: 'Մանրամասն',
        text: 'Վճարումներ և նույնականացում բջջային հեռախոսի միջոցով',
    },
    {
        title: 'M2M լուծումներ',
        imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509737385483.png',
        end: 'Մանրամասն',
        text: 'Տվյալների հուսալի փոխանցում',
    },
    {
        title: 'SMS-ինֆո',
        imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509737509423.png',
        end: 'Մանրամասն',
        text: 'Զանգվածային SMS տարածման ծառայություն',
    }
  ]
  


export default function PageApp(){
    return (
        <div>
            <ImgSliderMain slides={slides}/>
            <div>
                <h1 className="text-[25px] ml-[20px]">Բջջային կապի սակագներ</h1>
                <MainSlider/>
            </div>
            <div className='flex gap-[50px] w-[1000px] flex-wrap items-center justify-center mt-[50px]'>
                <ToDoThings base={base}/>
            </div>
            <InputAbout/>
        </div>
    )
}