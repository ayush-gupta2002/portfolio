import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Socials() {
  const links = [
    {
      id: 1,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ayushgupta2002/",
      icon: <FaLinkedin size={30}></FaLinkedin>,
    },
    {
      id: 2,
      name: "Github",
      link: "https://github.com/ayush-gupta2002",
      icon: <FaGithub size={30}></FaGithub>,
    },
    {
      id: 3,
      name: "Mail",
      link: "mailto:ayush.gupta2002@gmail.com",
      icon: <HiOutlineMail size={30}></HiOutlineMail>,
    },
    {
      id: 4,
      name: "Resume",
      link: "https://drive.google.com/file/d/18M0_tvhfrbpNIiwhFa8OadA2ziIj52JG/view",
      icon: <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>,
    },
    {
      id: 5,
      name: "Leetcode",
      link: "https://leetcode.com/user9281Qf/",
      icon: <SiLeetcode size={30}></SiLeetcode>,
    },
    {
      id: 6,
      name: "CodeChef",
      link: "https://www.codechef.com/users/ayushgupta2002",
      icon: <SiCodechef size={30}></SiCodechef>,
    },
  ];
  const renderedLinks = links.map((l) => {
    return (
      <a
        key={l.id}
        className="shadow-md hover:scale-105 duration-500 cursor-pointer py-4 flex gap-2 items-center w-fit"
        href={l.link}
      >
        <div className="my-auto" size={80}>
          {l.icon}
        </div>
        <p className="my-auto font-semibold text-xl md:text-3xl">{l.name}</p>
      </a>
    );
  });
  return (
    <div
      name="socials"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 w-fit inline">
            Socials
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {renderedLinks}
        </div>
      </div>
    </div>
  );
}

export default Socials;
