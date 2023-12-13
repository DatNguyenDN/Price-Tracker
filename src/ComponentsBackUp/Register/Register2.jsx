import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import './styles.css'
const Register2 = () => {


    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
    const REGISTER_URL = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/generate-otp";

    const emailRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMacth] = useState(false);
    const [matchFocus, setMacthFocus] = useState(false);

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus();
        }
    }, []);

    useEffect(() => {
        // const result = EMAIL_REGEX.test(email);
        // console.log(result);
        setValidEmail(EMAIL_REGEX.test(email));
    }, [EMAIL_REGEX, email]);

    useEffect(() => {
       setValidPassword(PWD_REGEX.test(password))
       setValidMacth(password === matchPassword)
    }, [password, matchPassword, PWD_REGEX]);

    useEffect(() => {
        setErrMsg("");
    }, [email, password, matchPassword]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const v1 = EMAIL_REGEX.test(email);
        // const v2 = PWD_REGEX.text(password)
        if(!setValidEmail || !validPassword) {
            setErrMsg("Invalid Entry");
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            'x-functions-key':'-qbcoDfFKIiluGvzxTqKe6BZ61KdQKTFZhs0IOEjAOFkAzFuOD8RvQ==',
        }
        try{
            const response = await Axios.post(REGISTER_URL,
                JSON.stringify({email,password}),
                {
                    headers: headers,
                    withCredentials:true
                }
                );
                console.log(response.data);
                console.log(response.accessToken)
                console.log(JSON.stringify(response))
                setSuccess(true);
                //clear input fields
                
        } catch (error){
            if (!error?.response) {
                setErrMsg("No Server Response")
            } else if (error.response?.status === "InValid") {
                setErrMsg("Registration Failed")
            }

            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <NavLink to='/login'>Sign In</NavLink>
                    </p>
                </section>
            ): (

            <section className="pt-[100px]  flex flex-col justify-center items-center mx-auto space-y-5 text-3xl p-[5%]">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                <h1 className="text-center">Register</h1>
    
                <form onSubmit={handleSubmit}
                className="flex flex-col text-xl max-sm:w-[50%]" >
                    <label htmlFor="username">User Name</label>
    
                    <input type="text" id="username" />
    
                    <label htmlFor="email">
                        Email id:
                        <span className={validEmail ? 'valid:' : "hide"}>
                            <FontAwesomeIcon icon={faCheck} color="limegreen" />
                        </span>
                        <span className={validEmail || !email ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        id="emailid"
                        ref={emailRef}
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Invalid email 
                       
                    </p>
    
                    <label htmlFor="password">
                        Password
                        <span className={validPassword ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPassword || !password ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="passwordnote"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                    />
    
                    <p id="passwordnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number and a special character.
                        <br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
    
    
                    <label htmlFor="confirm_password">
                        Confirm Password
                        <span className={validMatch && matchPassword ? 'valid' : 'hide'}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
    
                        <span className={validMatch || !matchPassword ? 'hide': 'invalid'}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </span>
                    </label>
    
                    <input 
                    type="password" 
                    id="confirm_password" 
                    value={matchPassword} 
                    onChange={(e) => setMatchPassword(e.target.value)} 
                    required 
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMacthFocus(true)}
                    onBlur={() => setMacthFocus(false)}
                    />
                     <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>
                <div className="pt-5">
                    <button 
                    className="text-3xl bg-green-500 rounded-xl p-2  flex items-center"
                    disabled={!validEmail || !validPassword || !validMatch ? true : false}
                    > 
                    Sign Up
                    </button>
                </div>
                </form>
                <div className="w-full">
                    <h4 className="text-xl">
                              Already Register <br/> <NavLink to='/login'>Login here</NavLink>
                    </h4>
                </div>
            </section>
            )}
        </>
    );
};

export default Register2;
