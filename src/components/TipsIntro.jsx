import React from "react";
import knifeImg from "../assets/icons/Knife.svg";
import tongsImg from "../assets/icons/Tongs.svg";
import scaleImg from "../assets/icons/Scale.svg";

const TipsIntro = () => {
  const highlights = [
    {
      title: "Quality Tools",
      description: "Invest in high-quality knives, cutting boards, and cookware.",
      icon: knifeImg,
    },
    {
      title: "Essential Utensils",
      description: "Have a variety of utensils, including spatulas, tongs, and ladles.",
      icon: tongsImg,
    },
    {
      title: "Measuring Accuracy",
      description: "Use measuring cups and spoons for precise ingredient quantities.",
      icon: scaleImg,
    },
  ];

  return (
    <section className="px-6 py-16 bg-[#F2EDE4]">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <h1 className="text-6xl lg:text-7xl font-black text-brand-dark uppercase tracking-tight leading-[0.9] max-w-xl">
            Our Essential <br /> Cooking Tips
          </h1>
          <p className="text-brand-dark/70 text-lg lg:text-xl max-w-xl font-medium leading-relaxed">
            Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
          </p>
        </div>

        <div className="border border-brand-dark/10 rounded-[40px] p-10 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-brand-red font-black uppercase tracking-widest text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-dark/70 text-[15px] font-medium leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsIntro;
