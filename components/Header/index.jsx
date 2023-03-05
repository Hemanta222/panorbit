import { HeaderText, MuiHeaderBox } from "@/styles/StyledComponents";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Context } from "../layout";
import ProfileMenu from "./ProfileMenu";

const Index = ({ heading }) => {
  const { currentUser, previousUser } = React.useContext(Context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MuiHeaderBox component="header">
      {open ? (
        <ProfileMenu
          handleClose={handleClose}
          anchorEl={anchorEl}
          open={open}
          currentUser={currentUser}
          previousUser={previousUser}
        />
      ) : null}
      <HeaderText>{heading}</HeaderText>
      <Stack>
        <Stack id="Menu" onClick={handleClick}>
          <Avatar id="Menu_avatar">
            <Box
              component="img"
              src={currentUser?.profilepicture}
              alt={`img_${currentUser?.name}`}
            />
          </Avatar>
          <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
            {currentUser?.name}
          </Typography>
        </Stack>
      </Stack>
    </MuiHeaderBox>
  );
};

export default Index;
