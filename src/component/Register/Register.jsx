import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Register = () => {
  const {createUser} = useContext(AuthContext)
  const navigate= useNavigate ();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState ('');
  const [success, setSuccess]= useState ('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, photo, password)
    if (password.length < 7 ) {
      setError("Password should be more than 6 characters");
      return;
    }
    else{
      setSuccess("User created successfully!");
    }
    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
      createdUser.displayName= name,
      createdUser.photoURL= photo,
      navigate(from, { replace: true });
    })
    .catch(error =>{
      setError(error.message);
      console.log(error);
    });

    // Handle form submission here
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form onSubmit={handleRegister} className="py-8 px-4 shadow sm:rounded-lg sm:px-10 w-[35vw]">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        <div className='mt-10'>
              <label
                htmlFor="name"
                className="block text-start text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                placeholder='Type your name'
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
        <div className='mt-3'>
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  placeholder='Type your email'
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className='mt-3'>
              <label
                htmlFor="password"
                className="block text-start text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  placeholder='Type your password'
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className='mt-3'>
              <label
                htmlFor="photoUrl"
                className="block text-start text-sm font-medium text-gray-700"
              >
               Photo Url
              </label>
              <div className="mt-1">
                <input
                  placeholder='Your Photo url'
                  type="text"
                  id="photo"
                  name="photo"
                  autoComplete="photo"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className=' py-5 '>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
            </div>
            <div className="mt-3">
            <div className="mt-3">
              {error && !success && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
            </div>

          
        </div>
        
       
      </form>
    </div>
  );
};

export default Register;
