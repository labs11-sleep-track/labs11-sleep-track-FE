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
      backgroundColor: "rgb(255, 255, 255, 0.00)",
      title: {
        fontFamily: ["Poppins", "Roboto", "Arimo", "Work Sans", "Pacifico"],
        fontColor: "#F7F7FF"
      },
      axisY: {
        title: "Movement",
        titleFontFamily: [
          "Poppins",
          "Roboto",
          "Arimo",
          "Work Sans",
          "Pacifico"
        ],
        titleFontColor: "#F7F7FF",
        labelFontFamily: [
          "Poppins",
          "Roboto",
          "Arimo",
          "Work Sans",
          "Pacifico"
        ],
        labelFontColor: "#F7F7FF"
      },
      axisX: {
        title: "Time",
        titleFontFamily: [
          "Poppins",
          "Roboto",
          "Arimo",
          "Work Sans",
          "Pacifico"
        ],
        titleFontColor: "#F7F7FF",
        labelFontFamily: [
          "Poppins",
          "Roboto",
          "Arimo",
          "Work Sans",
          "Pacifico"
        ],
        labelFontColor: "#F7F7FF"
      },
      data: [
        {
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
