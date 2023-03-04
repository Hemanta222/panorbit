import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

//user imports
import { Context } from "../layout";
import {
  HeaderText,
  MuiDivider,
  ProfileTextSecondary,
} from "../../styles/StyledComponents";
import { useRouter } from "next/router";

const ProfileDetails = () => {
  const { currentUser, changeCurrentUser, users } = React.useContext(Context);
  const router = useRouter();

  //set selected user as current user
  React.useEffect(() => {
    if (router.isReady) {
      const { profileId } = router.query;
      const userIndex = users.findIndex((user) => user.id == profileId);
      changeCurrentUser(users[userIndex]);
    }
    /* eslint-disable */
  }, [router.isReady, router.query, users]);

  return (
    <Grid container spacing={2} sx={{ paddingTop: "2rem" }}>
      {/*  //###################### LEFT PART ######################// */}
      <Grid item xs={12} md={4}>
        <Stack gap={1} alignItems={{ xs: "left", sm: "center" }}>
          <Box
            component="img"
            src={currentUser?.profilepicture}
            width={200}
            height={200}
            alt={`${currentUser}_image`}
            style={{ borderRadius: "50%" }}
          />
          <HeaderText>{currentUser?.name}</HeaderText>
          <Grid container spacing={2}>
            {/* //------------Username----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Username :
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.username}</HeaderText>
            </Grid>
            {/* //------------email----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                email :{" "}
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.email}</HeaderText>
            </Grid>
            {/* //------------phone----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Phone :{" "}
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.phone}</HeaderText>
            </Grid>
            {/* //------------website----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Website :{" "}
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.website}</HeaderText>
            </Grid>
            {/* //------------Divider----------------// */}{" "}
            <Grid item xs={12}>
              <MuiDivider />
            </Grid>
            {/* //------------Company----------------// */}{" "}
            <Grid item xs={12}>
              <ProfileTextSecondary
                variant="body1"
                sx={{ fontSize: "20px", textAlign: "center" }}
              >
                Company
              </ProfileTextSecondary>
            </Grid>
            {/* //------------name----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                name :{" "}
              </ProfileTextSecondary>{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.company?.name}</HeaderText>
            </Grid>
            {/* //------------catchPhrase----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                catchPhrase :{" "}
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.company?.catchPhrase}</HeaderText>
            </Grid>
            {/* //------------bs----------------// */}
            <Grid item xs={12} sm={6}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                bs :{" "}
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={6}>
              <HeaderText>{currentUser?.company?.bs}</HeaderText>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={1}>
        <MuiDivider orientation="vertical" />
      </Grid>
      {/* //###################### RIGHT PART ######################// */}
      <Grid item xs={12} md={7}>
        <Stack sx={{ paddingLeft: "3rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ProfileTextSecondary variant="body1">
                Address :
              </ProfileTextSecondary>
            </Grid>
            {/* //---------------- Street ------------------ */}
            <Grid item xs={12} sm={3}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Street :
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={9}>
              <HeaderText>{currentUser?.address?.street}</HeaderText>
            </Grid>
            {/* //---------------- Suite ------------------ */}
            <Grid item xs={12} sm={3}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Suite :
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={9}>
              <HeaderText>{currentUser?.address?.suite}</HeaderText>
            </Grid>
            {/* //---------------- City ------------------ */}
            <Grid item xs={12} sm={3}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                City :
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={9}>
              <HeaderText>{currentUser?.address?.city}</HeaderText>
            </Grid>
            {/* //---------------- Zipcode ------------------ */}
            <Grid item xs={12} sm={3}>
              <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                Zipcode :
              </ProfileTextSecondary>
            </Grid>
            <Grid item xs={12} sm={9}>
              <HeaderText>{currentUser?.address?.zipcode}</HeaderText>
            </Grid>
            {/* //---------------- Image ------------------ */}

            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={11}>
              <Box
                sx={{
                  width: "100%",
                  height: "350px",
                  backgroundColor: "yellow",
                  position: "relative",
                  borderRadius: "1rem",
                }}
              >
                <Box
                  component="img"
                  src="/location-image.png"
                  alt="location"
                  style={{
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Typography color="text.secondary">Lat:&nbsp;</Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {currentUser?.address?.geo.lat}
                </Typography>
                <Typography color="text.secondary" sx={{ marginLeft: "1rem" }}>
                  Long:&nbsp;
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  {currentUser?.address?.geo.lng}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
