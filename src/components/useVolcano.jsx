import React, {useState, useEffect} from 'react';


function useVolcano(search) {
    const [volcanoList, setVolcanoList] = useState([]);

    const getVolcanoes = () => {
        fetch("http://sefdb02.qut.edu.au:3001/volcanoes?country=" + search.country + "&populatedWithin=" + search.population)
        .then(res => res.json())
        .then(data => setVolcanoList(data));
    }

    useEffect(() => {
      getVolcanoes();
    },[search])

  return {
    volcanoList
  };
}

export default useVolcano;