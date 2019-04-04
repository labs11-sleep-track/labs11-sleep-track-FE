import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import moment from "moment";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const Chart = styled.div`
  height: 220px;
  width: 220px;
  margin-bottom: 40px;
`;

class RadialChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      options: {
        chart: {
          margin: 0,
          padding: 0,
          height: 80,
          width: "10%",

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
              padding: 0,
              size: "50%",
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
              strokeWidth: "50%",
              margin: 0, // margin is in pixels
              padding: 0,
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
                fontSize: "17px",
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
        labels: ["Quality of Sleep"]
      },
      series: []
    };
  }

  componentDidMount() {
    //formats sleeptime timestamp to day of the week:
    if (isNaN(this.props.dailyData.sleeptime) === true) {
      this.setState({ series: [0], day: this.props.dailyData });
    } else {
      let dayOfWeek = moment
        .unix(this.props.dailyData.sleeptime)
        .format("dddd");
      this.setState({
        series: [this.props.dailyData.qos_score],
        day: dayOfWeek
      });
    }
  }

  render() {
    return (
      <div id="card">
        <ChartContainer
          id="chart"
          onClick={e =>
            this.props.showDailyGraph(
              e,
              window.location.hostname === "localhost"
                ? JSON.parse(this.props.dailyData.night_data)
                : this.props.dailyData.night_data
            )
          }
        >
          <Chart>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              height="350"
            />
          </Chart>

          <p>{this.state.day}</p>
        </ChartContainer>
      </div>
    );
  }
}

export default RadialChart;
