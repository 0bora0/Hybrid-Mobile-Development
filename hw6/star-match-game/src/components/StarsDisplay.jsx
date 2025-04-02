import React from "react";
import { utils } from "../utils/utils";

const StarsDisplay = ({ count }) => (
  <>
    {utils.range(1, count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

export default StarsDisplay;
