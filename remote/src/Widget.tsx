import React from "react";
import moment from 'moment';

export default function Widget() {
  return (
    <div
      style={{
        borderRadius: "4px",
        padding: "2em",
        backgroundColor: "purple",
        color: "white",
      }}
    >
      <h2>Remote Widget</h2>
      <p>
        Using <strong>momentts</strong> to format the date
      </p>
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
}
