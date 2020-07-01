import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@material-ui/core";

import RangeSlider from "./RangeSlider";

function PriceSlider({ prices2, setValues, values }) {
  return (
    <div className="price-slider">
      <RangeSlider data={prices2} setValues={(data) => setValues(data)} values={values} />
    </div>
  );
}

export default PriceSlider;
