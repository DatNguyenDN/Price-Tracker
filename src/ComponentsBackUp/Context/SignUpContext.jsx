import { createContext, useContext, useEffect, useState } from "react";
import Axios from 'axios';

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {

    const postAPI = 'https://pricetrackerengine-fnapp.azurewebsites.net/api/tracker/v1/generate-otp'
    const [data, setData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData ({
            ...data,
            [e.target.name]: value
        });
    }

    const [successMessage,setSuccessMessage] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const [responseData, setResponseData] = useState('');
    const [token, setToken] = useState([])
    const saveResponseData = (newData) =>{
        setResponseData(newData)
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const userData ={
            email: data.email,
            password: data.password
        };
        const headers = {
            'Content-Type': 'application/json',
            'x-functions-key':'-qbcoDfFKIiluGvzxTqKe6BZ61KdQKTFZhs0IOEjAOFkAzFuOD8RvQ==',
        }

        try{
         
            const response = await Axios.post (postAPI, userData,{headers})
            console.log(response.data.status,response.data.token)
            saveResponseData(response.data)
            setToken(response.data.token)
            console.log(response.data.token)
            if(response.data.status === 'Valid') {
                setSuccessMessage("Sign-up successful!");
                setErrorMessage(null); // Clear any previous error message
            } else {
                setErrorMessage("Something went wrong, please try again!");
                setSuccessMessage(null); // Clear any previous success message
            }
        } catch(error){ 
            console.error("Error: ",error)
            setErrorMessage('An error occurred, please try again!');
            setSuccessMessage(null); // Clear any previous success message
        }
    }
  
    


    
    
    //Define the context value
    const contextValue = {
        data,
        setData,     
        handleChange,
        handleSignUp,setToken,
        successMessage,token,
        errorMessage,setResponseData,responseData,
    }; 
    


    return (
    <SignUpContext.Provider value={contextValue}>
        {children}
    </SignUpContext.Provider>
        
    );
};

// Create a custom hook to consume the context
export const useSignUpContext = () => {
    return useContext(SignUpContext);
};
