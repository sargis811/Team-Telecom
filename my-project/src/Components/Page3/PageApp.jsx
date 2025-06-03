import ImgSliderMain from "../ImgSliderMain";
import ShopGroup from './ShopGroup.jsx'
import ToDoThings from "../ToDoThings.jsx";

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
  

const slides = [
    {
      id: 1,
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17470521006456.jpeg",
    },
    {
      id: 2,
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17470520650019.jpeg',
    },
    {
      id: 3,
      image: "https://www.telecomarmenia.am/images/advanced_slider/1/17054709118389.png",
      title: "SONY Smart TV",
      description: 'ԿՈՍՄՈ/ԿՈՄԲՈ փաթեթեներ',
      button: {
        text: "Մանրամասն",
        color: "text-[white]",
        bgColor: "bg-[red]",
      },
    },
  ];

export default function PageApp(){
    return (
        <div className="flex flex-col items-center justify-center">
           <ImgSliderMain slides={slides}/>
            <ShopGroup/>
        </div>
    )
}