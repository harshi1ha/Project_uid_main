import React, { useRef } from 'react';
import './index.css'
const Train1 = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const validateAndRedirect = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (username === '' || password === '') {
            alert('Please enter both username and password.');
        } else {
            window.location.href = 'main.html';
        }
    };

    return (
        <div>
            <div className="maindiv">
                <div className="nav_bar">
                    <div style={{ flex: 0.8 }}>
                        <img src="train.jpg" className="logo" alt="Train Logo" />
                    </div>
                    <div style={{ flex: 0.5 }} className="sub_nav_bar">
                        <a className="a">Home</a>
                    </div>
                    <div className="sub_nav_bar" style={{ flex: 1 }}>
                        <a className="a" href="#Contact_us">Contact Us</a>
                    </div>
                    <div style={{ flex: 1 }} className="sub_nav_bar">
                        <a className="a" onClick={() => document.getElementById('login').style.display = 'block'}>Login</a>
                    </div>
                    <div style={{ flex: 1 }} className="sub_nav_bar">
                        <a href="http://localhost:8080/" role="button">Signup</a>
                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                    <div className="login-page">
                        <form id="loginForm" onSubmit={validateAndRedirect}>
                            <h1 className="login-text">Login</h1>
                            <label htmlFor="username" className="username"><b>Username</b></label>
                            <input type="text" name="Username" id="username" ref={usernameRef} required />
                            <br />
                            <label htmlFor="password" className="password"><b>Password</b></label>
                            <input type="password" name="password" id="password" ref={passwordRef} required /><br />
                            <button type="submit" id="login" className="login-button">Login</button>
                        </form>
                        <div id="errorMessage"></div>
                    </div>
                </div>
            </div>
            <div className="Contact_us" id="Contact_us">
                <h1 style={{ fontSize: '50px' }}>Contact Us</h1>
                <ul>
                    <li><h2>For All Public Grievances please DIAL - 139.</h2></li>
                    <li><h2>For All Security Related Issues, please DIAL - 182</h2></li>
                    <li><h2>Note: For All RRBs related issues please contact their respective websites.</h2></li>
                    <li><h2>For lodging complaint at Rail Madad visit -</h2></li>
                    <h2>
                        <a style={{ color: 'blue' }} href="https://railmadad.indianrailways.gov.in/madad/final/home.jsp">https://railmadad.indianrailways.gov.in/madad/final/home.jsp</a>
                    </h2>
                    <br />
                    <h2>* Note-All uploaded Data/Information provided by concerned directorates</h2>
                </ul>
            </div>
        </div>
    );
};

export default Train1;
