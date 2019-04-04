import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { fetchUserDailyData } from "../actions/index";
import RadialChart from "../components/Dashboard/RadialChart";
import DailyLineGraph from "../components/Dashboard/DailyLineGraph";
import WeeklyLineGraph from "../components/Dashboard/WeeklyBarChart";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";
import MobileNav from "../components/Nav/MobileNav.js";
import MonthlyBarChart from "../components/Dashboard/MonthlyBarChart";

const RadialCharts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DashboardNav = styled.div`
  width: 100%;
`;

const GraphWrapper = styled.div`
  margin-bottom: 20px;
`;

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepData: [],
      dailyDisplayed: false,
      month: moment().format("YYYY-MM"),
      week: moment().format("YYYY-[W]WW"),
      firstWeekDay: null,
      lastWeekDay: null,
      firstMonthDay: null,
      lastMonthDay: null,
      filteredMonthlyData: [],
      filteredDailyData: []
    };
  }

  setDay = () => {
    //get first/last day of the week based on what week is selected:
    const week = moment(this.state.week)._d;
    const firstWeekDay = parseInt(moment(week).format("X"));
    const lastWeekDay = parseInt(moment(week).format("X")) + 604800;

    //get first/last day of the week based on what week is selected:
    const month = moment(this.state.month).format("M");
    const year = moment(this.state.month).format("YYYY");
    const firstMonthDay = parseInt(
      moment(new Date(year, month - 1, 1)).format("X")
    );
    const lastMonthDay = parseInt(moment(new Date(year, month, 0)).format("X"));
    this.setState({
      firstWeekDay,
      lastWeekDay,
      firstMonthDay,
      lastMonthDay
    });
  };

  componentDidMount() {
    this.props.fetchUserDailyData(this.props.currentUser.id);
    this.setDay();
  }

  async componentDidUpdate(prevProps, prevState) {
    //set firstWeekDay and lastWeekDay to unix times based on what week user has inputted:
    if (
      prevProps.userDailyData.length !== this.props.userDailyData.length ||
      prevState.week !== this.state.week ||
      prevState.month !== this.state.month
    ) {
      await this.setDay();

      const filteredMonth = this.props.userDailyData.filter(dailyData => {
        return (
          this.state.firstMonthDay <= dailyData.sleeptime &&
          dailyData.sleeptime <= this.state.lastMonthDay
        );
      });

      let sortedFilteredMonth = filteredMonth.sort(function(a, b) {
        return a.sleeptime - b.sleeptime;
      });
      //filters dailyData to only include days selected by week input
      const filteredWeek = this.props.userDailyData.filter(dailyData => {
        return (
          this.state.firstWeekDay <= dailyData.sleeptime &&
          dailyData.sleeptime <= this.state.lastWeekDay
        );
      });
      //this makes it so incomplete weeks will show data for first few days and 0 for the rest:
      let newFilteredWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
      for (let i = 0; i < filteredWeek.length; i++) {
        newFilteredWeek[i] = filteredWeek[i];
      }
      //this sorts the days by sleeptime so they display in order
      let sortedFilteredWeek = newFilteredWeek.sort(function(a, b) {
        return a.sleeptime - b.sleeptime;
      });
      this.setState({
        filteredDailyData: sortedFilteredWeek,
        filteredMonthlyData: sortedFilteredMonth
      });
    }
  }

  //used when clicking on daily radial chart to display line graph of sleep movement from that day
  showDailyGraph = (e, data) => {
    e.preventDefault();
    this.setState({
      dailyDisplayed: true,
      sleepData: data
    });
  };

  //used when clicking on "show weekly data" button to display weekly data again
  showWeeklyGraph = e => {
    e.preventDefault();
    this.setState({ dailyDisplayed: false });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <DashboardNav>
          <LoggedInSideNav />
          <MobileNav />
        </DashboardNav>
        <input
          type="week"
          name="week"
          value={this.state.week}
          onChange={this.handleInputChange}
        />
        {this.props.currentUser.account_type === "user" && (
          <input
            type="month"
            name="month"
            value={this.state.month}
            onChange={this.handleInputChange}
          />
        )}
        <GraphWrapper>
          {this.state.dailyDisplayed ? (
            <DailyLineGraph sleepData={this.state.sleepData} />
          ) : (
            <WeeklyLineGraph filteredDailyData={this.state.filteredDailyData} />
          )}
        </GraphWrapper>
        {this.state.dailyDisplayed && (
          <button onClick={this.showWeeklyGraph}>View Weekly Data</button>
        )}
        <GraphWrapper>
          {this.props.currentUser.account_type === "user" && (
            <MonthlyBarChart
              filteredMonthlyData={this.state.filteredMonthlyData}
              firstMonthDay={this.state.firstMonthDay}
              lastMonthDay={this.state.lastMonthDay}
            />
          )}
        </GraphWrapper>

        <RadialCharts>
          {this.state.filteredDailyData.map(dailyData => {
            return (
              <RadialChart
                key={dailyData.id}
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
  userDailyData: state.compReducer.userDailyData,
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  { fetchUserDailyData }
)(DashboardView);
