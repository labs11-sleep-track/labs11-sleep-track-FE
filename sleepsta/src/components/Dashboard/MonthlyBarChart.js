import moment from "moment";
import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
import { setAvg, fontFamily } from "./common";
const CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("sleepstaShades", [
  //bar chart colorSet Array
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
    //sets dps in state (datapoints)
    let dataArr = [];
    for (let i = 0; i < this.props.filteredMonthlyData.length; i++) {
      if (this.props.filteredMonthlyData[i]) {
        let wakeTime = this.props.filteredMonthlyData[i].waketime;
        let sleepTime = this.props.filteredMonthlyData[i].sleeptime;
        const secondsInHour = 3600;
        let totalSleep = (wakeTime - sleepTime) / secondsInHour;
        dataArr.push({
          label: new Date(sleepTime * 1000).getDate(),
          y: totalSleep
        });
      }
    }
    this.setState({ dps: dataArr });
  };

  async componentDidMount() {
    await this.initializeState();
    let average = setAvg(this.state.dps);
    this.setState({ average });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.filteredMonthlyData !== this.props.filteredMonthlyData) {
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
      backgroundColor: "rgb(255, 255, 255, 0)",
      title: {
        fontSize: 24,
        fontFamily: fontFamily,
        fontColor: "#F7F7FF",
        text: `${moment.unix(this.props.firstMonthDay).format("MMMM")}`
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
        minimum: 0,
        maximum: 12
      },
      axisX: {
        title: "Day of Month",
        titleFontFamily: fontFamily,
        titleFontColor: "#F7F7FF",
        labelFontFamily: fontFamily,
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
