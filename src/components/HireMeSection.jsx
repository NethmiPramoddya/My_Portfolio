import React from "react";

const HireMeSection = () => {
  const handleHireClick = () => {
    // Find the contact section and scroll to it smoothly
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:-translate-y-1 text-white py-16 mx-20 rounded-xl h-[100px] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
        {/* Text Section */}
        <div className="mb-6 text-center md:text-left md:mb-0">
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
