import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { fetchUserDailyData } from "../actions/index";
import RadialChart from "../components/Dashboard/RadialChart";
import WeeklyBarChart from "../components/Dashboard/WeeklyBarChart";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";
import MobileNav from "../components/Nav/MobileNav.js";
import MonthlyBarChart from "../components/Dashboard/MonthlyBarChart";
import DailyDataModal from "../components/Dashboard/DailyDataModal";

const Div = styled.div`
  margin: 15px auto;
  @media (min-width: 1920px) {
    max-width: 1450px;
  }
`;

const RadialCharts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 1920px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Chart = styled.div`
  @media (min-width: 1920px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Week = styled.div`
  padding: 30px;
  background-color: rgb(255, 255, 255, 0.09);
  @media (min-width: 1920px) {
    width: 560px;
  }
`;

const Month = styled.div`
  padding: 30px;
  background-color: rgb(255, 255, 255, 0.09);
  @media (min-width: 1920px) {
    width: 560px;
  }
`;

const Daily = styled.div`
  background-color: rgb(255, 255, 255, 0.09);
  padding: 30px;
`;

const DashboardWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
  padding-bottom: 15px;
  @media (max-width: 500px) {
    padding: 20px;
  }
`;

const Graphwrapper = styled.div`
  margin-top: 15px;
`;

const DashboardNav = styled.div`
  width: 100%;
`;

const H2 = styled.div`
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 15px;
  @media (max-width: 500px) {
    padding-top: 20px;
    font-size: 22px;
  }
`;

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepData: [],
      notes: "",
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
    const unixFormat = "X";
    const secondsInWeek = 604799;
    //get first/last day of the week based on what week is selected:
    const week = moment(this.state.week)._d;
    const firstWeekDay = parseInt(moment(week).format(unixFormat));
    const lastWeekDay =
      parseInt(moment(week).format(unixFormat)) + secondsInWeek;

    //get first/last day of the month based on what month is selected:
    const month = moment(this.state.month).format("M");
    const year = moment(this.state.month).format("YYYY");
    const firstMonthDay = parseInt(
      moment(new Date(year, month - 1, 1)).format(unixFormat)
    );
    const lastMonthDay = parseInt(
      moment(new Date(year, month, 0)).format(unixFormat)
    );
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
    if (
      prevProps.userDailyData.length !== this.props.userDailyData.length ||
      prevState.week !== this.state.week ||
      prevState.month !== this.state.month
    ) {
      await this.setDay();

      //filters userDailyData to only include days selected by month input
      const filteredMonth = this.props.userDailyData.filter(dailyData => {
        return (
          this.state.firstMonthDay <= dailyData.sleeptime &&
          dailyData.sleeptime <= this.state.lastMonthDay
        );
      });

      let sortedFilteredMonth = filteredMonth.sort(function(a, b) {
        return a.sleeptime - b.sleeptime;
      });
      //filters userDailyData to only include days selected by week input
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
  showDailyGraph = (e, isData, data) => {
    e.preventDefault();
    if (isData) {
      this.setState({
        dailyDisplayed: true,
        notes: data.sleep_notes,
        //conditionally renders sleepdata because it is in different formats on localhost and on netlify
        sleepData:
          window.location.hostname === "localhost"
            ? JSON.parse(data.night_data)
            : data.night_data
      });
    }
  };

  //used when clicking on "show weekly data" button to display weekly data again
  hideDailyGraph = e => {
    e.preventDefault();
    this.setState({ dailyDisplayed: false });
  };

  handleInputChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Div className="navHolder">
        <DashboardNav>
          <LoggedInSideNav />
          <MobileNav />
        </DashboardNav>
        <DashboardWrapper>
          <Chart>
            <Week>
              <H2> Weekly Sleep Analysis </H2>
              <input
                type="week"
                name="week"
                value={this.state.week}
                onChange={this.handleInputChange}
              />
              <Graphwrapper>
                <WeeklyBarChart
                  filteredDailyData={this.state.filteredDailyData}
                  firstWeekDay={this.state.firstWeekDay}
                  lastWeekDay={this.state.lastWeekDay}
                />
              </Graphwrapper>
            </Week>
            <br />
            <div>
              {this.props.currentUser.account_type === "premium" && (
                <Month>
                  <div>
                    <H2> Monthly Sleep Analysis</H2>
                    <input
                      type="month"
                      name="month"
                      value={this.state.month}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <Graphwrapper>
                    <MonthlyBarChart
                      filteredMonthlyData={this.state.filteredMonthlyData}
                      firstMonthDay={this.state.firstMonthDay}
                      lastMonthDay={this.state.lastMonthDay}
                    />
                  </Graphwrapper>
                </Month>
              )}
            </div>
          </Chart>
          <br />
          <Daily>
            <H2> Daily Sleep Analysis</H2>
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
          </Daily>
          <DailyDataModal
            sleepData={this.state.sleepData}
            notes={this.state.notes}
            dailyDisplayed={this.state.dailyDisplayed}
            hideDailyGraph={this.hideDailyGraph}
          />
        </DashboardWrapper>
      </Div>
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
