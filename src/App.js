import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import List from "./List";
import Details from "./Details";
import "./styles.css";
import SideBar from "./Sidebar";
import {getCountries, prevStep} from './redux/actions'
import styled from '@emotion/styled';

const Logo = styled.div`
  height: 70px;
  background: #000;
`;

const Header = styled.header`
  height: 70px;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr
  }
  grid-gap: 20px;
  padding: 20px;
`

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      // trigger action to fetch countries from Api
      dispatch(getCountries())
  }, [dispatch]);
  

  return (
    <div className="App">
      <Header>
        <div className="title"></div>
        <button onClick={() => dispatch(prevStep())}>back</button>
      </Header>
      <Main>
        <List/>
        <Details/>
      </Main>
      <aside>
        <Logo/>
        <SideBar/>
      </aside>
    </div>
  );
}
