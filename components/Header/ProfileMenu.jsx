import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
//user imports
import { MuiDivider } from "@/styles/StyledComponents";
import { Context } from "../layout";

const ProfileMenu = ({
  handleClose,
  anchorEl,
  currentUser,
  open,
  previousUser,
}) => {
  const { users, changePreviousUser } = React.useContext(Context);
  const router = useRouter();

  const navigationHandler = (url) => {
    router.push(url);
    changePreviousUser(currentUser.id);
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        "& .MuiMenu-paper": {
          borderRadius: "1rem",
          backgroundColor: "#fff",
          boxShadow: "-1px 1px 18px 16px rgba(239, 239, 239, 0.749)",
          maxWidth: "300px",
          padding: "2rem",
          marginTop: ".5rem",
          textAlign: "center",
          justifyContent: "center",
          "& #imageAvatar": {
            margin: "auto",
          },
        },
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: "100px", height: "100px" }} id="imageAvatar">
            <Image
              src={currentUser?.profilepicture}
              width={100}
              height={100}
              alt={`img_${currentUser?.name}`}
            />
          </Avatar>
        </Grid>

        <Grid item xs={12}>
          <Typography color="text.primary" sx={{ fontSize: "17px" }}>
            {currentUser?.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="text.secondary">{currentUser?.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <MuiDivider />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={() => navigationHandler(`/profile/${previousUser.id}`)}
          >
            <Image
              src={previousUser?.profilepicture}
              width={35}
              height={35}
              alt="img_1"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <Typography variant="subTitle1">{previousUser?.name}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <MuiDivider />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
          >
            <Image
              src={users[3].profilepicture}
              width={35}
              height={35}
              alt="img_2"
              style={{ borderRadius: "50%", marginRight: "8px" }}
            />
            <Typography variant="subTitle1">{users[3].name}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Button
            disableElevation
            variant="contained"
            color="secondary"
            sx={{
              borderRadius: "2rem",
              textTransform: "initial",
              fontSize: "1rem",
              marginTop: "1rem",
            }}
            onClick={() => router.push("/")}
          >
            Sign out
          </Button>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default ProfileMenu;
