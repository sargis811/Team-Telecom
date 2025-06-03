
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function ImgSliderMain({slides}) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const goToSlide = (index) => {
    setCurrent(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">

      <div className="relative w-full h-full translate-x-[100px]">
        {slides.map((slide, index) => {
          const showText = slide.title || slide.description || slide.button;

          return (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center px-6 py-6 bg-white ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {showText ? (
                <div className="flex w-full h-full ">
                  <div className="w-1/2 flex flex-col justify-center space-y-4 p-6">
                    {slide.title && (
                      <h2 className="text-4xl font-bold text-gray-800">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-lg text-gray-600">
                        <pre><p>{slide.description}</p></pre>
                      </p>
                    )}
                    {slide.button && (
                      <button
                        className={`mt-4 px-6 w-[200px] py-2 rounded-md font-medium transition ${slide.button.color} ${slide.button.bgColor}`}
                      >
                        {slide.button.text}
                      </button>
                    )}
                  </div>

                  <div
                    className="w-[400px] h-[450px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                </div>
              ) : (
                <div
                  className="w-[400px] h-[400px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full z-20 translate-x-[50px]"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full z-20"
      >
        <ChevronRight size={32} />
      </button>

    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
    {slides.map((el, idx) => (
        <button
        key={idx}
        onClick={() => goToSlide(idx)}
        className={`w-3 h-3 rounded-full border border-gray-300 ${
            idx === current ? "bg-blue-600 border-blue-600" : "bg-white/40"
        }`}
        />
    ))}
    </div>

    </div>
  );
}
