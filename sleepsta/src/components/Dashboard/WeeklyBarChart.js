import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("sleepstaShades", [
  //colorSet Array

  "#9EE493",
  "#E34A6F",
  "#9AD2CB"
]);

class WeeklyBarChart extends Component {
  constructor() {
    super();
    this.state = {
      dps: [],
      average: 0
    };
  }

  initializeState() {
    let dataArr = [
      { label: "Monday", y: 0 },
      { label: "Tuesday", y: 0 },
      { label: "Wednesday", y: 0 },
      { label: "Thursday", y: 0 },
      { label: "Friday", y: 0 },
      { label: "Saturday", y: 0 },
      { label: "Sunday", y: 0 }
    ];
    for (let i = 0; i < 7; i++) {
      if (typeof this.props.filteredDailyData[i] === "object") {
        let sleepTime = this.props.filteredDailyData[i].sleeptime;
        let formattedTime = new Date(sleepTime * 1000);
        var days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
        let dayOfWeek = days[formattedTime.getDay()];
        let totalSleep =
          (this.props.filteredDailyData[i].waketime - sleepTime) / 3600;
        for (let x = 0; x < 7; x++) {
          if (dataArr[x].label === dayOfWeek) {
            dataArr[x].y = totalSleep;
          }
        }
      }
    }
    this.setState({ dps: dataArr });
  }

  setAvg() {
    let total = 0;
    let count = 0;

    for (let i = 0; i < this.state.dps.length; i++) {
      if (this.state.dps[i].y !== 0) {
        total += this.state.dps[i].y;
        count++;
      }
    }
    let average = count === 0 ? 0 : (total / count).toFixed(1);
    this.setState({ average });
  }

  async componentDidMount() {
    await this.initializeState();
    this.setAvg();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredDailyData !== this.props.filteredDailyData) {
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
        text: "Week: Picked week range"
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
        labelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        labelFontColor: "#F7F7FF"
      },
      data: [
        {
          type: "column",
          indexLabelFontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
          indexLabelFontColor: "#F7F7FF",
          labelFontColor: "#F7F7FF",
          yValueFormatString: "#.# 'hr'",
          indexLabel: "{y}",
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

export default WeeklyBarChart;
