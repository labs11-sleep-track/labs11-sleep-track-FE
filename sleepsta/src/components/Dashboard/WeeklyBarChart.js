import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// var updateInterval = 500;
class WeeklyBarChart extends Component {
  constructor() {
    super();
    this.state = {
      dps: []
    };
  }

  initializeState = () => {
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
      if (isNaN(this.props.filteredDailyData[i]) === true) {
        dataArr[i].y = 0;
      } else {
        let sleepTime =
          (this.props.filteredDailyData[i].waketime -
            this.props.filteredDailyData[i].sleeptime) /
          3600;
        dataArr[i].y = sleepTime;
      }
    }
    this.setState({ dps: dataArr });
  };
  componentDidMount() {
    this.initializeState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredDailyData !== this.props.filteredDailyData) {
      this.initializeState();
    }
  }
  render() {
    const options = {
      backgroundColor: "#4C546F",
      title: {
        fontFamily: ["Roboto", "Arimo", "Work Sans", "Pacifico"],
        fontColor: "#F7F7FF",
        text: "Weekly Sleep Analysis"
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
