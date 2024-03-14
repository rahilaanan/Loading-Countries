import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [add, setAdd] = useState([]);

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
  return (
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
      <div className="Countries">
        {countries.map((countri) => (
          <Country
            key={countri.cca3}
            handleAdd={handleAdd}
            country={countri}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
