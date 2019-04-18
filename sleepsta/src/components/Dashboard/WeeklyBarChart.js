import moment from "moment";
import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
import { setAvg, fontFamily } from "./common";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("sleepstaShades", [
  //bar chart colorSet Array
  "#9EE493",
  "#CEF1C9",
  "#B0E9A8",
  "#6D9F66"
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
    //sets dps in state (datapoints)
    let dataArr = [];
    for (let i = 0; i < this.props.filteredDailyData.length; i++) {
      if (typeof this.props.filteredDailyData[i] === "object") {
        let sleepTime = this.props.filteredDailyData[i].sleeptime;
        let dayOfWeek = moment.unix(sleepTime).format("dddd");
        const secondsInHour = 3600;
        let totalSleep =
          (this.props.filteredDailyData[i].waketime - sleepTime) /
          secondsInHour;

        dataArr.push({ label: dayOfWeek, y: totalSleep });
      } else {
        dataArr.push({ label: this.props.filteredDailyData[i], y: 0 });
      }
    }
    this.setState({ dps: dataArr });
  }

  async componentDidMount() {
    await this.initializeState();
    let average = setAvg(this.state.dps);
    this.setState({ average });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredDailyData !== this.props.filteredDailyData) {
      await this.initializeState();
      let average = setAvg(this.state.dps);
      this.setState({ average });
    }
  }

  render() {
    const options = {
      toolTip: {
        content: "{y}"
      },
      colorSet: "sleepstaShades",
      backgroundColor: "#222d44",
      title: {
        fontSize: 24,
        fontFamily: fontFamily,
        fontColor: "#F7F7FF",
        text: `${moment
          .unix(this.props.firstWeekDay)
          .format("MMM Do")} - ${moment
          .unix(this.props.lastWeekDay)
          .format("MMM Do")}`
      },
      subtitles: [
        {
          fontFamily: fontFamily,
          fontColor: "#F7F7FF",
          text: "Average: " + this.state.average + "hr"
        }
      ],
      axisY: {
        title: "Hours Slept",
        titleFontFamily: fontFamily,
        titleFontColor: "#F7F7FF",
        labelFontFamily: fontFamily,
        labelFontColor: "#F7F7FF",
        suffix: "hr",
        maximum: 12
      },
      axisX: {
        title: "Day of Week",
        titleFontFamily: fontFamily,
        titleFontColor: "#F7F7FF",
        labelFontFamily: fontFamily,
        labelFontColor: "#F7F7FF"
      },
      data: [
        {
          type: "column",
          indexLabelFontFamily: fontFamily,
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
