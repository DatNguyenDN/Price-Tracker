import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const SignUp = () => {
    const simulateApiResponse = () => {
        setTimeout(() => {
            setShowModal(true);
        }, 3000);
    };
    const [showPassword, setShowPassword] = useState(false);

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/;
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const emailRef = useRef();
    const errRef = useRef();

    const [showResSuccess, setShowResSuccess] = useState(false);

    const [showRes500, setShowRes500] = useState(false);
    const [showRes409, setShowRes409] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [showError, setShowError] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);

    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMacth] = useState(false);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMacth(password === matchPassword);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [password, matchPassword]);

    useEffect(() => {
        setShowAlert("");
    }, [email, password, matchPassword]);

    useEffect(() => {
        // This effect runs when showResSuccess changes
        if (showResSuccess) {
            setTimeout(() => {
                setShowModal(true);
            }, 3000); // 3000 milliseconds (3 seconds)
        }
    }, [showResSuccess]);

    const handleSignUp = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            // password: password,
        };

        if (!email || !password || !matchPassword) {
            setShowAlert(true);
            setShowError(false);
            setShowRes409(false);
            setShowRes500(false);

            // setTimeout(() => {
            //     setShowAlert(false);
            // }, 3000);
            return;
        } else if (!validEmail || !validPassword || !validMatch) {
            setShowError(true);
            return;
        }

        const REGISTER_URL = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/signup";
        try {
            const response = await Axios.post(REGISTER_URL, userData);

            if (response.status === 200) {
                setShowResSuccess(true);
                setShowAlert(false);
                setShowError(false);
                setShowRes409(false);
                setShowRes500(false);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setShowRes409(true);
                setShowAlert(false);
                setShowError(false);
                setShowRes500(false);
            } else if (error.response && error.response.status === 500) {
                setShowRes500(true);
                setShowRes409(false);
                setShowAlert(false);
                setShowError(false);
            } else {
                setShowRes500(true);
            }
        }
    };

    const [token, setToken] = useState("");

    const [showVerifySuccess, setShowVerifySuccess] = useState(false);

    const [showVerifyAlert, setShowVerifyAlert] = useState(false);

    const [showVerifyError, setShowVerifyError] = useState(false);

    const usenavigate = useNavigate();

    const handleCloseModal = () => {
        setShowResSuccess(false);
        setShowModal(false);
    };

    const handleVerify = async (e) => {
        e.preventDefault();

        const verifyOTP = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/signup-otp";
        const userData = {
            email: email,
            password: password,
            token: token,
        };
        if (!token) {
            setShowVerifyAlert(true);

            setTimeout(() => {
                setShowVerifyAlert(false);
            }, 3000);
            return;
        }

        try {
            const response = await Axios.post(verifyOTP, userData);
            if (response.status === 200) {
                setShowVerifySuccess(true);

                setTimeout(() => {
                    usenavigate("/login", { state: { email, password } });
                }, 3000);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setShowVerifyError(true);
                setTimeout(() => {
                    setShowVerifyError(false);
                }, 3000);
            } else {
                console.error("Error: ", error);
                setShowVerifyError(true);
                setTimeout(() => {
                    setShowVerifyError(false);
                }, 3000);
            }
        }
    };
    return (
        <div id="signup__container" className="w-full p-[5%] flex flex-col justify-center items-center text-white animate__animated animate__fadeInLeft">
            <h1 className="text-primary  text-3xl mb-5 font-bold max-sm:text-2xl ">Sign Up Now!</h1>
            <div className="card shrink-0  w-full max-w-md shadow-2xl bg-base-100 max-sm:w-full  ">
            
                <form className="card-body">
                    <div className="form-control max-sm:w-full ">
                        <label className="label ">
                            <span className="label-text text-lg max-sm:hidden text-[--color]">Email</span>
                            <span className={validEmail ? "flex-row" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} color="limegreen" />
                            </span>
                            <span className={validEmail || !email ? "hidden" : "flex-row"}>
                                <FontAwesomeIcon icon={faTimes} color="red" />
                            </span>
                        </label>
                        <input
                            required
                            type="email"
                            placeholder="Email..."
                            className="input input-bordered input-md text-[--color] "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg max-sm:hidden text-[--color]">Password</span>
                            <span className={validPassword ? "flex-row" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} color="limegreen" />
                            </span>
                            <span className={validPassword || !password ? "hidden" : "flex-row"}>
                                <FontAwesomeIcon icon={faTimes} color="red" />
                            </span>
                        </label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password..."
                            className="input input-bordered input-md text-[--color]"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg max-sm:hidden text-[--color]">Confirm Password</span>
                            <span className={validMatch && validPassword && matchPassword ? "flex-row" : "hidden"}>
                                <FontAwesomeIcon icon={faCheck} color="limegreen" />
                            </span>
                            <span className={validMatch || !matchPassword ? "hidden" : "flex-row"}>
                                <FontAwesomeIcon icon={faTimes} color="red" />
                            </span>
                        </label>

                        <input
                            required
                            type="password"
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            placeholder="Re-password..."
                            className="input input-bordered input-md text-[--color]"
                        />

                        <label className="label">
                            <p href="/" className="label-text-alt link link-hover text-lg max-sm:text-xs text-[--color]">
                                <NavLink to="/login"> Already with us? Login</NavLink>
                            </p>
                        </label>
                        {showAlert ? (
                            <div role="alert" className="alert alert-warning w-full ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6 max-sm:hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span className=" max-sm:text-sm">Email or Password must not be empty!</span>
                            </div>
                        ) : null}
                        {showError ? (
                            <div role="alert" className="alert alert-error w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6 max-sm:hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className=" max-sm:text-sm">Invalid Email Or Password !</span>
                            </div>
                        ) : null}
                        {showResSuccess ? (
                            <div role="alert" className="alert alert-success w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6 max-sm:hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-black max-sm:text-sm">Your request has been confirmed!</span>
                            </div>
                        ) : null}
                        {showRes409 ? (
                            <div role="alert" className="alert alert-info w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current shrink-0 w-6 h-6 max-sm:hidden "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="t max-sm:text-sm">"Email is already in use! Do you want to login instead?"</span>
                            </div>
                        ) : null}
                        {showRes500 ? (
                            <div role="alert" className="alert alert-info w-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current shrink-0 w-6 h-6 max-sm:hidden"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span className="t max-sm:text-sm">"Something went wrong!"</span>
                            </div>
                        ) : null}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary btn-md text-lg " onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            {showModal ? (
                <dialog open={true} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Email Verification!</h3>
                        <p className="py-4">We have sent a code to your email {email}</p>
                        <div className="flex mx-auto justify-between items-center gap-5 my-10">
                            <input
                                className="border border-blue-400 mx-auto rounded-md text-center w-[250px] h-[80px] items-center justify-center font-bold input-lg"
                                type="text"
                                id="numericInput"
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                                maxLength="4"
                                style={{ fontSize: "60px" }}
                            />
                        </div>
                        <div className="modal-action">
                            <form method="dialog" className="flex flex-col justify-between items-center w-full gap-7">
                                {showVerifySuccess ? (
                                    <div role="alert" className="alert alert-success">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>"Registration successful, the page will automatically redirect to the login page."</span>
                                        <span className="loading loading-spinner text-success"></span>
                                    </div>
                                ) : null}
                                {showVerifyAlert ? (
                                    <div open={true} role="alert" className="alert alert-warning w-[320px] ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                        <span>OTP must not be empty!</span>
                                    </div>
                                ) : null}

                                {showVerifyError ? (
                                    <div open={true} role="alert" className="alert alert-warning w-[320px] ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                        <span>Invalid OTP provider, please try again </span>
                                    </div>
                                ) : null}
                                <button type="submit" className="btn btn-primary max-w-[130px] " onClick={handleVerify}>
                                    Verify
                                </button>

                                <div
                                    className="flex flex-row w-full 
                                justify-between
                                items-center"
                                >
                                    <div>
                                        <h1>
                                            Didn't received Code? &nbsp;&nbsp;&nbsp;
                                            <span className="underline text-blue-400 cursor-pointer " onClick={handleSignUp}>
                                                Resend
                                            </span>
                                        </h1>
                                    </div>

                                    <div>
                                        <button className="btn" onClick={handleCloseModal}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            ) : null}
            <div></div>
        </div>
    );
};

export default SignUp;
