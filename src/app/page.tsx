"use client";
import Image from "next/image";
import AppHeader from "./component/Header";
import SkillButton from "./component/SkillButton";
import ProButton from "./component/ProButton";
import { motion } from "framer-motion";
import { Card } from "antd";
import AuthorSlider from "./component/AuthorSlider";
import TrainingCard from "./component/TrainingCard";
import TrainerSlider from "./component/TrainerSlider";
import React from "react";
export default function HomePage() {
  const authors = [
    {
      imageSrc: "/cardimg1.png",
      name: "Daniel H. Pink",
      title: "American writer",
      duration: "2 hours 58 minutes",
    },
    {
      imageSrc: "/cardimg2.png",
      name: "Author Two",
      title: "Title Two",
      duration: "3 hours 10 minutes",
    },
    {
      imageSrc: "/cardimg3.png",
      name: "Author Three",
      title: "Title Three",
      duration: "1 hour 45 minutes",
    },
    // Add more authors if needed
  ];
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,1)), url('/bg.png') `,
        height: "121vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <AppHeader />
      </div>
      <div className="text-white ml-40 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold w-[885px]">
            Learn from the Best, Become Your Best
          </h1>
        </motion.div>

        <p className="w-[513px] font-medium text-[20px] h-[90px]">
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>
        <motion.hr className="w-[250px] border-white border-t-4 my-4" />

        <div className="mt-30">
          <h1 className="text-4xl font-bold w-[545px] ">
            What brings you to Utopia today?
          </h1>
          <p className="text-2xl">Choose as many as you want.</p>

          {/* Skill Rows */}
          <div className="grid grid-cols-1 w-220 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
            <SkillButton
              label="Professional Skills"
              animationType="slideLeft"
            />
            <SkillButton label="Musician" animationType="flip" />
            <SkillButton
              label="Become a Professional Tutor"
              animationType="zoom"
            />
          </div>

          <div className="grid grid-cols-1 w-220 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
            <SkillButton
              label="Become a Great Musician"
              animationType="slideLeft"
            />
            <SkillButton label="Become" animationType="flip" />
            <SkillButton label="Become a Chef" animationType="zoom" />
          </div>

          <div className="grid grid-cols-1 w-220 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
            <SkillButton label="Designing Skills" animationType="slideLeft" />
            <SkillButton label="Designing Skills" animationType="flip" />
            <SkillButton label="Others" animationType="zoom" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className=" top-60 right-8"
          >
            <Image
              src="/gg.png"
              alt="Description"
              width={400}
              height={100}
              className="relative top-[-733px] left-290 object-cover"
            />
          </motion.div>

          <Image
            src="/cur.png"
            alt="Description"
            width={300}
            height={100}
            className="relative left-335 object-cover bottom-184"
          />

          <Image
            src="/cur2.png"
            alt="Description"
            width={300}
            height={100}
            className="absolute top-300 object-cover left-0"
          />
        </div>
      </div>
      <div className=" top-300 left-150 bg-white h-20">
        <motion.h1
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 5, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black text-6xl"
          style={{ fontWeight: "bold" }}
        >
          Start your journey today.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <button className="bg-black px-6 py-3 rounded-lg  transition-colors duration-300">
            <span className="text-white font-semibold">Explore Classes</span>
          </button>
        </motion.div>
      </div>
      <div className=" bg-black w-full h-250 flex justify-center top-335">
        <div className="w-270 items-center mt-20">
          <h1
            className="text-white text-6xl text-center"
            style={{ fontWeight: "bold" }}
          >
            Here are some sources of inspiration to help uplift your spirits
          </h1>
        </div>
      </div>
      <div className=" flex flex-row w-230 justify-center left-100 sm:flex-row mt-155 gap-4 flex-wrap">
        <ProButton label="Trending" />
        <ProButton label="Design & Style" />
        <ProButton label="Business" />
        <ProButton label="Business" />
        <ProButton label="Art & Entertainment" />
        <ProButton label="Home & Lifestyle" />
        <ProButton label="Design & Style" />
        <ProButton label="Home & Lifestyle" />
        <ProButton label="Music" />
        <ProButton label="Food" />
        <ProButton label="Writing" />
        <ProButton label="Science & Tech" />
      </div>
      <div className=" top-450 left-0 w-full flex justify-center">
        <AuthorSlider />
      </div>
      <div className="left-0 w-full flex justify-center items-center gap-4 mt-20">
        <TrainingCard
          imageSrc="/card1.png"
          title="New Training Every"
          title2=" Month in Different Fields"
          description="Opportunity to add new trainings uploaded every month to your account at no additional cost!"
        />

        <TrainingCard
          imageSrc="/card3.png"
          title="Live Q&A with All Trainers"
          title2=""
          description="You can ask your questions by participating in the live question and answer activities."
        />

        <TrainingCard
          imageSrc="/card2.png"
          title="+70 Training"
          title2=""
          description="More than 60 trainings prepared by the “best” in their field!"
        />
      </div>
      <div className=" bg-black h-200 top-700 left-0 w-full flex justify-center">
        <h1 className="text-white text-2xl left-20 top-700 ">
          Our Trainers
        </h1>
        <TrainerSlider />
      </div>
      <div className="w-full h-20 flex mt-15">
        <h1 className="ml-35 text-3xl mt-[220px]">New and popular training</h1>
      
      </div>
      <div className="flex item-center justify-center h-150 gap-40">
        <div>
          <Image src="/heart.png" alt="hear"
            width={50}
            height={50}
            className=""
            />
             <div className="ml-10 w-[20px]">
            <h1 className=" top-1020 text-white text-4xl">Climate Change: Cause <h1></h1> and Solution</h1>
            <h2 className=" top-1030 text-white ml-130 text-4xl">$40.90</h2>
            </div>
        <Image src="/clm.png" alt="clm"
        width={700}
        height={100}
        className=""
        /> 
        </div>
        <div>
        <Image src="/heart.png" alt="hear"
            width={50}
            height={50}
            className=""
            />
            <div className="ml-10 w-[20px]">
            <h1 className=" top-1020 text-white text-4xl">Climate Change: Cause <h1></h1> and Solution</h1>
            <h2 className=" top-1030 text-white ml-130 text-4xl">$40.90</h2>
            </div>
         <Image src="/clm2.png" alt="clm"
        width={700}
        height={100}
        className=""
        />
        </div>
        
        </div>
        <div className="flex justify-center font-bold">
        <button className="border border-2xl px-8 py-2 rounded-xl ">Show More</button>
        </div>
     </div>
  );
}
