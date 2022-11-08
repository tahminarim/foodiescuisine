import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event =>{

    }
    return (
<div className="hero max-screen bg-base-100 mt-9">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-green-600">Login now!</h1>
      <p className="py-6 text-green-500"> To enjoy your today's meal </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-9">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text mt-9">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label mt-9">
            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-success text-white" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center'>New to FoodiesCuisine ?<Link className='text-green-600 font-bold' to="/signup">Sign Up</Link> </p>
    </div>
  </div>
</div>

    );
};

export default Login;