import { useState } from "react";

const fixedSlide = {
  id: 0,
  title: `SMART
BUSINESS`,
  intro: "Կարգավորեք ձեր փաթեթը",
  lines: [],
  button: "Միանալ",
};

const rotatingSlides = [
  {
    id: 1,
    title: `PRO
3700`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "40 ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "1,500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "60 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "1,500 SMS" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 2,
    title: `PRO
5200`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "Անսահմ․ ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "3,500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "110 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "3,500 SMS" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 3,
    title: `PRO
8200`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "Անսահմ․ ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "6,000 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "110 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "6,000 SMS" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 4,
    title: `PRO
1900`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "9 ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "40 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "500 SMS" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 5,
    title: `Բիզնես
3000`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/56x56.png", text: "5,000 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "250 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "250 SMS" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "6 GB" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 6,
    title: `Բիզնես
5000`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/56x56.png", text: "10,000 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "350 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "350 SMS" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "10 GB" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 7,
    title: `Բիզնես
7000`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/1651070448779/56x56.png", text: "10,000 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "500 SMS" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "20 GB" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 8,
    title: `PRO
3700`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "40 ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "1,500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "60 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "1,500 SMS" },
    ],
    button: "Մանրամասն",
  },
  {
    id: 9,
    title: `PRO
5200`,
    intro: "",
    lines: [
      { icon: "https://www.telecomarmenia.am/files/icons/1/16509740618025/56x56.png", text: "Անսահմ․ ԳԲ" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708980018/56x56.png", text: "3,500 րոպե" },
      { icon: "https://www.telecomarmenia.am/files/icons/1/16510708352906/56x56.png", text: "110 ալիք" },
      { icon: "	https://www.telecomarmenia.am/files/icons/1/16510702991504/56x56.png", text: "3,500 SMS" },
    ],
    button: "Մանրամասն",
  },
];

const visibleCount = 3;

export default function MainSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const totalSlides = rotatingSlides.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleCount; i++) {
      slides.push(rotatingSlides[(startIndex + i) % totalSlides]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="flex flex-col items-center gap-6 p-6 max-w-7xl mx-auto">
      <div className="flex w-full gap-8">
        <div className="w-[250px] p-6 rounded-xl shadow-lg flex flex-col gap-4 h-[400px] bg-sky-900 bg-[url(https://www.telecomarmenia.am/img/settings.png)]">
          <h2 className="text-xl font-bold text-center text-white"><pre>{fixedSlide.title}</pre></h2>
          <p className="whitespace-pre-line text-white">{fixedSlide.intro}</p>
          <div className="flex flex-col gap-2">
            {fixedSlide.lines.map((line, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-b border-gray-300 pb-2"
              >
                <img
                  src={line.icon}
                  alt={`icon-fixed-${idx}`}
                  className="w-[50px] h-[50px] rounded-md object-cover"
                />
                <span className="text-gray-900">{line.text}</span>
              </div>
            ))}
          </div>
          <button className="bg-red-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg mt-auto">
            {fixedSlide.button}
          </button>
        </div>
        <div className="w-3/4 relative flex flex-col">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="z-20 bg-white rounded-full shadow p-3 text-3xl hover:bg-gray-100 transition"
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <div className="flex flex-1 gap-6 overflow-hidden">
              {visibleSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-1 bg-gray-200 p-6 rounded-xl w-[300px] h-[400px] shadow-lg flex flex-col gap-4 transform transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                >
                  <h2 className="text-xl font-semibold text-center"><pre>{slide.title}</pre></h2>
                  <div className="flex flex-col gap-3">
                    {slide.lines.map((line, id) => (
                      <div
                        key={id}
                        className="flex items-center gap-3 border-b border-gray-300 pb-2 h-[50px]"
                      >
                        <img
                          src={line.icon}
                          alt={`icon-${id}`}
                          className="w-[20px] h-[20px] object-cover rounded-md"
                        />
                        <span className="text-gray-900">{line.text}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-auto border border-solid border-red-800 text-red-800 py-2 px-4 rounded-lg">
                    {slide.button}
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="z-20 bg-white rounded-full shadow p-3 text-3xl hover:bg-gray-100 transition"
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            {rotatingSlides.map((elx, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                className={`w-4 h-4 rounded-full ${
                  idx === startIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
