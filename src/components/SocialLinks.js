import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
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
  ];
  const renderedLinks = links.map((l) => {
    return (
      <li
        key={l.id}
        className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md cursor-pointer duration-300 hover:ml-[-10px]"
      >
        <a
          href={l.link}
          className="flex justify-between items-center w-full text-white"
        >
          <>
            {l.name} {l.icon}
          </>
        </a>
      </li>
    );
  });
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>{renderedLinks}</ul>
    </div>
  );
}

export default SocialLinks;
