import React from "react";

export default function List({ countries = [], countryClick }) {
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
