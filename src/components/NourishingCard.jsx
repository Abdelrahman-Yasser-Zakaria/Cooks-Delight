import React from "react";

const NourishingCard = ({ title, description, image, time, date }) => {
  return (
    <div className="relative h-[500px] rounded-[40px] overflow-hidden group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-end text-left">
        <h3 className="text-3xl font-black text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed max-w-xs">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            {time} - {date}
          </span>
          <button className="border border-white text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full hover:bg-white hover:text-brand-dark transition-all active:scale-95">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NourishingCard;
