import React from "react";
import {filterCountries} from './redux/actions';
import  {useDispatch, useSelector} from "react-redux";

export default function SideBar() {
  const countries = useSelector(({ countries }) => countries)
  const dispatch = useDispatch();
  const letterClick = e => {
    let letter = e.target.textContent;
    
    let filtered = countries.filter(({ name }) => new RegExp(`^${letter}`).test(name.toLowerCase()));
    dispatch(filterCountries(filtered));
  };
  return (
    <nav>
    <ul>
      {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <li key={letter} onClick={letterClick}>
          {letter}
        </li>
      ))}
    </ul>
  </nav>
  );
}