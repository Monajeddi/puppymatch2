// import React, {useState,useEffect} from 'react';
// import {Link, useHistory} from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import {signIn, videErrors} from '../../JS/actions/user'
// import Errors from '../../Components/Errors'
// import '../SignUp/signup.css'
// import chiens from '../../Assets/chiens.jpeg'

// const Signin = ({ history }) => {
  
//   const [user, setuser] = useState({});
//   const dispatch = useDispatch();
//   const errors = useSelector((state) => state.userReducer.errors);
//   console.log(errors);
//   const handleChange = (e) => {
//     setuser({ ...user, [e.target.name]: e.target.value });
//   };
//   useEffect(() => {
//     return () => {
//       dispatch(videErrors());
//     };
//   }, []);
//     return (
//       <div>
//       <>

// <div className="container">

// <div className="row py-5 mt-4 align-items-center">
// {/* For Demo Purpose */}
// <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
//   <h1>Se Connecter</h1>
//   <p className="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>
//   <img src={chiens} alt="chiens" className="img-fluid mb-3 d-none d-md-block" />
  
// </div>
// {/* Registeration Form */}
// <div className="col-md-7 col-lg-6 ml-auto">
// <h1>Se Connecter</h1>
//   <form action="#">
//     <div className="row">
    
//       {/* Email Address */}
//       <div className="input-group col-lg-12 mb-4">
//         <div className="input-group-prepend">
//           <span className="input-group-text bg-white px-4 border-md border-right-0">
//             <i className="fa fa-envelope text-muted" />
//           </span>
//         </div>
//         <input id="email" type="email" name="email" onChange={handleChange} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
//       </div>
      
//       {/* Password */}
//       <div className="input-group col-lg-12 mb-4">
//         <div className="input-group-prepend">
//           <span className="input-group-text bg-white px-4 border-md border-right-0">
//           <i className="fa fa-lock text-muted" />
//           </span>
//         </div>
//         <input id="password" type="password" name="password" onChange={handleChange} placeholder="Password" className="form-control bg-white border-left-0 border-md" />
//       </div>
      
//       {/* Submit Button */}
//       <div className="form-group col-lg-12 mx-auto mb-0">
//         <a href="#" className="btn btn-primary btn-block py-2">
//           <span className="font-weight-bold"
//           onClick={() => dispatch(signIn(user, history))}
//           >
//             Sign In </span>
//         </a>
//       </div>
//       {/* Divider Text */}
//       <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
//         <div className="border-bottom w-100 ml-5" />
//         <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
//         <div className="border-bottom w-100 mr-5" />
//       </div>
//       {/* Social Login */}
//       <div className="form-group col-lg-12 mx-auto">
//         <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
//           <i className="fa fa-facebook-f mr-2" />
//           <span className="font-weight-bold">Continue with Facebook</span>
//         </a>
//         <a href="#" className="btn btn-primary btn-block py-2 btn-twitter">
//           <i className="fa fa-twitter mr-2" />
//           <span className="font-weight-bold">Continue with Twitter</span>
//         </a>
//       </div>
//       {/* Already Registered */}
//       <div className="text-center w-100">
//         <Link to="/signup">
//         <p className="text-muted font-weight-bold">Don't have an account? 
//         <a href="#" className="text-primary ml-2">Sign Up</a></p>
//         </Link>
//       </div>
//     </div>
//   </form>
// </div>
// </div>
// </div>
// </>
//   </div>
//     )
// }

// export default Signin


import React, { useState, useEffect } from "react";
import "../SignUp/signup.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn, videErrors } from "../../JS/actions/user";
import Errors from "../../Components/Errors";
import { Link } from "react-router-dom";


const SignIn = ({ history }) => {
  const [user, setuser] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  console.log(errors);
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      {/* {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null} */}
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 border-0 px-4 py-1">
              <img src="https://i.imgur.com/uNGdWHi.png" className="image" />{" "}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5 mt-3 ">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div className="twitter text-center mr-3">
                  <i class="fab fa-twitter"></i>
                </div>
                <div className="linkedin text-center mr-3">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />{" "}
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter a valid email address"
                />{" "}
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                />{" "}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={() => dispatch(signIn(user, history))}
                >
                  SignIn
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a className="text-danger ">
                   
                  </a>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;