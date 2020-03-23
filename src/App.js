import React, { useEffect, useState } from "react";
import List from "./List";
import Details from "./Details";
import "./styles.css";
import SideBar from "./Sidebar";

export default function App() {
  const [countries, setCountries] = useState([]);
  let [filteredCountries, setFiltered] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const letterClick = e => {
    let letter = e.target.textContent;
    setSelectedCountry(null)
    setFiltered(
      countries.filter(({ name }) =>
        new RegExp(`^${letter}`).test(name.toLowerCase())
      )
    );
  };
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(d => d.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="App">
      <header>Hello CodeSandbox</header>
      <main>
        <List
          countries={filteredCountries}
          countryClick={country => setSelectedCountry(country)}
        />
        {selectedCountry && <Details country={selectedCountry} />}
      </main>
      <aside>
        <SideBar letterClick={letterClick}/>
      </aside>
    </div>
  );
}
