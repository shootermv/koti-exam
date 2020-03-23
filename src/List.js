import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectCountry} from './redux/actions'

export default function List() {
  const countries = useSelector(({ filtered }) => filtered);
  const dispatch = useDispatch();
  if (!countries) return (<></>);
  return (
    <>
      <h4>list:</h4>
      <ul>
        {countries.map(({ name }) => (
          <li
            key={name}
            onClick={({target: {textContent:  country}}) => dispatch(selectCountry(countries.find(({name}) => country === name)))}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
