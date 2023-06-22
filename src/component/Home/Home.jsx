import React from "react";
import { BuildingStorefrontIcon, CakeIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Chefs from "../Chefs";

const Home = () => {
  const backgroundImageUrl =
    "https://i.ibb.co/0Yh4HZd/background.jpg";
  const style = {
    backgroundImage: `url(${backgroundImageUrl})`,
    height: "100vh",
    width: "98vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className=" flex flex-col mx-auto">
    <div style={style}>
      <div className="flex flex-col mx-auto justify-center align-middle tracking-widest h-[100vh] ">
        <h2 className="text-5xl font-bold leading-normal">
          Healthy <br />
          Meals All Day
        </h2>
        <h2 className="text-4xl font-semibold tracking-widest mt-2">
          For a longer Life
        </h2>
        <p className="text-2xl font-medium mt-4">
          Get a fresh and tasty recepies that are well <br /> balanced and will
          improve your wellness, plus
          <br /> add nutrients to your body.
        </p>
      </div>
      </div>
      <div className="my-16">
        <h2 className=" text-4xl font-bold ">How it works</h2>
      </div>
      <div className=" flex flex-col lg:flex-row mx-auto justify-center gap-10 mb-16">
       
        {/* Card-1 */}
        <div className="card w-80 h-[360px] bg-base-100 shadow-xl">
          <figure className="px-2 pt-5">
          <CheckCircleIcon className="h-14 w-14 stroke-slate-900 text-white" />

          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pick a meal</h2>
            <p>There are different meals every week to choose from. This gives you a variety of options to switch it up.</p>
            
          </div>
        </div>

         {/* Card-2 */}
         <div className="card w-80 h-[360px] bg-base-100 shadow-xl">
          <figure className="px-2 pt-5">
          <CakeIcon className="h-14 w-14 stroke-slate-900 text-white" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Customize it</h2>
            <p>Choose your favorite recipes that you want to cook. Pick the category you love.</p>
            
          </div>
        </div>

        
        {/* Card-3 */}
        <div className="card w-80 h-[360px] bg-base-100 shadow-xl">
          <figure className="px-2 pt-5">
          <BuildingStorefrontIcon className="h-14 w-14 stroke-slate-900 text-white" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cook it up</h2>
            <p>Order the meal you have chosen. Fresh and packed ingredients straight to your door step.</p>
            
          </div>
        </div>
      </div>
      <div className="flex mx-auto">
        <Chefs></Chefs>
      </div>

        {/* 2nd section */}

<div className="flex flex-col lg:flex-row w-[98vw] bg-red-50 py-10 px-10 my-16 ">

{/* Left Side */}
<div className=" lg:w-[600px] ">
<img
  className="h-[auto] w-[100vw]  rounded-md"
  src="https://i.ibb.co/GvXG71v/team-cooks.jpg"
  alt=""
/>
</div>

{/* Right side */}

<div className=" flex flex-col justify-center mx-auto px-5 lg:w-[500px]">
<h2 className=" text-3xl font-semibold my-4 mb-10 ">Personalize your Meals</h2>
<p className="mb-10 mx-10 text-start">Choose your weekly or daily meal plan from our meals to kick start your month. All meanu are fresh and set for you in portion to make it easier to cook immediately.</p>

</div>

</div>

</div>
    
  );
};

export default Home;
