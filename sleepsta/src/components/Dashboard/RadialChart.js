import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
class RadialChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px"
              },
              value: {
                formatter: function(val) {
                  return parseInt(val);
                },
                color: "#111",
                fontSize: "36px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Percent"]
      },
      series: [0]
    };
  }

  componentDidMount() {
    const timestamp = this.props.dailyData.sleeptime;
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const date = new Date(timestamp * 1000);
    const dayOfWeek = days[date.getDay()];
    console.log("day", dayOfWeek);
    const totalSleep =
      this.props.dailyData.waketime - this.props.dailyData.sleeptime;
    // divide total sleep by 8 hours (in seconds) multiplied by 100 for percentage
    const percentage = (totalSleep / 28800) * 100;
    if (percentage >= 100) {
      this.setState({ series: [100], day: dayOfWeek });
    } else {
      this.setState({ series: [percentage], day: dayOfWeek });
    }
  }

  render() {
    return (
      <div id="card">
        <ChartContainer id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="350"
          />
          <p>{this.state.day}</p>
        </ChartContainer>
      </div>
    );
  }
}

export default RadialChart;
