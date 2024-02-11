import React from "react";

function About() {
  return (
    <div id="about" className="bg-[#b4d5db] pt-16 pb-11">
      {/* about text */}
      <div className="aboutUs">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 text-center">
          About Us
        </h2>
      </div>

      <div className="px-4 lg:px-14 max-w-sc mx-auto my-8 ">
        <div className="lg:w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-3/5  mx-auto aboutHeader">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 lg:w-4/5">
              Welcome to Unicorn Contractors
            </h2>
            <p className="lg:w-3/4 text-md text-neutralDGrey mb-8">
              Here, expertise meets imagination, and every project is a canvas
              for creativity. Established with a vision to redefine maintenance,
              management, and facility solutions, we pride ourselves on being
              the catalyst for transforming spaces into captivating
              environments.
            </p>
            <a href="#contact">
              <button className="btn-primary aboutBtn">Join Us</button>
            </a>
          </div>
          <div className="lg:w-3/5  mx-auto aboutHeaderMobile w-[100%] pl-7 pr-7">
            <div className="flex text-center justify-center">
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 lg:w-4/5">
                Welcome to Unicorn Contractors
              </h2>
            </div>
            <div className="flex text-center justify-center">
              <p className="lg:w-3/4 text-md text-neutralDGrey mb-8">
                Here, expertise meets imagination, and every project is a canvas
                for creativity. Established with a vision to redefine
                maintenance, management, and facility solutions, we pride
                ourselves on being the catalyst for transforming spaces into
                captivating environments.
              </p>
            </div>
            <div className="flex text-center justify-center">
              <a href="#contact">
                <button className="btn-primary aboutBtn">Join Us</button>
              </a>
            </div>
          </div>
          <div className="grid lg:grid-row-3 md:grid-row-2 grid-row-1 md:w-11/12 mx-auto mt-auto gap-12">
            <p className="px-4 py-8 text-center text-white bg-[#1e1f4e] hover:text-black lg:w-[500px] mx-auto md:h-30 rounded-md shadow cursor-pointer  hover:-translate-y-5 hover:border-b-4 hover:bg-[#b4d5db] transition-all duration-300 flex items-center justify-center h-full">
              Founded on the principles of integrity and a commitment to
              excellence, Unicorn Contractors has emerged as a trusted name in
              the industry. Our journey is marked by a passion for our craft and
              an unwavering commitment to client satisfaction.
            </p>
            <p className="px-4 py-8 text-center text-white bg-[#1e1f4e] hover:text-black lg:w-[500px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:bg-[#b4d5db] transition-all duration-300 flex items-center justify-center h-full">
              At Unicorn Contractors, we don't just build spaces; we craft
              dreams into reality. Our team meticulously curates solutions that
              go beyond expectations, creating spaces that inspire and elevate.
            </p>
            <p className="px-4 py-8 text-center text-white bg-[#1e1f4e] hover:text-black lg:w-[500px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:bg-[#b4d5db] transition-all duration-300 flex items-center justify-center h-full">
              We believe in responsible practices. Unicorn Contractors is at the
              forefront of sustainable solutions, integrating eco-friendly
              materials and energy-efficient techniques into our services.
              Discover how we're making a positive impact on the environment.
            </p>
            <p className="px-4 py-8 text-center text-white bg-[#1e1f4e] hover:text-black lg:w-[500px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:bg-[#b4d5db] transition-all duration-300 flex items-center justify-center h-full">
              Experience a new era in facility management with Unicorn
              Contractors. Proactive maintenance, building management, and
              sustainability integration – our Facility Management Services
              redefine operational efficiency.
            </p>
            <p className="px-4 py-8 text-center text-white bg-[#1e1f4e] hover:text-black lg:w-[500px] mx-auto md:h-30 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:bg-[#b4d5db] transition-all duration-300 flex items-center justify-center h-full">
              Explore the success stories of our satisfied clients who have
              witnessed the magic of Unicorn Contractors. Their transformed
              spaces and efficiently managed facilities speak volumes about our
              commitment to quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
