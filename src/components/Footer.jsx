import React from "react";
import send_button from "../assets/svg/send_button.svg";

const Footer = () => {
  return (
    <footer className="w-full h-auto relative border-t border-dark_blue">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row h-auto w-full lg:px-10">
          <div className=" contact_wrapper p-8 flex flex-col justify-start   items-center gap-2 w-full ">
            <div className="w-full">
              <h3>Phone number</h3>
              <a href="tel:305-915-0002" className="text-dark_gray">
                305-915-0002
              </a>
            </div>
            <div className="w-full">
              <h3>E-mail</h3>
              <a href="mailto:danilo@ddcdevelopments.com">
                danilo@ddcdevelopments.com
              </a>
            </div>
            <div className="w-full">
              <h3>Address</h3>
              <a
                href="https://maps.app.goo.gl/5MWU4AVmGP8TjggM8"
                className="text-sm"
              >
                3470 NW 82nd Ave, Suite 790
              </a>
            </div>
            <div className="w-full">
              <h3>Hours</h3>
              <a>Monday-Friday 9:00am - 6:00pm</a>
            </div>
            <div className="w-full">
              <h3>Social Media</h3>
              <a href="https://www.instagram.com/ddc.developments">
                Instagram
                <br />
              </a>
              <a href="https://www.youtube.com/@DDC.Developments">Youtube</a>
            </div>
          </div>
          <div className="flex  items-end pr-4 mb-4 gap-1">
            <div
              id="contact"
              className="form_wrapper box-content pl-8 py-1 flex flex-col gap-2"
            >
              <h1 className="font-bold">Get in touch</h1>
              <h2 className="font-bold text-xl">Contact us today</h2>
              <p className="text-sm">
                Reach out to us for all your construction and real estate
                development queries. Let's build a successful partnership
                together.
              </p>
              <div className="gap-1 flex flex-col lg:w-1/2">
                <h3>Name</h3>
                <input
                  placeholder="Jane Smith"
                  className="placeholder:pl-1 text-sm"
                ></input>
              </div>
              <div className="gap-1 flex flex-col lg:w-1/2">
                <h3>Email address</h3>
                <input
                  placeholder="youremail@example.com"
                  className="placeholder:pl-1 text-sm"
                ></input>
              </div>
              <div className="gap-1 flex flex-col lg:w-1/2">
                <h3>Phone number</h3>
                <input
                  placeholder="305-555-1234"
                  className="placeholder:pl-1 text-sm"
                ></input>
              </div>
              <div className="gap-1 flex flex-col">
                <h3>Message</h3>
                <div className="flex  items-end justify-center">
                  <textarea
                    className="w-full placeholder:pl-1 text-sm resize-none"
                    placeholder="Text a message"
                  ></textarea>
                </div>
              </div>
            </div>
            <img
              className="w-auto h-10 z-10 mb-2 lg:h-7"
              src={send_button}
              alt="send_button"
            ></img>
          </div>
          <div className="lg:hidden border-t border-dark_blue footer_banner relative w-full px-4 py-2 bottom-0 flex justify-between items-center">
            <a href="/">
              2025 All Rigth <br /> Reserved
            </a>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
        <div className="hidden  footer_banner border-t border-dark_blue relative w-full px-4 py-2 bottom-0 lg:flex justify-between items-center">
          <a href="/" className="border-b border-dark_blue">
            2025 All Rigth <br /> Reserved
          </a>
          <a href="/" className="border-b border-dark_blue">
            Terms of Service
          </a>
          <a href="/" className="border-b border-dark_blue">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
