import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 leading-loose">
          Hi 👋, I'm Ayush. I am a second year undergraduate student at Delhi
          Technological University and aspire to work as a Software Engineer. I
          have engineered modern web applications using technologies like HTML,
          CSS, Javascript, ReactJS, MongoDB, Express and NodeJS. I enjoy solving
          coding problems and participate in various coding contests. I go by
          "ayushgupta2002" on leading competitive programming platforms.
        </p>
        <br />
        <p className="text-xl leading-loose">
          "𝘞𝘩𝘦𝘯 𝘢 𝘭𝘢𝘺𝘮𝘢𝘯 𝘸𝘢𝘭𝘬𝘴 𝘰𝘯 𝘵𝘩𝘦 𝘴𝘵𝘳𝘦𝘦𝘵, 𝘩𝘦 𝘤𝘢𝘯 𝘰𝘯𝘭𝘺 𝘴𝘢𝘺 𝘵𝘩𝘢𝘵, 𝘰𝘩! 𝘸𝘩𝘢𝘵
          𝘤𝘢𝘳, 𝘰𝘩! 𝘸𝘩𝘢𝘵 𝘣𝘶𝘪𝘭𝘥𝘪𝘯𝘨. 𝘉𝘶𝘵 𝘰𝘯𝘭𝘺 𝘢𝘯 𝘦𝘯𝘨𝘪𝘯𝘦𝘦𝘳 𝘤𝘢𝘯 𝘴𝘢𝘺 𝘵𝘩𝘢𝘵 𝘐 𝘤𝘢𝘯 𝘮𝘢𝘬𝘦
          𝘪𝘵 𝘣𝘦𝘵𝘵𝘦𝘳."
        </p>
      </div>
    </div>
  );
}

export default About;
