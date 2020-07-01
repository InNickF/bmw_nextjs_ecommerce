import React from "react";
const ReactHighcharts = require('react-highcharts'); // Expects that Highcharts was loaded in the code.

const config = {
  chart: {
    type: 'area',
    backgroundColor: "transparent",
    height: 140,
    width: 250
  },
  credits: false,
  legend: false,
  colors: ['#EBEBEB', '#A4A4A4'],
  title: false,
  xAxis: {
    allowDecimals: false,
    labels: false,
    categories: [''],
    gridLineWidth: 0,
    tickAmount: 0,
  },
  yAxis: {
    title: false,
    labels: true,
    gridLineWidth: 0
  },
  tooltip: false,
  plotOptions: {
    series: false,
    candlestick: false,
    area: {
      pointStart: 1980,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  labels: false,
  series: [{
    name: '',
    data: [

    ]
  }]
};

function json2array(json) {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

function BarChart({ data }) {
  let counts = {}
  data.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  config.series[0].data = json2array(counts);
  return (
    <ReactHighcharts config={config}></ReactHighcharts>
  )
}

export default BarChart