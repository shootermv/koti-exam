import React from "react";

export default function Details({ country }) {
  const { name, capital, population, alpha2Code, flag } = country;
  return (
    <>
      <h4>Country:{name}</h4>
      <div>capital: {capital} </div>
      <div>population: {population} </div>
      <div>alpha2Code: {alpha2Code} </div>
      <div>
        <img alt={`${name} flag`} src={flag} />
      </div>
    </>
  );
}
