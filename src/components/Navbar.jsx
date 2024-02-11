import React, { useEffect, useState } from "react";
import logo from "/assets/Logos/unicorn.png";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXmark, FaBars } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // nav items array

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Blog", path: "blog" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <div className=" bg-headerBg fixed top-0 left-0 right-0 z-50">
      <header className="w-full">
        <nav
          className={`py-7 lg:px-14 px-4 ${
            isSticky
              ? "sticky top-0 left-0 right-0 border-b bg-headerBg duration-300"
              : ""
          }`}
        >
          <div className="flex justify-between items-center text-base gap-6">
            <div className="flex w-[100%] p-3 pt-0 pb-0 h-[50%] justify-between border-red-600">
              <a href="" className=" font-semibold flex items-center space-x-3">
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />
                <span className="text-[#4d4d4e] text-[29px]">
                  Unicorn Contractors
                </span>
              </a>

              {/* nav items for large devices */}
              <ul className="md:flex space-x-11 hidden">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={path}
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block text-[#767676] lg:text-lg md:text-[13px] hover:text-brandPrimary first:font-medium transition-transform transform hover:scale-105 cursor-pointer"
                  >
                    {link}
                  </Link>
                ))}
              </ul>

              {/* nav items for large devices ___ social media buttons*/}
              <div className="space-x-2 hidden xl:flex items-center">
                <a
                  target="blank"
                  href="https://wa.me/message/VAFA6OLLW6HSE1"
                  className="hidden xl:flex items-center text-3xl text-headerTxt"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/company/unicorncontractors/"
                  target="blank"
                  className="hidden xl:flex items-center text-3xl text-headerTxt"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/unicorncontractors/"
                  target="blank"
                  className="hidden xl:flex items-center text-3xl text-headerTxt"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="hidden xl:flex items-center text-3xl text-headerTxt"
                >
                  <FaXTwitter />
                </a>
              </div>

              {/* menu btn for mobile devices */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-neutralDGrey focus:outline-none focus:text-gray-500"
                >
                  {isMenuOpen ? (
                    <FaXmark className="h-9 w-9 text-brandPrimary" />
                  ) : (
                    <FaBars className="h-9 w-9 text-brandPrimary" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* nav items for mobile devices */}
          <div
            className={`space-y-4 px-4 mt-[90px] py-7 bg-headerBg cursor-pointer ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-lg text-[#767676] hover:text-brandPrimary first:font-medium text-center transition-transform transform hover:scale-105"
                onClick={closeMenu}
              >
                {link}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
