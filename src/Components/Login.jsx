import React, { use } from "react";
import { AuthContext } from "../Context/AuthContex";

const Login = () => {
  const {singInUser} = use(AuthContext)
 
  const handleLogin = (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    console.log(Email,Password)
    singInUser(Email,Password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-20">
        <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" name="email" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Login;
