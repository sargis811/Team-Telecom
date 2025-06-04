import { useState } from "react";

const rotatingSlides = [
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/17479089596742.png'},
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/17479089597009.png'},
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/1747908959726.png'},
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/17479089597517.png'},
    {url: 'https://www.telecomarmenia.am/images/team_apps/1/17479089597727.png'}
]

const visibleCount = 4;

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
        <div className="w-[900px] relative flex flex-col">
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="z-20 bg-white rounded-full shadow p-3 text-3xl hover:bg-gray-100 transition"
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <div className="flex items-center gap-4">
            <div className="flex flex-1 gap-6 overflow-hidden">
              {visibleSlides.map((slide) => (
                <div key={slide.url} className="flex-1 bg-gray-200 p-6 rounded-xl w-[300px] h-[400px] shadow-lg flex flex-col gap-4 transform transition-transform duration-500 ease-in-out hover:scale-[1.03]">
                    <img className="w-[100%] h-[100%]" src={slide.url}/>
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
        </div>
      </div>
  );
}
