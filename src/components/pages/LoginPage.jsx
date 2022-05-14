import React,{useState} from 'react';

import Navbar from '../Navbar';

import useLogin from '../useLogin';

const API_URL = "http://sefdb02.qut.edu.au:3001"

function LoginPage() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const {errorMessage, loginAuth} = useLogin(userData);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,[name]:value
        });
    }

    const login = () => {
        loginAuth(userData);
    }

    const logout = () => {
        localStorage.removeItem("token");
    }
  return (
    <div>
        <Navbar />
        LoginPage
        <div>
            <input name="email" type="text" placeholder="email" value={userData.email} onChange={handleChange} />
            <input name="password" type="password" placeholder="password" value={userData.password} onChange={handleChange} />

            <button onClick={login}>login</button>
        </div>
        <button onClick={logout}>logout</button>
        {errorMessage}
    </div>
  )
}

export default LoginPage