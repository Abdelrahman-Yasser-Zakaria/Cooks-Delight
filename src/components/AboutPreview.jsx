import { Link } from "react-router-dom";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about4 from "../assets/images/about4.png";

const AboutPreview = () => {
  return (
    <section className="px-6 py-12 bg-[#F2EDE4] overflow-hidden font-sans">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT COLUMN: Text + Bottom Steaming Pan Image */}
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Top Left: Text Content */}
            <div className="flex flex-col items-start justify-center pr-4">
              <span className="bg-[#FF7D61] text-white text-[12px] font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-6">
                About Us
              </span>
              <h2 className="text-5xl lg:text-6xl font-extrabold text-[#2D2D2D] uppercase leading-[1] mb-6">
                Our Culinary <br /> Chronicle
              </h2>
              <p className="text-[#2D2D2D]/70 text-lg mb-8 leading-relaxed">
                Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
              </p>
              <Link
                to="/about"
                className="border-[1.5px] border-[#2D2D2D] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-all uppercase text-[14px]"
              >
                Read More
              </Link>
            </div>

            {/* Top Middle: Searing Meat (about1) */}
            <div className="rounded-[30px] overflow-hidden h-[300px] lg:h-auto">
              <img
                src={about1}
                alt="Searing meat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Wide: Steaming Pan (about4) */}
            <div className="lg:col-span-2 rounded-[30px] overflow-hidden h-[400px]">
              <img
                src={about4}
                alt="Steaming pan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Tall Chef Image (about2) */}
          <div className="lg:col-span-4 h-full">
            <div className="rounded-[30px] overflow-hidden h-full min-h-[500px]">
              <img
                src={about2}
                alt="Chefs in kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;