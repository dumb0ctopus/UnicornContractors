import React from "react";
import { Carousel } from "flowbite-react";

function Home() {
  return (
    <div className="bg-[#b4d5db] mediumScreen" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen min-w-full">
        <Carousel className="w-full">
          <div className="my-20 lg:my-8 py-1 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 overflow-hidden leading-snug">
            <div className="w-11/12 h-auto">
              <img
                className="imgMdScreen"
                src="\assets\Images\seven.jpg"
                alt=""
              />
            </div>
            <div className="md:w-11/12 md:mb-12 text-center mediumScreenText">
              <h1 className="text-2xl font-semibold mb-4 text-neutralDGrey md:w-9/4 leading-snug">
                Crafting innovation and creativity <br />
                <span className="text-brandPrimary ">
                  to deliver excellence to our clients.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 smPadding">
                Dedicated to delivering unparalleled maintenance and management
                services.
              </p>
              <div className="sScreenButt">
                <a href="#contact">
                  <button className="btn-primary mb-11">Register</button>
                </a>
              </div>
            </div>
          </div>
          <div className="my-20 lg:my-8 py-1 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 overflow-hidden leading-snug">
            <div className=" w-11/12 h-auto">
              <img
                className="imgMdScreen"
                src="\assets\Images\six.jpg"
                alt=""
              />
            </div>
            <div className="md:w-11/12 md:mb-12 text-center">
              <h1 className="text-2xl font-semibold mb-4 text-neutralDGrey md:w-9/4 leading-snug">
                Proactive building management <br />
                <span className="text-brandPrimary ">
                  we have your facilities covered.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 smPadding">
                Dedicated to delivering unparalleled maintenance and management
                services
              </p>
              <div className="sScreenButt">
                <a href="#contact">
                  <button className="btn-primary mb-11">Register</button>
                </a>
              </div>
            </div>
          </div>
          <div className="my-20 lg:my-8 py-1 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 overflow-hidden leading-snug">
            <div className="w-11/12 h-auto ">
              <img
                className="imgMdScreen"
                src="\assets\Images\eight.jpg"
                alt=""
              />
            </div>
            <div className="md:w-11/12 md:mb-12 text-center">
              <h1 className="text-2xl font-semibold mb-4 text-neutralDGrey md:w-9/4 leading-snug">
                Your satisfaction is our canvas <br />
                <span className="text-brandPrimary ">
                  we will paint it with your dreams.
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 smPadding">
                Dedicated to delivering unparalleled maintenance and management
                services
              </p>
              <div className="sScreenButt">
                <a href="#contact">
                  <button className="btn-primary mb-11">Register</button>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
