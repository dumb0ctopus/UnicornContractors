import React from "react";

function Blog() {
  const blogs = [
    {
      id: 1,
      title:
        "Our skilled artisans create masterpieces in carpentry, plumbing, electricals, interior decoration, tiling, painting, and more, ensuring your space exudes elegance and functionality.",
      image: "/assets/Images/blogThree.jpg",
    },
    {
      id: 1,
      title:
        "We offer personalized consultations. We don't just hear you, we listen, we understand, and we ensure your vision becomes a reality.",
      image: "/assets/Images/blogOne.jpg",
    },
    {
      id: 1,
      title:
        "Elevate your business operations with our Facility Management Services. Proactive maintenance, building management, and sustainability integration – we've got you covered.",
      image: "/assets/Images/blogFour.jpg",
    },
  ];
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 bg-[#1e1f4e]"
      id="blog"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-white font-semibold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-md text-white mb-8 md:w-3/4 mx-auto">
          From concept to completion, our services cover every detail, offering
          you a hassle-free, one-stop solution.
        </p>
      </div>

      {/* blogs */}
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mx-auto relative mb-12 cursor-pointer rounded-2xl"
          >
            <img
              src={blog.image}
              alt=""
              className="rounded-2xl hover:scale-95 transition-all duration-300"
            />
            <div
              className="text-center px-2 py-8 bg-[#D3D3D3] shadow-lg rounded-md md:w-3/4 mx-auto
             left-0 right-0 absolute -bottom-12"
            >
              <h3 className="mb-3 text-neutralDGrey font-semibold p-0 h-20 ">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
