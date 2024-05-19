import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
     
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Take{" "}
          <span className="text-purple">
            Your OutSide Digital to the next Level
          </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {" "}
          Eu id amet ad laboris proident eu irure voluptate ut. Voluptate
          cupidatat labore voluptate do est dolor ad aliquip proident nisi ea
          adipisicing. Commodo laborum sit cillum ex tempor et sunt aliquip.
          Deserunt dolor nisi esse ipsum laborum nulla mollit.
        </p>
        <a href="mailto:marchena.isma@gmail.com">
          <MagicButton
            title="Lets get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          CopyRight © 2024 Yzma
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img }) => (
            <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 border border-black-300">
              <img src={img} alt={id.toString()} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
