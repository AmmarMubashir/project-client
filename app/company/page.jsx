"use client";

import Image from "next/image";
import React from "react";

import HeroBg from "../../public/img/HeroBg.png";
import HeroImg from "../../public/img/HeroImg.png";
import Footer from "../components/Footer";
import Pattern from "../components/Pattern";
import Header from "../components/Header";

import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <>
      <Header />
      <div className="pt-[10rem] bg-[#d6bebe] min-h-[200px]">
        <div className="mx-auto flex items-start flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-2/4 flex justify-start">
            <h1 className="text-[#fa4c27] text-[3rem] font-bold p-6">
              About Gantry
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 p-4">
            <p className="text-white text-[12px] w-[80%] md:w-4/4 lg:w-3/4 xl:w-2/4 mx-auto">
              Introducing gantry: The tool to iterate on machine
              learning-powered products. Training an ML model is easier than
              ever, but building an ML-powered product is not. ML-powered
              products need their own dedicated tooling stack.
            </p>
          </div>
        </div>
        {/* ================ pattern ================== */}
        <div className="flex flex-col overflow-hidden">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>

          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll-reverse">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll-reverse"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/4 mx-auto">
          <Image
            className="rounded-lg"
            src={HeroImg}
            alt="Hero Image"
            width={1000} // Adjust the width according to your image aspect ratio
            height={600} // Adjust the height according to your image aspect ratio
          />
        </div>
      </div>

      {/*  */}
      <div className="flex flex-wrap pt-[20px] container">
        {/* Left Section */}
        <div className="w-full md:w-3/3 lg:w-1/3 xl:w-2/4 p-4 flex flex-col justify-start gap-3">
          <hr className="h-1 bg-black w-3/4" />
          <div className="w-[80%]">
            <h3 className="text-xl font-bold">About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              omnis vitae consequatur explicabo, tempore dignissimos?
            </p>
          </div>
          <hr className="h-1 bg-black w-3/4" />
          <div className="flex flex-col w-[70%]">
            <h3 className="text-xl font-bold">Industries</h3>
            <div className="flex flex-wrap gap-2">
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Artificial Intelligence
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Developer Platform
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Enterprise Software
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Information Technology
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Search Engine
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p>Canada, Canada, Canada</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Models in production</h3>
            <p>14+</p>
          </div>
          <div className="w-[80%]">
            <h3 className="text-xl font-bold">Uses cases</h3>

            <ul className="pl-10 list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                exercitationem!
              </li>
              <li>Lorem ipsum dolor sit amet consectetur exercitationem!</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing,
                exercitationem!
              </li>
              <li>Lorem ipsum dolor sit amet, exercitationem!</li>
            </ul>
          </div>
          <div className="w-[70%]">
            <h3 className="text-xl font-bold">From Stack</h3>
            <div className="flex flex-wrap gap-2">
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Javascript
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                React
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Typescript
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Google drive
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Next
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Redux
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Tailwind
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                SCASS
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Github
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Python
              </button>
              <button
                className="px-3"
                style={{
                  border: "1px solid black;border-radius:100px;",
                }}
              >
                Web
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 p-4 ">
          <div className="p-6 rounded-lg w-[90%] flex flex-col gap-2">
            <h3 className="text-xl font-bold">
              A conversation with Karous Sariola of Coveo
            </h3>
            <p className="text-gray-800">
              Welcome to Production ML Papers to know, a series from Gantry
              highlighting papers we think have been important to the evolving
              practice of production ML We have covered a few papers already in
              our newsletter, Continuel learning, and on Twitter. Due to the
              positive reception we decided to turn these into blog posts.
            </p>
          </div>
          <div className="border-l-[2px] border-solid border-black px-6 w-[90%] font-bold flex flex-col gap-3">
            <p>
              If you want a single machine learning model that can solve a
              variety of image classification tasks, uou might look to an
              open-vocabulary model like CLIP.
            </p>
            <p>
              CLIP achieves near-state-of-the-art zero-shot performance on
              certain classification tasks, but not all (e.g., not even MNIST).
              Ideally, we would be able to use a small amount of data to adapt
              the model to new tasks we encounter them.
            </p>
            <p>
              But naively fine-tuning it to improve performance on a new task
              leads performance degradation on older ones(The catastrophic
              forgetting problem).
            </p>
            <p>
              Todays paper purposes a solution, based on the idea model
              patching.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <Footer />
        {/* ================ pattern ================== */}
        <div className="flex flex-col overflow-hidden mt-[2rem] mb-0">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex mx-auto overflow-hidden animate-loop-scroll">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
