import React from "react";
import img from "../assets/img/home.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">  
        Commencez votre journée avec nos café chauds !
        </h1>
        <p>
        Boostez votre productivité et améliorez votre humeur avec un verre de café dès le matin.
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="VOIR MENU" />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <h2 className=" font-semibold">Chaud</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-semibold">Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;