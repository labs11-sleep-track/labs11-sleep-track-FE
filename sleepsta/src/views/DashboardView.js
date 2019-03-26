import React from "react";
import { connect } from "react-redux";

import RadialChart from "../components/Dashboard/RadialChart";
import { fetchUserDailyData } from "../actions/index";

class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("mounting");
    //hardcoding in a user for now, but will later get the user_id after logging in
    const user_id = 1;
    this.props.fetchUserDailyData(user_id);
  }

  render() {
    return (
      <div>
        <RadialChart userDailyData={this.props.userDailyData} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDailyData: state.userDailyData
});

export default connect(
  mapStateToProps,
  { fetchUserDailyData }
)(DashboardView);
