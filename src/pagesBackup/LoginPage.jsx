import React from "react";
import LoginForm from "../components/LoginForm";
import { LoginProvider } from "../components/Context/LoginContext";
const LoginPage = () => {
    return (
        <LoginProvider>
            <LoginForm />
        </LoginProvider>
    );
};

export default LoginPage;
