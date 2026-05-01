import React, { useRef } from "react";
import TipCard from "./TipCard";
import { masteringBasicsData } from "../data/tipsData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const MasteringBasics = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 py-12 bg-[#F2EDE4] max-w-8xl mx-auto">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tight">
          Mastering the Basics
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 border border-gray-300 rounded-full hover:bg-white transition-colors text-gray-400 hover:text-brand-dark"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 border border-brand-dark rounded-full bg-brand-dark text-white hover:bg-black transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:flex md:flex-row md:overflow-x-auto md:no-scrollbar md:scroll-smooth gap-8 px-2 pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {masteringBasicsData.map((tip) => (
          <div key={tip.id} className="w-full md:min-w-[400px] lg:min-w-[450px]">
            <TipCard {...tip} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasteringBasics;
