import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] =useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <p>Country: {countries.length}</p>
            <div className="Countries">
            {
                countries.map(countri=><Country key={countri.cca3} country={countri}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries; 