import React from "react";

const HireMeSection = () => {
  const handleHireClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:-translate-y-1 text-white py-16 px-4 sm:px-6 md:px-20 rounded-xl h-auto sm:h-[100px] flex items-center justify-center mx-5">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Text Section */}
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <h2 className="mb-2 text-xl font-bold md:text-3xl">
            Want to work with me?
          </h2>
          <p className="text-lg text-gray-300">
            Always feel free to contact & hire me
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleHireClick}
          className="bg-white text-[#0b2651] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default HireMeSection;
