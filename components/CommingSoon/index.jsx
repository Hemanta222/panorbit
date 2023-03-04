import { Box, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "#EEEEEE", fontSize: "5rem", fontWeight: 800 }}
      >
        Coming Soon
      </Typography>
    </Box>
  );
};

export default index;
