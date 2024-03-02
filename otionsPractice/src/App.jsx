import { useState } from "react";
import "./App.css";
import countriesAndCities from "./data";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  function handleChange(e) {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);

    const selectedCountryObject = countriesAndCities.find((item) => item.country === selectedCountry
    );

    if (selectedCountryObject) {
      setCities(selectedCountryObject.cities);
    } else {
      setCities([]);
    }
  }

  return (
    <>
      <select
        value={selectedCountry}
        onChange={handleChange}
        style={{
          width: "200px",
          border: "none",
          borderBottom: "2px solid black",
          margin: "20px",
        }}
      >
        <option value="">Select Country</option>
        {countriesAndCities.map(({ country }) => (
          <option key={country}>{country}</option>
        ))}
      </select>
      
      <select
        value={cities}
        onChange={(e) => setCities(e.target.value)}
        style={{
          width: "200px",
          border: "none",
          borderBottom: "2px solid black",
          margin: "20px",
        }}
      >
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </>
  );
}

export default App;
