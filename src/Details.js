import React from "react";
import {useSelector} from "react-redux";
import Card from './Card';
import styled from '@emotion/styled';

const Img = styled.img`
  height: 40px;
`

export default function Details() {
  
  const country = useSelector(({ selectedCountry }) => selectedCountry);
  if (!country) {
    return (<Card></Card>);
  }
 
  const { name, capital, population, alpha2Code, flag } = country;
  return (
    <Card>
      <h4>Country:{name}</h4>
      <div>capital: {capital} </div>
      <div>population: {population} </div>
      <div>alpha2Code: {alpha2Code} </div>
      <div>
        <Img alt={`${name} flag`} src={flag} />
      </div>
    </Card>
  );
}
