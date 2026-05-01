import React from "react";
import { Link } from "react-router-dom";

const TipCard = ({ title, description, image, time, date }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group transition-all hover:shadow-md h-full">
      {/* Image */}
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8 text-left text-brand-dark flex flex-col flex-grow">
        <h3 className="text-2xl font-black mb-4 group-hover:text-brand-red transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-brand-dark/60 text-sm line-clamp-3 mb-8 font-medium leading-relaxed">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/50">
            {time} - {date}
          </span>
          <button className="border border-brand-dark text-brand-dark text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-brand-dark hover:text-white transition-all shadow-sm active:scale-95">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
