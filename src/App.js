import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import List from "./List";
import Details from "./Details";
import "./styles.css";
import SideBar from "./Sidebar";
import {getCountries} from './redux/actions'

export default function App() {
  const dispatch = useDispatch();
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
        <SideBar/>
      </aside>
    </div>
  );
}
