import { useState } from 'react';
import './Country.css'

const Country = ({country,handleAdd}) => {
  const {name,flags,region,cca3}=country;

  const [visited, setVisited] = useState(false);

  const handleVisit = ()=>{
    setVisited(!visited);
    
  }
  const passWithParams = ()=>handleAdd(country);
    return (
        <div className='country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Add to list</button>
            <br />
            <br />
            <button onClick={handleVisit}>Visited</button>
            {visited ? "  visited": "  not yet"}
        </div>
    );
};

export default Country;