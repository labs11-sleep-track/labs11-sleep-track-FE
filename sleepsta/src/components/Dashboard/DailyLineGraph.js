import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DailyLineGraph extends Component {
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
      backgroundColor: "#4C546F",
      title: {
        fontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        fontColor: "#F7F7FF",
        text: "Nightly Sleep Motion Analysis"
      },
      axisY: {
        title: "Movement",
        titleFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        titleFontColor: "#F7F7FF",
        labelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        labelFontColor: "#F7F7FF"
      },
      axisX: {
        title: "Time",
        titleFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        titleFontColor: "#F7F7FF",
        labelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        labelFontColor: "#F7F7FF"
      },
      data: [
        {
          type: "spline",
          xValueType: "dateTime",
          lineColor: "#9AD2CB",
          markerColor: "#9AD2CB",
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

export default DailyLineGraph;
