import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import List from "./List";
import Details from "./Details";
import "./styles.css";
import SideBar from "./Sidebar";
import {getCountries, prevStep} from './redux/actions'

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      // trigger action to fetch countries from Api
      dispatch(getCountries())
  }, [dispatch]);
  

  return (
    <div className="App">
      <header>Hello CodeSandbox <button onClick={() => dispatch(prevStep())}>back</button></header>
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
