import React from "react";

function Services() {
  return (
    <div
      className="lg:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-[#1e1f4e]"
      id="services"
    >
      <div className="text-center my-8">
        <h2 className="text-3xl text-[#fcfeff] font-semibold mb-2">
          Our Services
        </h2>
        <div className="mt-10 md:w-1/2 mx-auto text-center">
          <h2 className="text-3xl text-[#fcfeff] font-semibold mb-3">
            Managing the maintenance of your buildings
          </h2>
          <p className="text-[#fcfeff]">Who are we suitable for?</p>
        </div>
        <br />

        {/* cards */}

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mx-auto mt-auto mb-auto gap-12">
          {/* office cards */}
          <div>
            <div className=" transition-all duration-300 hover:-translate-y-5">
              <div
                className=" h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer relative flex items-center justify-center  bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://media.istockphoto.com/id/1404294992/photo/generic-small-office-buildings-enterprise.jpg?s=612x612&w=0&k=20&c=i3DS7naGl13R9YOYdf-mwXiUjcd_lin48ttHpBHui-4=)",
                }}
              ></div>
              <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
                <h4 className="text-3xl font-bold text-black mb-2 px-2">
                  Organizations
                </h4>
                <p className="text-black">
                  Streamline and organize your office environment with our
                  comprehensive maintenance and management services.
                </p>
              </div>
            </div>
          </div>

          {/* home cards */}
          <div className=" transition-all duration-300 hover:-translate-y-5 ">
            <div
              className="h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer   flex items-center justify-center  bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://i.all3dp.com/workers/images/fit=scale-down,w=1200,gravity=0.5x0.5,format=auto/wp-content/uploads/2019/10/26143959/Mighty-building.jpg)",
              }}
            ></div>
            <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
              <h4 className="text-3xl font-bold text-black mb-2 px-2">
                Apartments
              </h4>
              <p className="text-black">
                Let us transform your living spaces into personalized havens
                with our skilled craftsmanship, repair, and renovation
                expertise.
              </p>
            </div>
          </div>

          {/* church cards */}
          <div>
            <div className=" transition-all duration-300 hover:-translate-y-5 ">
              <div
                className=" h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer relative  flex items-center justify-center  bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1601138995200-b8ce7d1e3146?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2h1cmNoJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D)",
                }}
              ></div>
              <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
                <h4 className="text-3xl font-bold text-black mb-2 px-2">
                  Churches
                </h4>
                <p className="text-black">
                  We can enhance the beauty and functionality of your church
                  building and facilities with our services, tailored to your
                  unique needs.
                </p>
              </div>
            </div>
          </div>

          {/* hospital cards */}
          <div className=" transition-all duration-300 hover:-translate-y-5 ">
            <div
              className=" height weight h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer   flex items-center justify-center  bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://www.imaginationshaper.com/product_images/hospital-architecture-exterior-design.jpg)",
              }}
            ></div>
            <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
              <h4 className="text-3xl font-bold text-black mb-2 px-2">
                Hospitals
              </h4>
              <p className="text-black">
                Ensure the optimal operation of healthcare space with our
                proactive maintenance and facility management.
              </p>
            </div>
          </div>
          {/* school cards */}
          <div className=" transition-all duration-300 hover:-translate-y-5 ">
            <div
              className="h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer   flex items-center justify-center  bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_640.jpg)",
              }}
            ></div>
            <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
              <h4 className="text-3xl font-bold text-black mb-2 px-2">
                Schools
              </h4>
              <p className="text-black">
                Create conducive learning environments with our services,
                covering everything from repairs to maintenance, renovation, and
                procurement.
              </p>
            </div>
          </div>
          {/* restaurant cards */}
          <div className=" transition-all duration-300 hover:-translate-y-5 ">
            <div
              className="h-[250px] px-4 py-8 text-center lg:w-[300px] md:w-[500px] mx-auto md:h-80 rounded-md shadow cursor-pointer   flex items-center justify-center  bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=)",
              }}
            ></div>
            <div className="lg:w-[300px] md:w-[500px] mx-auto bg-[#D3D3D3] rounded-md p-3 h-44">
              <h4 className="text-3xl font-bold text-black mb-2 px-2">
                Restaurants
              </h4>
              <p className="text-black">
                Elevate the aesthetics and functionality of restaurants, bars,
                clubs, etc ensuring a pleasant experience for your customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
