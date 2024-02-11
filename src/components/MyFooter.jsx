import React from "react";
import { Footer } from "flowbite-react";
import logo from "/assets/Logos/unicorn.png";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsTwitterX,
  BsWhatsapp,
  BsX,
} from "react-icons/bs";

function MyFooter() {
  return (
    <Footer container className="bg-footerBg footer">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#fcfeff]">Unicorn Contractors</span>
            </a>
            <div>
              <p className="mb-1 text-[#fcfeff]">
                Copyright © 2024 Unicorn ltd.
              </p>
              <p className="text-[#fcfeff]">All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link
                  target="blank"
                  href="https://www.instagram.com/unicorncontractors/"
                  className="text-[#fcfeff]"
                >
                  Instagram
                </Footer.Link>
                <Footer.Link
                  target="blank"
                  href="https://www.linkedin.com/company/unicorncontractors/"
                  className="text-[#fcfeff]"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link
                  target="blank"
                  href="https://wa.me/message/VAFA6OLLW6HSE1"
                  className="text-[#fcfeff]"
                >
                  WhatsApp
                </Footer.Link>
                <Footer.Link target="blank" href="#" className="text-[#fcfeff]">
                  X (Twitter)
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link target="blank" href="#" className="text-[#fcfeff]">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link target="blank" href="#" className="text-[#fcfeff]">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Unicorn Contractors™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              target="blank"
              href="https://wa.me/message/VAFA6OLLW6HSE1"
              icon={BsWhatsapp}
            />
            <Footer.Icon
              target="blank"
              href="https://www.linkedin.com/company/unicorncontractors/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              target="blank"
              href="https://www.instagram.com/unicorncontractors/"
              icon={BsInstagram}
            />
            <Footer.Icon href="#" icon={BsTwitterX} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
