import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chef = () => {
  const chef = useLoaderData();
  console.log(chef);

  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleFavoriteClick = (recipe) => {
    // Check if recipe is already in favorite recipes
    if (favoriteRecipes.some((fav) => fav.recipe_name === recipe.recipe_name)) {
      toast(`"${recipe.recipe_name}" is already in your favorites.`);
      return;
    }
    setFavoriteRecipes((prev) => [...prev, recipe]);
    // Show toast message
    toast(`"${recipe.recipe_name}" is now your favorite.`);
    // Disable the button
    event.target.disabled = true;
  };
  return (
    <div className="my-10">
      <h2 className="mb-10 text-xl font-semibold">This is chef details</h2>
      <div className="flex  bg-red-50 py-10 px-10">

        {/* Left Side */}
      <div className=" ">
        <img
          className="h-[auto] w-[100vw]  rounded-md"
          src={chef.picture}
          alt=""
        />
        </div>

        {/* Right side */}

        <div className=" flex flex-col justify-center mx-auto px-5">
        <h2 className=" text-3xl font-semibold my-4 mb-10">{chef.name}</h2>
        <p className="mb-10 mx-10">{chef.bio}</p>
        <p className='pb-2 text-lg mb-5'>Year of experience: {chef.years_of_experience}</p>
        <div className='job-type flex mx-auto justify-center '>
          <div className='left-side pr-3 pb-2 text-sm border-2 pl-3 pt-1'>
            <p>Number of recipes: {chef.num_recipes}</p>
          </div>
          <div className='right-side pl-3 pr-3 pb-2 text-sm border-2 pl-3 pt-1 ml-3'>
            <p>Likes: {chef.likes}</p>
          </div>
        </div>
        </div>
      
      
      </div>


      <div className="grid grid-cols-3 w-[1200px] mx-auto">

      {chef.recipes &&
        chef.recipes.map((recipe) => ( 
          <div key={recipe.name}>

           <div >
            
           <div className='w-[350px] h-[560px] rounded-xl my-10 mx-5 px-5 py-3 border relative '>
            <h3 className="text-sm  py-5 text-start">Recipe Name:<span className="text-sm font-semibold"> {recipe.recipe_name}</span> </h3>

            {recipe.ingredients.map((ingredient, index) => (
              <p key={index} className="font-medium text-sm py-1 text-start">{ingredient}</p>
            ))}
        <p className='font-medium text-sm py-2 text-start'>{recipe.cooking_method}</p>
        <p className='pb-2  font-medium text-sm text-start'>Year of experience: {chef.years_of_experience}</p>
        <div className='flex mx-auto align-middle justify-between pt-2 absolute bottom-10 gap-10 px-10 '>
          <div className=' flex mx-auto justify-center left-side pr-3 pb-2 text-sm border-2 pl-3 pt-2 align-middle '>
            <p className="text-start ">rating: {recipe.rating}</p>
          </div>
          <button
            onClick={(event) => handleFavoriteClick(recipe, event)}
            disabled={favoriteRecipes.some((fav) => fav.recipe_name === recipe.recipe_name)}
          >
            Favorite
          </button>
        </div>
       
            </div>
            
            </div> 
       
          </div>
        ))}



      </div>
      <ToastContainer  className={'mt-16'}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ marginTop: "-5rem" }}
      />
    </div>
  );
};

export default Chef;
