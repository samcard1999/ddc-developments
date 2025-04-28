import React from "react";
import send_button from "../assets/svg/send_button.svg";

const Footer = () => {
  return (
    <footer className="w-full h-auto relative border-t border-dark_blue">
      <div className="flex flex-col h-auto w-full">
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
            <a href="https://maps.app.goo.gl/5MWU4AVmGP8TjggM8">
              3470 NW 82nd Ave, Suite 790
            </a>
          </div>
          <div className="w-full">
            <h3>Hours</h3>
            <a>Monday-Friday 9:00am - 6:00pm</a>
          </div>
        </div>
        <div className="form_wrapper border-b box-content border-dark_blue px-8 py-1 flex flex-col gap-2">
          <h1 className="font-bold">Get in touch</h1>
          <h2 className="font-bold text-xl">Contact us today</h2>
          <p className="text-lg">
            Reach out to us for all your construction and real estate
            development queries. Let's build a successful partnership together.
          </p>
          <div className="gap-1 flex flex-col">
            <h3>Name</h3>
            <input placeholder="Jane Smith"></input>
          </div>
          <div className="gap-1 flex flex-col">
            <h3>Email address</h3>
            <input placeholder="youremail@example.com"></input>
          </div>
          <div className="gap-1 flex flex-col">
            <h3>Phone number</h3>
            <input placeholder="305-555-1234"></input>
          </div>
          <div className="gap-1 flex flex-col">
            <h3>Message</h3>
            <div className="flex flex-col items-end justify-normal">
              <textarea
                className="w-full"
                placeholder="305-555-1234"
              ></textarea>
              <img
                className="w-auto h-10 mr-[-1rem] mt-[-1rem] z-10"
                src={send_button}
                alt="send_button"
              ></img>
            </div>
          </div>
        </div>
        <div className="footer_banner relative w-full px-4 py-2 bottom-0 flex justify-between items-center">
          <a href="/">
            2025 All Rigth <br /> Reserved
          </a>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
