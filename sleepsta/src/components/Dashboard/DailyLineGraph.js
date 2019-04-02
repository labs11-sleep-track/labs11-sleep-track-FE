import React from "react";
import ReactApexChart from "react-apexcharts";

class DailyLineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },

        xaxis: {
          //   type: "datetime",
          categories: []
        }
        // tooltip: {
        //   x: {
        //     format: "dd/MM/yy HH:mm"
        //   }
        // }
      },
      series: [
        {
          name: "series1",
          data: []
        }
      ]
    };
  }

  componentWillMount() {
    console.log("mounting");
    let options = this.state.options;
    let series = this.state.series;
    options.xaxis.categories = this.props.sleepData.map(data => {
      return data.timestamp;
    });
    series[0].data = this.props.sleepData.map(data => {
      return data.motion;
    });
    this.setState({ options, series });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updating");
    if (prevProps.sleepData !== this.props.sleepData) {
      let options = this.state.options;
      let series = this.state.series;
      options.xaxis.categories = this.props.sleepData.map(data => {
        return data.timestamp;
      });
      series[0].data = this.props.sleepData.map(data => {
        return data.motion;
      });
      this.setState({ options, series });
    }
  }

  render() {
    console.log("rendering daily line graph");

    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height="350"
        />
      </div>
    );
  }
}

export default DailyLineGraph;
