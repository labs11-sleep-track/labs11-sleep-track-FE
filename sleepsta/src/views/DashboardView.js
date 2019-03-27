import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchUserDailyData } from "../actions/index";
import RadialChart from "../components/Dashboard/RadialChart";
import DailyLineGraph from "../components/Dashboard/DailyLineGraph";
import WeeklyLineGraph from "../components/Dashboard/WeeklyLineGraph";

const RadialCharts = styled.div`
  display: flex;
`;

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyDisplayed: false,
      dailyDataId: null
    };
  }

  showDailyGraph = (e, id) => {
    e.preventDefault();
    this.setState({ dailyDisplayed: true, dailyDataId: id });
  };

  showWeeklyGraph = e => {
    e.preventDefault();
    console.log("click!");
    this.setState({ dailyDisplayed: false, dailyDataId: null });
  };

  componentDidMount() {
    //hardcoding in a user for now, but will later get the user_id after logging in
    const user_id = 1;
    this.props.fetchUserDailyData(user_id);
  }

  render() {
    return (
      <div>
        {this.state.dailyDisplayed ? (
          <DailyLineGraph dailyDataId={this.state.dailyDataId} />
        ) : (
          <WeeklyLineGraph />
        )}
        {this.state.dailyDisplayed && (
          <button onClick={this.showWeeklyGraph}>View Weekly Data</button>
        )}
        <RadialCharts>
          {this.props.userDailyData.map(dailyData => {
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
