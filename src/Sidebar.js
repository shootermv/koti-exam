import React from "react";
import {filterCountries} from './redux/actions';
import  {useDispatch} from "react-redux";

export default function SideBar() {
  const dispatch = useDispatch();
  const letterClick = e => {
    let term = e.target.textContent;
    dispatch(filterCountries(term, true));
  };
  const search = e => {
    let term = e.target.value;
    dispatch(filterCountries(term));
  };
  return (
    <nav>
        <input onInput={search} />
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