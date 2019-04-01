import React from "react";

import Profile from "../components/Profile/Profile";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";

function ProfileView(props) {
  return (
    <div>
      <div>
        <LoggedInSideNav />
      </div>
      <Profile />
    </div>
  );
}

export default ProfileView;
