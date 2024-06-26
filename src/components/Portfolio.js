import React from "react";
import EcoVoyage from "../assets/EcoVoyage.png";
import DTUBook from "../assets/DTUBook.png";
import fundME from "../assets/fundME.png";
import portfolio from "../assets/portfolio.png";
import Password from "../assets/Password.png";
import Typing from "../assets/typing.png";

function Portfolio() {
  const portfolioLinks = [
    {
      id: 1,
      img: EcoVoyage,
      name: "EcoVoyage",
      demo: "https://eco-voyage.vercel.app",
      code: "https://github.com/ayush-gupta2002/eco-voyage",
    },
    {
      id: 3,
      img: fundME,
      name: "fundME",
      code: "https://github.com/ayush-gupta2002/fundME",
      demo: "https://github.com/ayush-gupta2002/fund-me",
    },
    {
      id: 2,
      img: DTUBook,
      name: "DTUBook",
      demo: "https://youtu.be/nFxJmB5o24U",
      code: "https://github.com/ayush-gupta2002/DTUBook",
    },
    {
      id: 3,
      img: Password,
      name: "Password Generator",
      demo: "https://password-green.vercel.app",
      code: "https://github.com/ayush-gupta2002/password-generator",
    },
    {
      id: 4,
      img: Typing,
      name: "Typing Game",
      demo: "https://typing-game-omega-khaki.vercel.app",
      code: "https://github.com/ayush-gupta2002/typing-game",
    },
    {
      id: 5,
      img: portfolio,
      name: "Portfolio",
      demo: "https://jazzy-melomakarona-63ff08.netlify.app",
      code: "https://github.com/ayush-gupta2002/portfolio",
    },
  ];

  const renderedCards = portfolioLinks.map((p) => {
    return (
      <div key={p.id} className="shadow-md shadow-gray-600 rounded-lg">
        <h1 className="text-center font-semibold text-2xl mb-4">{p.name}</h1>
        <img
          src={p.img}
          alt={p.name}
          className="h-[200px] rounded-md hover:scale-105 duration-300 cursor-pointer w-full"
        ></img>
        <div className="items-center justify-center flex w-full">
          <a
            href={p.demo}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex justify-end"
          >
            Demo
          </a>
          <a
            href={p.code}
            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
          >
            Code
          </a>
        </div>
      </div>
    );
  });

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {renderedCards}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
