
import { useEffect, useState } from "react";
import { NavLink,useLocation } from "react-router-dom";

const Login = () => {

    //Nhan state from signup page and auto filled in login page
    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.email && state.password) {
          document.getElementById('email').value = state.email;
          document.getElementById('password').value = state.password;
        }
      }, [state]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className=" text-[--color] lg:pt-14 w-full p-[5%]  ">
            <div className="content flex justify-around items-center max-md:flex-col">
                <div className="text-center w-[40%] lg:text-center max-sm:w-full max-md:w-full max-lg:w-full animate__animated animate__fadeInDown">
                    
                    <h1 className="text-5xl font-bold max-sm:text-2xl max-sm:mb-3 ">Login now!</h1>
                    <p className="py-6 max-sm:text-sm max-sm:hidden">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                </div>

                <div className="w-[60%] max-md:w-full max-sm:w-full card shrink-0  max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInRight">
                    <form className="card-body gap-5 max-sm:w-full ">
                        <div className="form-control max-sm:w-full  ">
                            <label className="label">
                                <span className="label-text text-lg max-sm:hidden text-[--color] ">Email</span>
                            </label>
                            <input 
                            id='email'
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email..." 
                            className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-lg max-sm:hidden text-[--color]">Password</span>
                            </label>
                            <input 
                            id='password'
                            type="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password..." 
                            className="input input-bordered" required />
                            <label className="label pt-5">
                                <a href="/" className="label-text-alt link link-hover text-[--color]">
                                    Forgot password?
                                </a>
                                <a href="/" className="label-text-alt link link-hover text-[--color]">
                                   <NavLink to='/signup'> New to us?</NavLink>
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
