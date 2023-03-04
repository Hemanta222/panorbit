import { Box } from "@mui/material";
import React from "react";

import Header from "../Header";
import { MuiDivider } from "../../styles/StyledComponents";
const todo = ({ children, heading }) => {
  return (
    <Box
      component="main"
      sx={{
        padding: ".5rem 2.5rem",
        width: "100%",
        position: "relative",
      }}
    >
      <Header heading={heading} />
      <MuiDivider />
      {children}
    </Box>
  );
};

export default todo;
