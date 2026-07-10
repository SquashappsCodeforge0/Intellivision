import React from "react";
import './check.css'

export default function Checks({data}) {
  return (
    <div className="checks">
      <ul className="mt-5">
        <li className="selection">{data}</li>
      </ul>
    </div>
  );
}
