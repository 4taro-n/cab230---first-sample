import React,{useState, useEffect} from 'react';

function SearchVolcano(props) {
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState({
        country: '',
        population: ''
    });

    //get countries infomration
    useEffect(() => {
        fetch("http://sefdb02.qut.edu.au:3001/countries")
        .then((res) => res.json())
        .then(data => setCountryList(data));
    },[])

    //display selected volcanoes searched by country
    const printCountry = countryList.map((data) => {
        return (
            <option value={data} onClick={(e)=> {console.log("e")}}>{data}</option>
        )
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCountryData({
            ...countryData,[name]:value
        });
    }

    const handleSubmit = () => {
        props.onSubmit(countryData);
    }
  return (
    <div>
        <select 
        name="country"
        value={countryData.country}
        onChange={handleChange}>
            <option value="">please select</option>
            {printCountry}
        </select>
        <select 
        name="population"
        value={countryData.population}
        onChange={handleChange}>
            <option value="">please select</option>
            <option value="10km">10km</option>
            <option value="20km">20km</option>
            <option value="30km">30km</option>
        </select>
        <button onClick={handleSubmit}>search</button>
    </div>
  )
}

export default SearchVolcano;