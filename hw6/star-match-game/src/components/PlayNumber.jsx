import React from "react";

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const PlayNumber = ({ number, status, onClick }) => (
  <button
    className="number"
    style={{ backgroundColor: colors[status] }}
    onClick={() => onClick(number, status)}
  >
    {number}
  </button>
);

export default PlayNumber;
