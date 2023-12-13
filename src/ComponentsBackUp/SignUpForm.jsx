"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { faCheck, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const emailRef = useRef();
    const errRef = useRef();

    const [responseMessage, setResponseMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMacth] = useState(false);
    const [matchFocus, setMacthFocus] = useState(false);

    const [token, setToken] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setErrorMessage("");
    }, [email, password, matchPassword]);

    const handleSignUp = async () => {
        // if (!validEmail || !validPassword) {
        //     setErrorMessage("Invalid Entry"); 
            
        // }

        const userData = {
            email: email,
            // password: password,
        };

        const REGISTER_URL = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/signup";
        try {
            const response = await Axios.post(REGISTER_URL, userData);

            if (response.status === 200) {
                console.log(response.data.status);
                setIsModalOpen(true);
                setResponseMessage("OTP has been sent");
                // Clear any previous error message
            } else if (response.status === 409) {
                setResponseMessage("Email is already been used! Do you want to login instead?");
            } else if (response.status === 500) {
                setResponseMessage("Something was wrong");
            } else {
                // Handle other status codes if needed
                setResponseMessage(`Unexpected status code. Status: ${response.status}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setResponseMessage("Email is already in use! Do you want to login instead?");
            } else if (error.response && error.response.status === 500) {
                setResponseMessage("Something was wrong");
            } else {
                console.error("Error: ", error);
                setResponseMessage("An error occurred, please try again!");
            }
        }
    };

    const [verifyResponse, setVerifyResponse] = useState("");

    const handleVerify = (e) => {
        e.preventDefault();

        const verifyOTP = "https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/signup-otp";
        const userData = {
            email: email,
            password: password,
            token: token,
        };

        try {
            const response = Axios.post(verifyOTP, userData);
            if (response.status === 200) {
                window.alert("Register successful");
            } else if (response.status === 409) {
                console.log("email has been used");
            } else if (response.status === 400) {
                window.alert("error 400");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setVerifyResponse("Email is already in use! Do you want to login instead?");
            } else if (error.response && error.response.status === 400) {
                window.alert("error 400");
                setVerifyResponse("Something was wrong");
            } else {
                console.error("Error: ", error);
                setVerifyResponse("An error occurred, please try again!");
            }
        }
    };


    return (
        <>
            <Stack>
                <Flex minH={"80vh"} align={"center"} justify={"center"} bg={useColorModeValue("white", "gray.800")} marginTop={"50px"} w={""}>
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                        <Stack align={"center"}>
                            <Heading fontSize={"4xl"} textAlign={"center"} color={"green.500"}>
                                Sign up
                            </Heading>
                            <Text fontSize={"lg"} color={"gray.600"}>
                                to enjoy all of our cool features ✌️
                            </Text>
                        </Stack>
                        <Box
                            // bg={useColorModeValue("white", "gray.700")}
                            rounded={"lg"}
                            boxShadow={"lg"}
                            p={8}
                            minW={{ base: "90%", md: "468px" }}
                        >
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>
                                        Email address&nbsp;&nbsp;&nbsp;
                                        <span className={validEmail ? "flex-row" : "hidden"}>
                                            <FontAwesomeIcon icon={faCheck} color="limegreen" />
                                        </span>
                                        <span className={validEmail || !email ? "hidden" : "flex-row"}>
                                            <FontAwesomeIcon icon={faTimes} color="red" />
                                        </span>
                                    </FormLabel>
                                    <Input
                                        rounded={"15px"}
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email..."
                                        ref={emailRef}
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                    />
                                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Invalid email
                                    </p>
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>
                                        Password&nbsp;&nbsp;&nbsp;
                                        <span className={validPassword ? "flex-row" : "hidden"}>
                                            <FontAwesomeIcon icon={faCheck} color="limegreen" />
                                        </span>
                                        <span className={validPassword || !password ? "hidden" : "flex-row"}>
                                            <FontAwesomeIcon icon={faTimes} color="red" />
                                        </span>
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            rounded={"15px"}
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            aria-invalid={validPassword ? "false" : "true"}
                                            aria-describedby="passwordnote"
                                            onFocus={() => setPasswordFocus(true)}
                                            onBlur={() => setPasswordFocus(false)}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <InputRightElement h={"full"}>
                                            <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="confirm_password">
                                    <FormLabel>
                                        Confirm Password&nbsp;&nbsp;&nbsp;
                                        <span className={validMatch && matchPassword ? "flex-row" : "hidden"}>
                                            <FontAwesomeIcon icon={faCheck} color="limegreen" />
                                        </span>
                                        <span className={validMatch || !matchPassword ? "hidden" : "flex-row"}>
                                            <FontAwesomeIcon icon={faTimes} color="red" />
                                        </span>
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            rounded={"15px"}
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={matchPassword}
                                            onChange={(e) => setMatchPassword(e.target.value)}
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        rounded={"20px"}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="whatsapp"
                                        width="full"
                                        disabled={!validEmail  || !validPassword || !validMatch}
                                        onClick={handleSignUp}
                                        // isDisabled ={!validEmail && !validPassword && !validMatch}
                                    >
                                        Sign up
                                    </Button>
                                    <Box>
                                        {responseMessage && <Box color="orange.500">{responseMessage} </Box>}

                                        {errorMessage && <Box>{setErrorMessage}</Box>}
                                    </Box>
                                </Stack>
                                <Stack pt={6}>
                                    <Text align={"center"}>
                                        Already a user?{" "}
                                        <NavLink style={{ color: '#38a169',marginLeft:'5px' }} to="/login">
                                            Login
                                        </NavLink>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </Stack>

            <Modal size={"xl"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={"center"}>Email Verification</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1 className="text-center">We have sent a code to your email {email}</h1>

                        <div className="flex mx-auto justify-between items-center gap-5 my-10">
                            
                         
                                <input
                                
                                    className="border border-blue-400 mx-auto rounded-md text-center w-[200px] h-[80px] items-center justify-center font-bold"
                                    type="text"
                                    id="numericInput"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    maxLength='4'
                                    style={{fontSize:'60px'}}
                                />
                          
                        </div>

                        <div className="flex flex-col pt-10 gap-5 w-full">
                            <Button 
                            
                            rounded={"20px"}
                            type="submit"
                            variant="solid"
                            colorScheme="whatsapp"
                            width="80%"
                            fontSize={'20px'}
                            margin={'auto'}
                            onClick={handleVerify}
                            >
                                Verify
                            </Button>
                            <h1>
                                Didn't received Code? &nbsp;&nbsp;&nbsp;
                                <span className="underline text-blue-400 cursor-pointer " onClick={handleSignUp}>
                                    Resend
                                </span>
                            </h1>
                            {responseMessage && <Box justifyContent={'center'} alignItems={'center'} color="green.500">{responseMessage} </Box>}
                            {verifyResponse && <Box color="orange.500">{verifyResponse} </Box>}
                        </div>
                    </ModalBody>

                    <ModalFooter>{/* You can add any additional buttons or actions here */}</ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SignUpForm;
