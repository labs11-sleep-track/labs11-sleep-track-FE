import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MonthlyBarChart extends Component {
  constructor() {
    super();
    this.state = {
      dps: []
    };
  }

  initializeState = () => {
    let time = new Date(3243232157);
    console.log(time.getDate());
    let dataArr = [];
    let count = 1;
    // let monthLength =
    //   (this.props.lastMonthDay - this.props.firstMonthDay + 1) / 86400;
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
      // else {
      //   let sleepTime = 0;
      //   dataArr.push({ label: count, y: sleepTime });
      // }
      count++;
    }
    console.log("dataArr", dataArr);
    this.setState({ dps: dataArr });
  };

  componentDidMount() {
    this.initializeState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredMonthlyData !== this.props.filteredMonthlyData) {
      this.initializeState();
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
          // text: "Total hours slept each night"
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
