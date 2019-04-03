import React from "react";
import ReactApexChart from "react-apexcharts";

class DailyLineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
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

  // console.log("updating");
  // let options = this.state.options;
  // let series = this.state.series;
  // options.xaxis.categories = this.props.sleepData.map(data => {
  //   return data.timestamp;
  // });
  // series[0].data = this.props.sleepData.map(data => {
  //   return data.motion;
  // });
  // this.setState({ options, series });
  componentDidMount() {
    console.log("mounting");
    let options = this.state.options;
    let series = this.state.series;
    options.xaxis.categories = this.props.sleepData.map(data => {
      return data.timestamp;
    });
    series[0].data = this.props.sleepData.map(data => {
      return data.motion;
    });
    this.setState({ options, series, toggle: !this.state.toggle });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updating");
    console.log("updating", this.state.series);
    if (prevProps.sleepData !== this.props.sleepData) {
      let options = this.state.options;
      let series = this.state.series;
      options.xaxis.categories = this.props.sleepData.map(data => {
        return data.timestamp;
      });
      series[0].data = this.props.sleepData.map(data => {
        return data.motion;
      });
      this.setState({ options, series, toggle: !this.state.toggle });
    }
  }

  render() {
    console.log("rendering daily line graph");
    console.log("series", this.state.series);
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
