"use client";
import AppHeader from "./component/Header";

export default function HomePage() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,1)), url('/bg.png') `,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <AppHeader />
      </div>
      <div className="text-white  m-25 w-300 h-100  ">
        <h1 className="text-8xl font-bold ">
          Learn from the Best, Become Your Best
        </h1>
        <p className="w-[513px] font-medium text-[20px] h-[90px]">
          Start, switch, or advance your career with more than 5,800 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>
        <hr className="w-[250px] border-white border-t-6 my-4" />
      </div>
      <div className="w-200 items-center ml-25 mt-10">
        <h1 className="text-white text-4xl font-bold w-[525px] h-[100px]">
          What brings you to Utopia today?
       </h1>
       <p>Choose a many as you want</p>
      </div>
    </div>
  );
}
