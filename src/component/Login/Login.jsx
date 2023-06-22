import React, { useState } from "react";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = ()=>{
    signInWithGoogle ()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleGitHubSignIn =()=>{
    signInWithGithub ()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
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

            <div>
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

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div>
              <h3>
                Don't have an account?{" "}
                <Link to="/register" className=" text-red-500">
                  Register
                </Link>
              </h3>
            </div>

            {/* Social Media Loing */}
            <div className=" flex mx-auto justify-center gap-3">
              {/* Google login */}
              <div>
                <button onClick={handleGoogleSignIn} className="text-sm text-center flex gap-1 mx-auto justify-center">
                  <FaGoogle/>Login with Google
                </button>
              </div>
              <div>
              <button onClick={handleGitHubSignIn} className="text-sm flex gap-1 mx-auto justify-center align-middle ">
                  <FaGithub/> Login with GitHub
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
