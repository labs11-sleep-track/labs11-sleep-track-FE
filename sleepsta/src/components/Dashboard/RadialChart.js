import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepData: {
        id: 1,
        user_id: 1,
        sleeptime: 1553639993,
        waketime: 1553667653,
        qos_score: 45934,
        sleep_notes: null
      },
      options: {
        chart: {
          toolbar: {
            show: true
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
    const totalSleep =
      this.state.sleepData.waketime - this.state.sleepData.sleeptime;
    //divide total sleep by 8 hours (in seconds) multiplied by 100 for percentage
    const percentage = (totalSleep / 28800) * 100;
    this.setState({ series: [percentage] });
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="350"
          />
        </div>
      </div>
    );
  }
}

export default RadialChart;
