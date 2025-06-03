import ImgSliderMain from './ImgSliderMain.jsx'
import '../CSS/main.css'
import ToDoThings from './ToDoThings'
import JoinUs from './JoinUs.jsx'
import Application from './Application.jsx'
import NewsSlider from './NewsSlider.jsx'


const slides = [
  {
    id: 1,
    image: "https://www.telecomarmenia.am/images/advanced_slider/2/17476512003366.png",
  },
  {
    id: 2,
    image: 'https://www.telecomarmenia.am/images/advanced_slider/1/17144722984561.png',
    title: "BE FREE 4000 սակագնային փաթեթ",
    button: {
        text: "Ավելին",
        color: "text-white",
        bgColor: "bg-red-500",
      },
  },
  {
    id: 3,
    image: "https://source.unsplash.com/800x600/?telecom",
    title: 'Շեյքի՛ր և Շահի՛ր',
    description: 'Բազմաթիվ նվերներ',
    button: {
      text: "Միանալ",
      color: "text-white",
      bgColor: "bg-[red]",
    },
    image: "https://www.telecomarmenia.am/images/advanced_slider/2/17400318089669.png",
  },
  {
    id: 4,
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


let base = [
  {
      title: 'ԲՋՋԱՅԻՆ ԿԱՊ',
      imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509682370213.png',
      end: 'Ավելին',
      text: '',
  },
  {
      title: 'ՖԻՔՍՎԱԾ ԿԱՊ',
      imgUrl: 'https://www.telecomarmenia.am/images/promo/1/1650969068409.png',
      end: 'Ավելին',
      text: '',
  },
  {
      title: 'ՀԱՎԵԼՎԱԾՆԵՐ',
      imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16509690498367.png',
      end: 'Ավելին',
      text: '',
  },
  {
      title: 'ԻՆՏԵՐՆԵՐ ԵՎ TV',
      imgUrl: 'https://www.telecomarmenia.am/images/promo/1/16510462295535.png',
      end: 'Ավելին',
      text: '',
  }
]


export function Main(){
    return(
        <div className=' flex flex-col items-center'>
            <ImgSliderMain slides={slides}/>
            <div className='flex gap-[50px] w-[1000px] flex-wrap items-center justify-center mt-[50px]'>
                <ToDoThings base={base}/>
            </div>
            <JoinUs/>
            <NewsSlider/>
            <Application/>
        </div>
    )
}