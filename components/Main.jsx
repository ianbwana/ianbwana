import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm trackin-widest text-gray-600">
            Hello, my name is
          </p>
          <h1 className="text-gray-700 p-4">Ian Bwana</h1>
          <h1>I write software</h1>
          <p className="uppercase text-sm trackin-widest text-gray-600 p-4">
            Build something great with me
          </p>
          <p className="py-4 text-gray-700 text-sm max-w-[40%] m-auto">
            Software engineer specializing in building exceptional web and
            mobile experiences. I work across the stack with a strong leaning
            towards mobile and backend technologies but ocassionally do some
            frontend projects like this site <span>🙂</span>.
          </p>
          <div className="flex items-center justify-between max-w-[30%] m-auto py-4">
            <div className="flex items-center justify-center my-4 w-full sm:w-[80%] text-[#07A3BA]">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 m-5 cursor-pointer hover:scale-105 eas-in duration-500"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ianbwana/")
                }>
                <FaLinkedinIn />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 eas-in duration-500"
                onClick={() => window.open("https://github.com/ianbwana")}>
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
