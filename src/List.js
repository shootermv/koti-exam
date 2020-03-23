import React from "react";
import {useSelector, useDispatch} from "react-redux";
export default function List({ countryClick }) {
  const countries = useSelector(({ filtered }) => filtered)
  if (!countries) return (<></>);
  return (
    <>
      <h4>list:</h4>
      <ul>
        {countries.map(({ name }) => (
          <li
            key={name}
            onClick={e =>
              countryClick(
                countries.find(({ name }) => name === e.target.textContent)
              )
            }
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
