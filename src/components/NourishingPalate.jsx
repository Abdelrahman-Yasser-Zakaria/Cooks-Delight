import React, { useRef } from "react";
import NourishingCard from "./NourishingCard";
import { nourishingPalateData } from "../data/tipsData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const NourishingPalate = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 py-12 bg-brand-blue rounded-[50px] mx-6 mb-12">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between mb-12 px-4">
          <h2 className="text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight">
            Nourishing Every Palate
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-brand-dark/20 rounded-full hover:bg-white transition-colors text-brand-dark/40 hover:text-brand-dark"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-brand-dark rounded-full bg-brand-dark text-white hover:bg-black transition-colors shadow-lg"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 md:flex md:flex-row md:overflow-x-auto md:no-scrollbar md:scroll-smooth gap-8 px-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {nourishingPalateData.map((item) => (
            <div key={item.id} className="w-full md:min-w-[400px] lg:min-w-[450px]">
              <NourishingCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NourishingPalate;
