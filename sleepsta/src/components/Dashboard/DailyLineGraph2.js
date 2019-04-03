import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// var dps = [
//   { x: 1, y: 10 },
//   { x: 2, y: 13 },
//   { x: 3, y: 18 },
//   { x: 4, y: 20 },
//   { x: 5, y: 17 },
//   { x: 6, y: 10 },
//   { x: 7, y: 13 },
//   { x: 8, y: 18 },
//   { x: 9, y: 20 },
//   { x: 10, y: 17 }
// ]; //dataPoints.
// var xVal = dps.length + 1;
// var yVal = 15;
// var updateInterval = 1000;

class DynamicLineChart extends Component {
  constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
    this.state = {
      dps: []
    };
  }
  componentDidMount() {
    // setInterval(this.updateChart, updateInterval);
    this.setState({ dps: this.props.sleepData });
  }
  updateChart(prevProps, prevState) {
    // yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
    // dps.push({ x: xVal, y: yVal });
    // xVal++;
    // if (dps.length > 10) {
    //   dps.shift();
    // }
    if (prevProps.sleepData !== this.props.sleepData) {
      this.setState({ dataPoints: this.props.sleepData });
    }
    this.chart.render();
  }
  render() {
    const options = {
      title: {
        text: "Motion Data"
      },
      data: [
        {
          type: "line",
          dataPoints: this.state.dps
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default DynamicLineChart;
