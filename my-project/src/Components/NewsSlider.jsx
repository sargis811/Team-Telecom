import { useState, useEffect, createContext, useContext } from "react";
import { CiHeart } from "react-icons/ci";

let names = [
    'Team Telecom Armenia-ն Տավուշում ամբողջովին վերազինել է բջջային ցանցը',
    'Արի՛ ժամանակի միջով ճամփորդելու. Team-ի Կապի թանգարանը միացել է թանգարանային տոներին',
    'Team Telecom Armenia-ն ընդլայնում է միջազգային գործակցությունը․ ԱՄՆ առաջատար լրատվական ալիք Newsmax-ը կհեռարձակվի Հայաստանում',
    'Ուղղությունը՝ Թիմ․ Team ընկերությունների խումբը Career City Fest-ում սպասում է իր ապագա թիմակիցներին',
    'Վաճառքի և սպասարկման կենտրոնների աշխատանքային գրաֆիկը ապրիլի 24-ին',
    'Team-ը հիմնում է 1 հեկտար անտառ Լոռու մարզում',
    'Ձեռք բեր 1 սմարթֆոն Team-ից, տնկիր 10 ծառ',
    'Team Telecom Armenia-ն արժանացել է որակի կառավարման միջազգային հավաստագրի',
    'Team-ը և Ericsson-ը կնքեցին ռազմավարական համագործակցության հուշագիր',
    'Զգուշացում. Team-ի անունից տարածվում է ներդրումների վերաբերյալ կեղծ հայտարարություն',
    'Team-ը բջջային ցանցի մասշտաբային արդիականացում կիրականացնի',
    'Գարունը ձեռքերում. նորագույն հեռախոս, սմարթ ժամացույց և այլ անակնկալներ Team-ից',
    'Team-ի համահիմնադիր Ալեքսանդր Եսայանը վերընտրվել է ԱՏՁՄ նախագահի պաշտոնում',
    'Team-ը`Համահայկական ձմեռային երկրորդ խաղերի հովանավոր',
    'Վաճառքի և սպասարկման կենտրոնների աշխատանքային գրաֆիկը տոնական օրերին',
    'Team-ի նորագույն NGN ցանցը հասանելի է Վայոց ձորում և Արմավիրում',
    'Team-ի Կայուն զարգացման պարտատոմսերը ցուցակվեցին Հայաստանի ֆոնդային բորսայում',
    'Team ընկերությունների խումբը ձեռք է բերել իռլանդական Imagine օպերատորի բաժնետոմսերի վերահսկող փաթեթը',
    'Team Telecom Armenia-ն ապագա ներդրողներին ներկայացրեց Կայուն զարգացման պարտատոմսերը',
    'Beacon 1.1 արժեքի փոփոխություն',
    '«Տելեկոմ Արմենիա» ԲԲԸ-ն Հայաստանում առաջինն է թողարկում Կայուն զարգացման պարտատոմսեր'
]

let dates = [
    '21 May',
    '16 May',
    '30 April',
    '25 April',
    '23 April',
    '22 April',
    '15 April',
    '10 April',
    '19 March',
    '18 March',
    '14 March',
    '07 March',
    '21 February',
    '29 January',
    '25 December',
    '24 December',
    '20 December',
    '13 December',
    '12 December',
    '06 December',
    '05 December',
]

let url = [
    'https://www.telecomarmenia.am/images/news/1/17340092716975.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17334652618625.png',
    'https://www.telecomarmenia.am/images/news/2/17333931457674.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17478128501455.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17474608108675.png',
    'https://www.telecomarmenia.am/images/news/2/17460160429221.jpeg',
    'https://www.telecomarmenia.am/images/news/1/174558548876.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17454120971311.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17453080912448.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17447115707507.jpeg',
    'https://www.telecomarmenia.am/images/news/2/17442822957451.png',
    'https://www.telecomarmenia.am/images/news/1/17424063041539.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17422985962904.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17419472258909.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17413397316409.jpeg',
    'https://www.telecomarmenia.am/images/news/2/17401254765163.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17381558317549.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17351309373343.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17351058800968.png',
    'https://www.telecomarmenia.am/images/news/2/17349390035646.jpeg',
    'https://www.telecomarmenia.am/images/news/1/17340743012888.jpeg'

]

const slides = Array.from({ length: 21 }).map((el, i) => ({
  id: i,
  date: dates[i],
  text: names[i],
  image: url[i],
  favorite: false
}));

const chunkSize = 3;
const groupedSlides = [];
for (let i = 0; i < slides.length; i += chunkSize) {
  groupedSlides.push(slides.slice(i, i + chunkSize));
}

const extendedGroups = [
  groupedSlides[groupedSlides.length - 1],
  ...groupedSlides,
  groupedSlides[0],
];

export default function NewsSlider() {
  const [current, setCurrent] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const likedContext = useContext(UserContext)
  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(likedContext.liked));
  }, [likedContext.liked])
  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(extendedGroups.length - 2);
      }, 300);
    } else if (current === extendedGroups.length - 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(1);
      }, 300);
    } else {
      setTransitionEnabled(true);
    }
  }, [current]);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);

  const goToSlide = (index) => {
    setCurrent(index + 1);
  };

  return (
    <div className="overflow-hidden max-w-5xl mx-auto relative h-[400px] mt-[40px]">
      <div
        className="flex"
        style={{
          width: `${extendedGroups.length * 100}%`,
          transform: `translateX(-${current * (100 / extendedGroups.length)}%)`,
          transition: transitionEnabled ? "transform 0.3s ease" : "none",
        }}
      >
        {extendedGroups.map((group, idx) => (
          <div
            key={idx}
            className="flex justify-between px-2"
            style={{ width: `${100 / extendedGroups.length}%` }}
          >
            {group.map((slide,i) => (
              <div
                key={slide.id}
                className="relative flex flex-col items-center p-2 mx-1 w-[30%]  shadow-md"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src={slide.image}
                    alt={`slide`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-[10px] right-[10px] p-[5px] bg-gray-100 rounded-[50px] opacity-[0.5]">
                    <i className="fa-regular fa-heart" style={{color: (likedContext.liked).includes(slide.id) ? 'red' : 'black'}} onClick={(e) => {
                      if(likedContext.liked.includes(slide.id)){
                        likedContext.liked.forEach((el, i2) => {
                          if(el == slide.id){
                            likedContext.liked.splice(i2, 1)
                            console.log(1);
                          }
                        })
                        likedContext.setLiked(() => [...(likedContext.liked)])
                      } else{
                        likedContext.setLiked([...(likedContext.liked), slide.id])
                      }
                    }}></i>
                  </div>
                </div>

                <p className="mt-2 text-sm text-gray-500">{slide.date}</p>


                <p className="text-center text-gray-800 text-sm font-medium">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-20">
        {groupedSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border-2 ${
              current === idx + 1
                ? "bg-blue-600 border-blue-600"
                : "bg-white border-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [liked, setLiked] = useState((JSON.parse(localStorage.getItem('liked'))));

  return (
    <UserContext.Provider value={{ liked, setLiked }}>
      {children}
    </UserContext.Provider>
  );
};
