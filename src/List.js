import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectCountry} from './redux/actions'
import Card from './Card';

export default function List() {
  const countries = useSelector(({ filtered }) => filtered);
  const dispatch = useDispatch();
  if (!countries) return null;
  return (
    <Card>
      <h4>list:</h4>
      <ul>
        {countries.map(country => (
          <li
            key={country.name}
            onClick={() => dispatch(selectCountry(country))}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </Card>
  );
}
