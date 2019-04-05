import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
    for (let i = 0; i < this.state.dps.length; i++) {
      if (this.state.dps[i].y !== 0) {
        total += this.state.dps[i].y;
        count++;
      }
    }
    this.setState({ average: (total / count).toFixed(1) });
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
      backgroundColor: "#4C546F",
      title: {
        fontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        fontColor: "#F7F7FF",
        text: "Monthly Sleep Analysis"
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
