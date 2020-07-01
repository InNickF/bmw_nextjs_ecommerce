import React from "react";
import SliderBar, { MuiRail, MuiHandle, MuiTrack, MuiTick } from "./SliderBar";
import BarChart from "./BarChart";
import { RangeSliderContainer, RangeSliderChart, RangeSliderValues, Separator } from "./styles";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.values = props.data.map(data => data.price);
    this.values = this.values.sort(function (a, b) { return a - b });
    this.max = Math.max(...this.values);
    this.min = Math.min(...this.values);
  }

  componentDidMount() {
    this.values = this.props.data.map(data => data.price);
    this.values = this.values.sort(function (a, b) { return a - b });
    this.max = Math.max(...this.values);
    this.min = Math.min(...this.values);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.values = this.props.data.map(data => data.price);
      this.values = this.values.sort(function (a, b) { return a - b });
      this.max = Math.max(...this.values);
      this.min = Math.min(...this.values);
    }
  }

  render() {
    const { domain, values, update, inputValues } = this.state;
    return (
      <RangeSliderContainer>
        <RangeSliderChart>
          <BarChart data={this.values} />
          <SliderBar min={this.min} max={this.max} values={[this.props.values.min, this.props.values.max]} setValues={(data) => { this.props.setValues(data) }} />
        </RangeSliderChart>
        <RangeSliderValues>
          <input type="number" value={this.props.values.min} onChange={(event) => this.props.setValues({ min: parseInt(event.target.value), max: this.props.values.max })} />
          <Separator />
          <input type="number" value={this.props.values.max} onChange={(event) => this.props.setValues({ max: parseInt(event.target.value), min: this.props.values.min })}/>
        </RangeSliderValues>
      </RangeSliderContainer>

    );
  }
}

export default RangeSlider;
