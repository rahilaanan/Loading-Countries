import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [add, setAdd] = useState([]);
  //doing in same thing in a slightly different 
  
  const [addFlags, setFlags] =useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleAdd = (country) => {
    console.log("added");
    const newAdd = [...add, country];
    setAdd(newAdd);
  };



  const handleFlags = flag =>{
    const newFlags = [...addFlags, flag]
    setFlags(newFlags);
  }
  return (
    // visited countries;
    <div>
      <p>Country: {countries.length}</p>
      <div>
        <h4>Visited Countries {add.length}</h4>
        <ul>
          {add.map((country) => (
            <li  key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag">
{
    addFlags.map((flag,idx) => <img key={idx} src={flag}>
    </img>)
}
      </div>

      {/* display countries */}
      <div className="Countries">
        {countries.map((countri) => (
          <Country
            key={countri.cca3}
            handleAdd={handleAdd}
            handleFlags={handleFlags}
            country={countri}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
