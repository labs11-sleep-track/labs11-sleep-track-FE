import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("sleepstaShades", [
  //colorSet Array

  "#9EE493",
  "#CEF1C9",
  "#B0E9A8",
  "#6D9F66"
]);
class MonthlyBarChart extends Component {
  constructor() {
    super();
    this.state = {
      dps: [],
      average: 0
    };
  }

  initializeState = () => {
    let dataArr = [];
    for (let i = 0; i < this.props.filteredMonthlyData.length; i++) {
      if (this.props.filteredMonthlyData[i]) {
        let wakeTime = this.props.filteredMonthlyData[i].waketime;
        let sleepTime = this.props.filteredMonthlyData[i].sleeptime;
        let totalSleep = (wakeTime - sleepTime) / 3600;
        dataArr.push({
          label: new Date(sleepTime * 1000).getDate(),
          y: totalSleep
        });
      }
    }
    this.setState({ dps: dataArr });
  };

  setAvg() {
    let total = 0;
    let count = 0;
    if (this.state.dps.length) {
      for (let i = 0; i < this.state.dps.length; i++) {
        total += this.state.dps[i].y;
        count++;
      }
      this.setState({ average: (total / count).toFixed(1) });
    } else {
      this.setState({ average: 0 });
    }
  }

  async componentDidMount() {
    await this.initializeState();
    this.setAvg();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredMonthlyData !== this.props.filteredMonthlyData) {
      await this.initializeState();
      this.setAvg();
    }
  }
  render() {
    const options = {
      colorSet: "sleepstaShades",
      backgroundColor: "rgb(255, 255, 255, 0.09)",
      title: {
        fontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        fontColor: "#F7F7FF",
        text: "Picked Month"
      },
      subtitles: [
        {
          fontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
          fontColor: "#F7F7FF",
          text: "Average: " + this.state.average + "hr"
        }
      ],
      axisY: {
        title: "Hours Slept",
        titleFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        titleFontColor: "#F7F7FF",
        labelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        labelFontColor: "#F7F7FF",
        suffix: "hr",
        maximum: 12
      },
      axisX: {
        title: "Day of Month",
        titleFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        titleFontColor: "#F7F7FF",
        labelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        labelFontColor: "#F7F7FF",
        interval: 1
      },
      data: [
        {
          type: "column",
          yValueFormatString: "#.# 'hr'",
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

export default MonthlyBarChart;
