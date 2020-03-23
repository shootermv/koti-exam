import React from "react";

export default function SideBar({letterClick}) {
  return (
    <nav>
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