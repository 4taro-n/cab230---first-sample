import React, {useState, useEffect} from 'react';

const API_URL = "http://sefdb02.qut.edu.au:3001"


const useLogin = (userData) => {
    const [errorMessage, setErrorMessage] = useState("");
    // const [userData, setUserData] = useState({
    //     email: '',
    //     password: ''
    // });
    const loginAuth = () => {
        const URL = `${API_URL}/user/login`

        return fetch(URL, {
            method: "POST",
            headers: {accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({email: userData.email, password: userData.password})
        })
        .then(res => {
            if(res.ok) {
                return res.json()
                .then(console.log("Login Succeed"))
                .then(res => {localStorage.setItem("token", res.token)})
                .then(console.log(res))
            } else {
                return res.json()
                .then(console.log("login is Fail"))
                .then(console.log(res))
                .then(data => setErrorMessage(data.message))
            }
        })
        // .then(res => res.json())
        // .then(res => {
        //     localStorage.setItem("token", res.token);
        // });
    }

    // useEffect(() => {
    //     loginAuth();
    // },[userData])

  return {
      errorMessage,
      loginAuth
  };
}

export default useLogin;