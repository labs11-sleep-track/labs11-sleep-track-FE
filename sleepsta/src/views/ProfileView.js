import React from "react";

import Profile from "../components/Profile/Profile";
import LoggedInSideNav from "../components/Nav/LoggedInSideNav.js";
import MobileNav from "../components/Nav/MobileNav.js";
import styled from "styled-components";

const DashboardNav = styled.div`
  width: 100%;
`;

const ProfileWrapper = styled.div``;

function ProfileView(props) {
  return (
    <div className="navHolder">
      <div>
        <DashboardNav>
          <LoggedInSideNav />
          <MobileNav />
        </DashboardNav>
      </div>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </div>
  );
}

export default ProfileView;
