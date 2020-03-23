import React from "react";
import {filterCountries} from './redux/actions';
import  {useDispatch} from "react-redux";

import styled from '@emotion/styled';

const Inpt = styled.input`
 background: transparent;
 outline: none;
 border: none;
 color: turquoise;
`;
const Wrap = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 20px 90px;
`;
const MagIcon = styled.span`
    position:relative;
    display:inline-block;
    background: #2d3446;
    border-radius: 30px;
    height: 6px;
    width: 6px;
    border: 2px solid turquoise;
    &:after {
      content: "";
      height: 2px;
      width: 6px;
      background: turquoise;
      position:absolute;
      top:7px;
      left:5px;
      -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
    
    
`



export default function Search() {
   const dispatch = useDispatch();
   const search = e => {
      let term = e.target.value;
       dispatch(filterCountries(term));
   };
   return (
    <Wrap>
        <MagIcon/>
        <Inpt placeholder="search country" onInput={search} />
       
    </Wrap>
   )
}