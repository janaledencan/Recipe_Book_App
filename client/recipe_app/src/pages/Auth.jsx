import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../auth.css";

const Auth = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='loginSignUp'>
            <div className="loginSignUp-container">
                {state === "Login" ? (
                    <Login formData={formData} changeHandler={changeHandler} />
                ) : (
                    <Register formData={formData} changeHandler={changeHandler} />
                )}
                {state === "Sign up" ?
                    <p className="loginSignUp-login">
                        Already have an account? <span onClick={() => { setState("Login") }}>Login here</span>
                    </p>
                    :
                    <p className="loginSignUp-login">
                        Create an account? <span onClick={() => { setState("Sign up") }}>Click here</span>
                    </p>
                }
            </div>
        </div>
    );
};

const Login = ({ formData, changeHandler }) => {
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", formData);
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return <Form
        formData={formData}
        changeHandler={changeHandler}
        label="Login"
        onSubmit={onSubmit}
        formId="login"
    />;
};

const Register = ({ formData, changeHandler }) => {
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", formData);
            alert("Registration Completed! Now Login!");
        } catch (err) {
            console.error(err);
        }
    };

    return <Form
        formData={formData}
        changeHandler={changeHandler}
        label="Register"
        onSubmit={onSubmit}
        formId="register"
    />;
};

const Form = ({ formData, changeHandler, label, onSubmit, formId }) => {
    return (
        <div className='auth-container'>
            <form onSubmit={onSubmit}>
                <h2>{label}</h2>
                <div className='form-group'>
                    <label htmlFor={`${formId}-username`}>Username: </label>
                    <input
                        type="text"
                        id={`${formId}-username`}
                        name="username"
                        value={formData.username}
                        onChange={changeHandler}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor={`${formId}-password`}>Password: </label>
                    <input
                        type="password"
                        id={`${formId}-password`}
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                    />
                </div>
                <button type='submit'>{label}</button>
            </form>
        </div>
    );
};

export default Auth;

