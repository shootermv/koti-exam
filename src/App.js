import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import List from "./List";
import Details from "./Details";
import "./styles.css";
import SideBar from "./Sidebar";
import {getCountries, filterCountries} from './redux/actions'

export default function App() {
 
  const dispatch = useDispatch();
  const countries = useSelector(({ countries }) => countries)

  const letterClick = e => {
    let letter = e.target.textContent;
    
    let filtered = countries.filter(({ name }) => new RegExp(`^${letter}`).test(name.toLowerCase()));
    dispatch(filterCountries(filtered));
  };

  
  useEffect(() => {
      // trigger action to fetch coutries from Api
      dispatch(getCountries())
  }, [dispatch]);
  

  return (
    <div className="App">
      <header>Hello CodeSandbox</header>
      <main>
        <List/>
        <Details/>
      </main>
      <aside>
        <SideBar letterClick={letterClick}/>
      </aside>
    </div>
  );
}
