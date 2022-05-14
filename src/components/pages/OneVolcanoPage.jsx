import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Navbar from '../Navbar';

function OneVolcanoPage() {
    const {id} = useParams();

    const token = localStorage.getItem("token");

    const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    }

    const [volcano, setVolcano] = useState([]);


    const checkExistToken = () => {
        getVolcanoWithAuth();
        if(localStorage.hasOwnProperty('token')) {
            console.log("token is already exists");
            getVolcanoWithAuth();
        } else {
            console.log("token is not exists");
            getVolcano();
        }
    }
    useEffect (() => {
        checkExistToken()
    },[]) 

    const getVolcanoWithAuth = () => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${id}`, {headers})
        .then((res) => res.json())
        // .then((json) => console.log(json))
        .then(data => setVolcano(data))
        // .then(setCenter([volcano.latitude, volcano.longtitude]))
    }

    const getVolcano = () => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${id}`)
        .then((res) => res.json())
        // .then((json) => console.log(json))
        .then(data => setVolcano(data))
    }

  return (
    <div>
        <Navbar />
        <p>{id}</p>
        <p>{volcano.name}</p>
        <p>{volcano.country}</p>
        <p>{volcano.region}</p>
        <p>{volcano.subregion}</p>
        <p>{volcano.last_eruption}</p>
        <p>{volcano.summit}</p>
        <p>{volcano.elevation}</p>
        <p>{volcano.latitude}</p>
        <p>{volcano.longitude}</p>
        <p>{volcano.population_5km}</p>
        <p>{volcano.population_10km}</p>
        <p>{volcano.population_30km}</p>
        <p>{volcano.population_100km}</p>
    </div>
  )
}

export default OneVolcanoPage;