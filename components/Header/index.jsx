import { HeaderText } from "@/styles/StyledComponents";
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
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "1.5rem",
      }}
    >
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
        <Stack
          direction="row"
          gap={2}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: ".5rem 0",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Avatar sx={{ width: "35px", height: "35px" }}>
            <Box
              component="img"
              src={currentUser?.profilepicture}
              width={35}
              height={35}
              alt={`img_${currentUser?.name}`}
            />
          </Avatar>
          <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
            {currentUser?.name}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Index;
