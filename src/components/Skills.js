import React from "react";
import html from "../assets/html.png";
import js from "../assets/js.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

function Skills() {
  const techs = [
    { id: 1, name: "HTML", icon: html, style: "shadow-orange-500" },
    { id: 2, name: "CSS", icon: css, style: "shadow-blue-500" },
    { id: 3, name: "Javascript", icon: js, style: "shadow-yellow-500" },
    { id: 4, name: "ReactJS", icon: react, style: "shadow-sky-400" },
    { id: 5, name: "Tailwind", icon: tailwind, style: "shadow-blue-400" },
    { id: 6, name: "Github", icon: github, style: "shadow-gray-500" },
  ];

  const renderedTechs = techs.map((t) => {
    return (
      <div
        key={t.id}
        className={
          "shadow-md hover:scale-105 duration-500 cursor-pointer py-4 " +
          t.style
        }
      >
        <img src={t.icon} alt="html" className="w-20 mx-auto"></img>
        <p className="mt-4">{t.name}</p>
      </div>
    );
  });

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 w-fit inline">
            Skills
          </p>
          <p className="py-6">
            There are the technologies that I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {renderedTechs}
        </div>
      </div>
    </div>
  );
}

export default Skills;
