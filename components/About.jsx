import React from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-gray-700">
          <p className="text-xl tracking-widest uppercase text-[#07A3BA]">
            About
          </p>
          <h2 className="my-4 text-gray-700  font-extrabold">Who am I</h2>
          <p className="text-md my-2">
            I consider myself to be a fullstack software engineer.
          </p>
          <p className="text-md mt-2">
            I wasn't always into software but had tinkered around with a few
            programming languages while I was in college studying
            cyber-security. Towards the end of my undergraduate programme, I got
            a chance to participate in a hackathon during Nairobi Tech Week 2016
            and that's where my love/hate relationship with software began.
          </p>
          <p className="text-md mt-2">
            My first experience was in cybersecurity but that didn't last long
            as my soul had already been set on fire so I transitioned to
            software which itself was a long struggle. Since then, I've had a
            chance to work at multiple great companies and build amazing
            products used by millions. I have experience across different
            domains having worked on backend, frontend, mobile and some devops.
          </p>
          <p className="text-md mt-2">
            Some of the technologies I have used recently include:
          </p>
          <ul className="list-inside">
            <li className="list-disc antialiased">
              JavaScript <span className="italic">(React Native, React)</span>
            </li>
            <li className="list-disc antialiased">
              <span className="italic">Python(Django, Flask, FastAPI</span>
            </li>
            <li className="list-disc antialiased">
              NoSQL<span className="italic">(MongoDB, Cassandra)</span>
            </li>
            <li className="list-disc antialiased">
              SQL <span className="italic">(PostgreSQL, MySQL)</span>
            </li>
            <li className="list-disc antialiased">Azure, DigitalOcean, AWS</li>
            <li className="list-disc antialiased">Redis</li>
            <li className="list-disc antialiased">Git</li>
            <li className="list-disc antialiased">Linux</li>
          </ul>
        </div>
        <div className="p-5">
          <Image
            src="/../public/assets/profile.jpg"
            alt="me"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
