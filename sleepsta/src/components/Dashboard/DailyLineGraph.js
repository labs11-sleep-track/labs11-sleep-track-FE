import React, { Component } from "react";
import moment from "moment";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const fontFamily = ["Poppins", "Roboto", "Arimo", "Work Sans", "Pacifico"];

class DailyLineGraph extends Component {
  constructor() {
    super();
    this.state = {
      dps: []
    };
  }
  componentDidMount() {
    let multipliedTimeArr = this.props.sleepData.map(data => {
      data.x = data.x * 1000;
      return data;
    });
    this.setState({ dps: multipliedTimeArr });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sleepData !== this.props.sleepData) {
      let multipliedTimeArr = this.props.sleepData.map(data => {
        data.x = data.x * 1000;
        return data;
      });
      this.setState({ dps: multipliedTimeArr });
    }
  }

  render() {
    const options = {
      backgroundColor: "#222d44",
      title: {
        text: `${moment(this.props.sleepData[0].x).format("dddd")}`,
        fontSize: 24,
        fontFamily: fontFamily,
        fontColor: "#F7F7FF"
      },
      axisY: {
        title: "Movement",
        titleFontFamily: fontFamily,
        titleFontColor: "#F7F7FF",
        labelFontFamily: fontFamily,
        labelFontColor: "#F7F7FF",
        minimum: 0
      },
      axisX: {
        title: "Time",
        titleFontFamily: fontFamily,
        titleFontColor: "#F7F7FF",
        labelFontFamily: fontFamily,
        labelFontColor: "#F7F7FF"
      },
      data: [
        {
          markerType: "none",
          type: "splineArea",
          xValueType: "dateTime",
          color: "#9EE493",
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
