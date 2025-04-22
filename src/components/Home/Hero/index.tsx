import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    // Hero Section
    <section className="xl-max-w-[1500px] w-full overflow-hidden pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5">
      <div className="flex flex-wrap justify-between mb-[30px] px-[20px]">
        {/* Shop By Department */}
        <div className="xl:max-w-[20%] w-full flex flex-col text-head-4 text-app_text bg-white rounded-md p-[15px] border-[2px] border-orange">
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Office<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Technology<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Furniture<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Janitorial & Sanitation<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Industrial<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Food Service<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            School Supplies<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Oven<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Ink & Toner<span>i</span>
          </button>
          <button className="flex items-center justify-between font-medium py-[10px] border-b-[1px] border-app_border hover:text-orange">
            Desk Accessories<span>i</span>
          </button>
        </div>

        {/* Hero Slider */}
        <div className="xl:max-w-[79%] w-full rounded-[10px] overflow-hidden">
          {/* <!-- bg shapes --> */}
          <HeroCarousel />
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;

// bg-[#E5EAF4]
