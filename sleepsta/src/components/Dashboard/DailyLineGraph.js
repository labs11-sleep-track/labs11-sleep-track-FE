import React from "react";
import ReactApexChart from "react-apexcharts";

class DailyLineGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sleepData: {
        "2019-03-25T05:39:21Z": 5.2209352900584545,
        "2019-03-25T05:49:21Z": 3.3971837262312556,
        "2019-03-25T05:59:21Z": 3.5040233644346386,
        "2019-03-25T06:09:21Z": 3.6783727121849839,
        "2019-03-25T06:19:21Z": 8.5440943626066108,
        "2019-03-25T06:29:21Z": 2.5747798234224293,
        "2019-03-25T06:39:21Z": 2.7866822468737746,
        "2019-03-25T06:49:21Z": 2.5048958236972472,
        "2019-03-25T06:59:21Z": 1.7174417376518263,
        "2019-03-25T07:09:21Z": 2.1681548232833543,
        "2019-03-25T07:19:21Z": 1.8186708800494678,
        "2019-03-25T07:29:21Z": 3.0903311905761548,
        "2019-03-25T07:39:21Z": 1.5270990418891122,
        "2019-03-25T07:49:21Z": 1.7558466233313068,
        "2019-03-25T07:59:21Z": 2.1191882677376253,
        "2019-03-25T08:09:21Z": 1.5518835050364332,
        "2019-03-25T08:19:21Z": 1.7805493200818712,
        "2019-03-25T08:29:21Z": 2.0621156928439932,
        "2019-03-25T08:39:21Z": 1.7473646352688479,
        "2019-03-25T08:49:21Z": 2.3905533738434288,
        "2019-03-25T08:59:21Z": 1.8631210351983694,
        "2019-03-25T09:09:21Z": 2.2448710451523448,
        "2019-03-25T09:19:21Z": 1.8186105762918796,
        "2019-03-25T09:29:21Z": 3.0101491579165032,
        "2019-03-25T09:39:21Z": 2.1843224726617332,
        "2019-03-25T09:49:21Z": 2.6402975929280128,
        "2019-03-25T09:59:21Z": 2.0249337057272592,
        "2019-03-25T10:09:21Z": 2.2333878042797251,
        "2019-03-25T10:19:21Z": 4.1488268394023207,
        "2019-03-25T10:29:21Z": 2.7872679295639244,
        "2019-03-25T10:39:21Z": 3.549584077050286,
        "2019-03-25T10:49:21Z": 5.547974315782394,
        "2019-03-25T10:59:21Z": 5.928985128800071,
        "2019-03-25T11:09:21Z": 8.4805624845127277,
        "2019-03-25T11:19:21Z": 8.2185336134086064,
        "2019-03-25T11:29:21Z": 7.1736218500882423,
        "2019-03-25T11:39:21Z": 6.4529103897511924,
        "2019-03-25T11:49:21Z": 5.7358410793046106,
        "2019-03-25T11:59:21Z": 5.9806757879753913,
        "2019-03-25T12:09:21Z": 5.85740215641757,
        "2019-03-25T12:19:21Z": 5.797561165566246
      },
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

  componentDidMount() {
    let options = this.state.options;
    let series = this.state.series;
    options.xaxis.categories = Object.keys(this.state.sleepData);
    console.log("options.axis.categories", options.xaxis.categories);
    series[0].data = Object.values(this.state.sleepData);

    this.setState({ options, series });
  }
  render() {
    console.log("rendering");
    console.log("options", this.state.options);
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
