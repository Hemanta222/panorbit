import ProfileDetails from "@/components/Profile/ProfileDetails";
import React from "react";
import MainContainer from "../../../components/MainContainer";

const index = () => {
  return (
    <MainContainer heading="Profile">
      <ProfileDetails />
    </MainContainer>
  );
};

export default index;
