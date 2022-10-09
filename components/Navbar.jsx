import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "../public/assets/NavLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
      }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="/" width="200" height="50" />
        </Link>
        <div className="flex flex-row justify-center items-center">
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Resume
                </li>
              </a>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 width-full h-screen bg-black/70"
            : ""
        }>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="/" width="135" height="40" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer">
                <AiOutlineClose size={20} />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-400 my-4">
            <p className="text-black w-[85%] py-4 md:w-[90%]">
              Build something great with me.
            </p>
          </div>
          <div className="py-4 flex flex-col text-black">
            <ul className="uppercase">
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <li className="py-4 text-sm">Resume</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="pt-4">
            <p className="uppercase tracking-widest text-[#07A3BA]">
              Connect with me
            </p>
            <div className="flex items-center justify-start mx-5 my-4 w-full sm:w-[80%] text-black">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 m-3 cursor-pointer hover:scale-105 eas-in duration-500"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ianbwana/")
                }>
                <FaLinkedinIn />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 m-3 cursor-pointer hover:scale-105 eas-in duration-500"
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

export default Navbar;
