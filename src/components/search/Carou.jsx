// import { Carousel } from "@material-tailwind/react";
import React from 'react';
import Slider from "react-slick";

export default function CarouselCustomNavigation() {
  const results = [
    { id:"0", name :"Fendy Dress", path: "../../../assets/imgs/dress-1.png", },
    { id:"1", name :"Versace Dress", path: "../../../assets/imgs/dress-2.png", },
    { id:"2", name :"Prada Dress", path: "../../../assets/imgs/dress-3.png", },
    { id:"3", name :"Balenciaga Dress", path: "../../../assets/imgs/dress-4.png", },
  ];

  return (
    <Carousel
      className="rounded-xl" autoplay="True" autoplayDelay="500" loop="True" items={results} nav={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute top-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {
            results.map((index) => (
              <span
                key={index}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))
          }
        </div>
      )}>
      {results.map((result, index)=>(
        <div class="w-full h-full justify-stretch" key={index}>
            <div class="flex flex-col w-full justify-center drop-shadow-sm">
              <div class="flex justify-center w-15 h-[242px] bg-[#CDCDCB] rounded-t-md">
                <img
                  src={result.path}
                  class="w-[15.25rem] h-[15.25rem] mt-[-2px] object-none rounded-t-xl"
                />
              </div>
              <div class="flex-col flex bg-[#FFF] gap-2 p-2 rounded-b-md">
                <div class="flex justify-between">
                  <h3 class="font-semibold">{result.name}</h3>
                  <div class="flex justify-evenly items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.34037 1.09257L4.79162 4.42257L1.09412 4.89882C1.02259 4.90776 0.955146 4.93713 0.899875 4.98341C0.844603 5.02969 0.803843 5.09092 0.782476 5.15977C0.761109 5.22862 0.760039 5.30217 0.779397 5.37162C0.798754 5.44106 0.837717 5.50345 0.89162 5.55132L3.62912 8.01507L2.89037 11.7088C2.87645 11.7794 2.88316 11.8526 2.90968 11.9195C2.9362 11.9864 2.98142 12.0443 3.03994 12.0862C3.09846 12.1281 3.16781 12.1523 3.2397 12.1559C3.31159 12.1594 3.38299 12.1422 3.44537 12.1063L6.67787 10.2313L9.91412 12.1063C9.9765 12.1422 10.0479 12.1594 10.1198 12.1559C10.1917 12.1523 10.261 12.1281 10.3195 12.0862C10.3781 12.0443 10.4233 11.9864 10.4498 11.9195C10.4763 11.8526 10.483 11.7794 10.4691 11.7088L9.73037 8.01507L12.4679 5.55132C12.5207 5.503 12.5586 5.44057 12.5771 5.37141C12.5955 5.30224 12.5938 5.22924 12.5721 5.16101C12.5504 5.09279 12.5097 5.0322 12.4547 4.9864C12.3996 4.94061 12.3326 4.91152 12.2616 4.90257L8.56412 4.42257L7.01912 1.09257C6.98929 1.0271 6.94126 0.97159 6.88075 0.932667C6.82024 0.893743 6.74982 0.873047 6.67787 0.873047C6.60592 0.873047 6.5355 0.893743 6.47499 0.932667C6.41448 0.97159 6.36645 1.0271 6.33662 1.09257H6.34037Z"
                        fill="#FEB121"></path>
                    </svg>
                    <h3 class="font-medium">4.9</h3>
                    <p class="text-slate-500">(104)</p>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex gap-1 items-center text-sm leading-[1.1875rem]">
                    <p class="font-semibold">$56.00</p>
                    <p class="line-through text-[#647793]">$130.00</p>
                  </div>
                  <button class="search-button-shadow gradient-primary-bg rounded-full text-white py-2 px-6 flex items-center gap-4 leading-[1.375rem] tracking-[-0.011rem]">
                    Details
                  </button>
                </div>
              </div>
            </div>
        </div>
      ))}
    </Carousel>
  );


} 

