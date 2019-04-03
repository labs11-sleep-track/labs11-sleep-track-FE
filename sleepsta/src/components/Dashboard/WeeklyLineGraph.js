import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs_assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// var updateInterval = 500;
class WeeklyBarChart extends Component {
  constructor() {
    super();
    // this.updateChart = this.updateChart.bind(this);
    this.state = {
      dps: [
        { label: "Monday", y: 0 },
        { label: "Tuesday", y: 0 },
        { label: "Wednesday", y: 0 },
        { label: "Thursday", y: 0 },
        { label: "Friday", y: 0 },
        { label: "Saturday", y: 0 },
        { label: "Sunday", y: 0 }
      ]
    };
  }
  // componentDidMount() {
  //   // setInterval(this.updateChart, updateInterval);
  //   let dataArr = [
  //     { label: "Monday", y: 0 },
  //     { label: "Tuesday", y: 0 },
  //     { label: "Wednesday", y: 0 },
  //     { label: "Thursday", y: 0 },
  //     { label: "Friday", y: 0 },
  //     { label: "Saturday", y: 0 },
  //     { label: "Sunday", y: 0 }
  //   ];
  //   this.setState({ dps: dataArr });
  // }
  // updateChart() {
  //   var dpsColor,
  //     dpsTotal = 0,
  //     deltaY,
  //     yVal;
  //   var dps = this.chart.options.data[0].dataPoints;

  //   for (var i = 0; i < dps.length; i++) {
  //     deltaY = Math.round(2 + Math.random() * (-2 - 2));
  //     yVal =
  //       deltaY + dps[i].y > 0
  //         ? deltaY + dps[i].y < 100
  //           ? dps[i].y + deltaY
  //           : 100
  //         : 0;
  //     dpsColor =
  //       yVal >= 90
  //         ? "#e40000"
  //         : yVal >= 70
  //         ? "#ec7426"
  //         : yVal >= 50
  //         ? "#81c2ea"
  //         : "#88df86 ";
  //     dps[i] = { label: "Core " + (i + 1), y: yVal, color: dpsColor };
  //     dpsTotal += yVal;
  //   }
  //   this.chart.options.data[0].dataPoints = dps;
  //   this.chart.options.title.text =
  //     "CPU Usage " + Math.round(dpsTotal / 6) + "%";
  //   this.chart.render();
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filteredDailyData !== this.props.filteredDailyData) {
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
        if (this.props.filteredDailyData[i]) {
          let sleepTime =
            (this.props.filteredDailyData[i].waketime -
              this.props.filteredDailyData[i].sleeptime) /
            3600;
          console.log("sleeptime", sleepTime);
          dataArr[i].y = sleepTime;
        } else {
          dataArr[i].y = 0;
        }
      }
      this.setState({ dps: dataArr });
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
          yValueFormatString: "#.## 'hr'",
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
