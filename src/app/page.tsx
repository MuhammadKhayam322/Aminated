"use client";
import Link from "next/link";
import Image from "next/image";
import AppHeader from "./component/Header";
import SkillButton from "./component/SkillButton";
import { motion } from "framer-motion";
import AuthorSlider from "./component/AuthorSlider";
import TrainingCard from "./component/TrainingCard";
import TrainerSlider from "./component/TrainerSlider";
import React from "react";
import Footer from "./component/Footer";
import CategoryButtons from "./component/CategoryButtons";
import ExplorePage from "./component/explore/page";
export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-start items-start px-6 md:px-20 py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,1)), url('/bg.png')`,
        }}
      >
        <AppHeader />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="max-w-4xl mt-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Learn from the Best, Become Your Best
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-xl">
            Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.
          </p>
          <hr className="w-48 border-white border-t-4 my-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-12 w-full">
          <h2 className="text-3xl font-bold">What brings you to Utopia today?</h2>
          <p className="text-xl mb-8">Choose as many as you want.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillButton label="Professional Skills" animationType="slideLeft" />
            <SkillButton label="Musician" animationType="flip" />
            <SkillButton label="Become a Professional Tutor" animationType="zoom" />
            <SkillButton label="Become a Great Musician" animationType="slideLeft" />
            <SkillButton label="Become" animationType="flip" />
            <SkillButton label="Become a Chef" animationType="zoom" />
            <SkillButton label="Designing Skills" animationType="slideLeft" />
            <SkillButton label="Designing Skills" animationType="flip" />
            <SkillButton label="Others" animationType="zoom" />
          </div>

          {/* Overlay Image */}
          <div className="mt-8 flex justify-center">
            <Image src="/gg.png" alt="Graphic" width={400} height={100} />
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-white text-black p-6 text-center rounded-lg shadow-lg max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Start your journey today.
            </motion.h1 >
            <div className="text-white">
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="flex flex-col items-center"
>
  <Link href="/component/explore">
    <button className="bg-black px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-gray-800">
      <span className="text-white font-semibold">Explore Classes</span>
    </button>
  </Link>
</motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-6 md:px-20 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Sources of Inspiration
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <CategoryButtons />
        </div>
        <div className="mt-10">
          <AuthorSlider />
        </div>
      </section>

      {/* Training Cards */}
      <section className="flex flex-wrap text-black justify-center gap-8 py-16 px-6 md:px-20 bg-gray-900">
        <TrainingCard
          imageSrc="/card1.png"
          title="New Training Every"
          title2="Month in Different Fields"
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
      </section>

      {/* Trainers Section */}
      <section className="bg-black py-20 px-6 md:px-20">
        <h2 className="text-white text-3xl mb-8">Our Trainers</h2>
        <TrainerSlider />
      </section>

      {/* Popular Training */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl mb-10">New and Popular Training</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <div className="relative w-full lg:w-[700px] h-[400px]">
            <Image src="/clm.png" alt="Card" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 p-4 text-white flex flex-col justify-end">
              <Image src="/heart.png" alt="Heart" width={40} height={40} />
              <h3 className="text-3xl font-bold mt-4">Climate Change: Cause and Solution</h3>
              <p className="text-2xl mt-2">$40.90</p>
            </div>
          </div>

          <div className="relative w-full lg:w-[700px] h-[400px]">
            <Image src="/clm2.png" alt="Card" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 p-4 text-white flex flex-col justify-end">
              <Image src="/heart.png" alt="Heart" width={40} height={40} />
              <h3 className="text-3xl font-bold mt-4">Climate Change: Cause and Solution</h3>
              <p className="text-2xl mt-2">$40.90</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border px-6 py-2 rounded-lg">Show More</button>
        </div>
      </section>

      {/* Footer */}
      <Footer
        logo="/logo.svg"
        columns={[
          {
            title: "Categories",
            items: [
              "Competency Development", "Entrepreneurship", "Life Culture",
              "Gastronomy", "Sustainability", "Leadership", "Marketing",
              "Finance", "Health", "History", "Music", "Sales", "Science", "Cinema", "Art"
            ]
          },
          {
            title: "Instructors",
            items: [
              "Ergin Atman", "Prof. MThew Swith", "Prof. Cshew", "Argun Mehta",
              "Asaf Savas", "Mario", "Azgur Ali", "Ounce Methab", "Egin"
            ]
          },
        ]}
        aboutUs={["Support", "FAQ", "About Utopia", "Our Founders"]}
        bottomLinks={["website@2023", "Terms", "Sitemap", "Contact", "9anime"]}
      />
    </div>
  );
}
