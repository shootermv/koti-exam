import React from "react";
import {filterCountries} from './redux/actions';
import  {useDispatch} from "react-redux";

import styled from '@emotion/styled'
import Search from "./Search";

const Li = styled.li`
  color: ${props =>
  props.primary ? 'hotpink' : 'turquoise'};
`

const Nav = styled.nav(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))



export default function SideBar() {
  const dispatch = useDispatch();
  const letterClick = e => {
    let term = e.target.textContent;
    dispatch(filterCountries(term, true));
  };

  return (
    <Nav column>
        <Search/>
        <ul>
        {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <Li key={letter} onClick={letterClick}>
             {letter}
            </Li>
        ))}
        </ul>
    </Nav>
  );
}