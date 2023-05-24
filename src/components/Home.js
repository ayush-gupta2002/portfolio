import React from "react";
import HeroImage from "../assets/heroImage.JPG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white via-black"
    >
      <div className="w-2/3 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-6">
        <div className="flex flex-col justify-center h-fit w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a second year undergraduate student at Delhi Technological
            University and aspire to work as a Software Engineer. I have
            engineered modern web applications using technologies like HTML,
            CSS, Javascript, ReactJS, MongoDB, Express and NodeJS.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-500 cursor-pointer mx-auto md:mx-0 group">
              <Link to="portfolio" smooth duration={500}>
                Portfolio
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight
                  size={25}
                ></MdOutlineKeyboardArrowRight>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my display"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
