import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DynamicLineChart extends Component {
  constructor() {
    super();
    this.state = {
      dps: []
    };
  }
  componentDidMount() {
    this.setState({ dps: this.props.sleepData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sleepData !== this.props.sleepData) {
      this.setState({ dps: this.props.sleepData });
    }
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
        <h1>React Dynamic Line Chart</h1>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default DynamicLineChart;
