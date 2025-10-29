import React from "react";

const HireMeSection = () => {
  const handleHireClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 pt-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="px-8 py-12 text-white transition-transform duration-300 shadow-xl bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl hover:-translate-y-1">
          <div className="flex flex-col items-center justify-between mx-auto md:flex-row">
            {/* Text Section */}
            <div className="mb-6 text-center md:mb-0 md:text-left">
              <h2 className="mb-2 text-xl font-bold md:text-3xl text-white">
                Want to work with me?
              </h2>
              <p className="text-lg text-gray-200">
                Always feel free to contact & hire me
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleHireClick}
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-2xl shadow-md hover:-translate-y-1 hover:bg-gray-100 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
