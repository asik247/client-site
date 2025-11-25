import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../Context/AuthContex";

const Register = () => {
  // AuthContxt thake register ar code paice
  const {createUser} = use(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    console.log(Email, Password);
    // creatUser a email and password diya dise..
    createUser(Email,Password)
    .then(result=>{
      console.log(result.user)
    }).catch(error=>{
      console.log(error)
    })
  
  };
  return (
    <form onSubmit={handleRegister}>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
        <h1 className="text-3xl text-center font-bold">Register now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Register;
