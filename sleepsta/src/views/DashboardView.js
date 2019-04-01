import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { fetchUserDailyData } from "../actions/index";
import RadialChart from "../components/Dashboard/RadialChart";
import DailyLineGraph from "../components/Dashboard/DailyLineGraph";
import WeeklyLineGraph from "../components/Dashboard/WeeklyLineGraph";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";

const RadialCharts = styled.div`
  display: flex;
`;

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyDisplayed: false,
      dailyDataId: null,
      week: moment().format("YYYY-[W]WW"),
      firstWeekDay: null,
      lastWeekDay: null,
      filteredDailyData: [0, 0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {
    //hardcoding in a user for now, but will later get the user_id after logging in
    const user_id = 1;
    this.props.fetchUserDailyData(user_id);

    //set firstWeekDay and lastWeekDay to unix times based on what week user has inputted:
    const time = moment(this.state.week)._d;
    console.log("mounting", time);
    const first = parseInt(moment(time).format("X"));
    const last = parseInt(moment(time).format("X")) + 604800;
    this.setState({
      firstWeekDay: first,
      lastWeekDay: last
    });

    // sets filteredDailyData to dates only within selected days of the week
    // const filtered = this.props.userDailyData.filter(dailyData => {
    //   console.log("it's working!!!!");
    //   return (
    //     this.state.firstWeekDay <= dailyData.sleeptime <= this.state.lastWeekDay
    //   );
    // });
    // this.setState({ filteredDailyData: filtered });
  }

  //used when clicking on daily radial chart to display line graph of sleep movement from that day
  showDailyGraph = (e, id) => {
    e.preventDefault();
    this.setState({ dailyDisplayed: true, dailyDataId: id });
  };
  //used when clicking on "show weekly data" button to display weekly data again
  showWeeklyGraph = e => {
    e.preventDefault();
    this.setState({ dailyDisplayed: false, dailyDataId: null });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <LoggedInSideNav />
        </div>
        <input
          type="week"
          name="week"
          value={this.state.week}
          onChange={this.handleInputChange}
        />
        {this.state.dailyDisplayed ? (
          <DailyLineGraph dailyDataId={this.state.dailyDataId} />
        ) : (
          <WeeklyLineGraph />
        )}
        {this.state.dailyDisplayed && (
          <button onClick={this.showWeeklyGraph}>View Weekly Data</button>
        )}
        <RadialCharts>
          {this.props.userDailyData
            .filter(dailyData => {
              return (
                this.state.firstWeekDay < dailyData.sleeptime &&
                dailyData.sleeptime < this.state.lastWeekDay
              );
            })
            .map(dailyData => {
              return (
                <RadialChart
                  dailyData={dailyData}
                  showDailyGraph={this.showDailyGraph}
                />
              );
            })}
        </RadialCharts>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDailyData: state.compReducer.userDailyData
});

export default connect(
  mapStateToProps,
  { fetchUserDailyData }
)(DashboardView);
