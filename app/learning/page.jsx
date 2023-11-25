"use client"

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pattern from "../components/Pattern";

const page = () => {
  return (
    <div className="bg-red-600 min-h-[400px] w-full pt-5">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xl font-bold">
        <div>
          <p>Continual learning</p>
        </div>
        <div className=" flex justify-center">
          <ul>
            <li>Machine learning</li>
            <li>B2B Solutions</li>
            <li>Developer Platform</li>
            <li>Search Engine</li>
            <li>Safety in AI</li>
            <li>Drift Detedtion</li>
            <li>Model Production</li>
            <li>Model Production</li>
            <li>Large Language Model</li>
            <li>SaaS Solutions</li>
            <li>Feature Store</li>
            <li>Enterprise Software</li>
            <li>Artificial Intelligence</li>
            <li>Deep Learning</li>
            <li>Information Technology</li>
          </ul>
        </div>
      </div>
      <div>
        <Footer />
        {/* ================ pattern ================== */}
        <div className="flex flex-col overflow-hidde mt-[2rem]">
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
    </div>
  );
};

export default page;
