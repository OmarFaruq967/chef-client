import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Chefs = () => {
    // const chefs = useLoaderData();
    const [chefs, setChefs]= useState([]);
    useEffect(()=>{
        fetch("https://chef-server-omarfaruq967.vercel.app/chefs")
        .then((res)=> res.json())
        .then((data)=>setChefs(data))
    },[])

    return (
        <div className=' grid lg:grid-cols-3'>
            
            {chefs.map((chef) =>
                <li key={chef.id} className=' list-none '>

        <div className=''>
        <div className='w-[340px] h-[430px] rounded-xl my-5 mx-5 border '>
        <img className='h-auto w-[cover]  rounded-md' src={chef.picture} alt='' />
        <h2 className='font-semibold text-xl py-2 pt-2'>{chef.name}</h2>
        <p className='pb-2 text-sm font-medium'>Year of experience: {chef.years_of_experience}</p>
        {/* <div className='job-type flex mx-auto justify-center '> */}
          <div className='text-sm font-medium pb-2'>
            <p>Number of recipes: {chef.num_recipes}</p>
          </div>
          <div className=' text-sm font-medium  '>
            <p>Likes: {chef.likes}</p>
          </div>
          
        {/* </div> */}
        <button className='my-5 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' ><Link to={`/chef/${chef.id}`}>View Recipes</Link></button>
        </div>

                
        </div>
        </li>
        )}
        </div>
    );
};

export default Chefs;