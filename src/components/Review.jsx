import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic5.png";
import img2 from "../assets/img/pic6.png";
import img3 from "../assets/img/pic4.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Avis de nos Clients
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Emerson452" />
        <ReviewCard img={img2} title="Karlson Tabe" />
        <ReviewCard img={img3} title="Omar Kessentini" />
      </div>
    </div>
  );
};

export default Review;
