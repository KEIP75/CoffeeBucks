import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">A Propos de nous</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            Qu'est ce qui nous rend spécial ?
          </h2>
          <p>
          Ce qui rend notre café luxueux véritablement exceptionnel,
          c'est l'alliance parfaite entre la passion, l'expertise et la qualité intransigeante.
          Chacune de nos précieuses graines de café est soigneusement sélectionnée à la source,
          provenant des terroirs les plus prestigieux à travers le monde.
          </p>
          <p>
          De plus, notre engagement envers des pratiques durables et éthiques garantit
          non seulement une expérience gustative exquise, mais contribue également
          à la préservation des écosystèmes caféiers.
          </p>

          <Button title="En savoir plus" />
        </div>
      </div>
    </div>
  );
};

export default About;
