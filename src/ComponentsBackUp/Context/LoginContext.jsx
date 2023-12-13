import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext("");

export const LoginProvider = ({ children }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successfulMessage, setSuccessfulMessage] = useState('')


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        // Retrieve user data from local storage

        const storedUserData = JSON.parse(localStorage.getItem("dataArray"));

        if (!storedUserData) {
            setErrorMessage("User not found");
            return;
        }

        if (formData.email === storedUserData.email && formData.password === storedUserData.password) {
            // Successful login, navigate to the Home Page
            setSuccessfulMessage("Successfull login")
            console.log("Login successfull");
            
        } else {
            setErrorMessage("Wrong username or password, please try again");
        }
    };

    return (
        <LoginContext.Provider 
        value={{ 
            navigate, 
            formData, 
            errorMessage, 
            handleInputChange, 
            handleLogin 
        }}>
            {children}
        </LoginContext.Provider>
    );
};
