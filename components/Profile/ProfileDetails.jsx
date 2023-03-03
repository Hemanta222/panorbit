import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";

//user imports
import { Context } from "../layout";
import {
  Header,
  MuiDivider,
  ProfileTextSecondary,
} from "../../styles/StyledComponents";

import ProfileMenu from "./ProfileMenu";

const ProfileDetails = () => {
  const { users } = React.useContext(Context);
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter();
  console.log("currentUser", currentUser);
  React.useEffect(() => {
    if (router.isReady) {
      const { profileId } = router.query;
      const userIndex = users.findIndex((user) => user.id == profileId);
      setCurrentUser(users[userIndex]);
    }
  }, [router.isReady, router.query, users]);
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "2rem 0",
        margin: "3rem auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "1.5rem",
        }}
      >
        <Header>Profile</Header>
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
            // onClick={() => {
            //   router.push(`/profile/${user.id}`);
            // }}
          >
            <Avatar sx={{ width: "35px", height: "35px" }}>
              <Image
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
      <MuiDivider />
      <Grid container spacing={2} sx={{ paddingTop: "2rem" }}>
        {/*  //###################### LEFT PART ######################// */}
        <Grid item xs={12} md={4}>
          <Stack gap={1} alignItems={{ xs: "left", sm: "center" }}>
            <Image
              src={currentUser?.profilepicture}
              width={200}
              height={200}
              alt={`${currentUser}_image`}
              style={{ borderRadius: "50%" }}
              priority
            />
            <Header>{currentUser?.name}</Header>
            <Grid container spacing={2}>
              {/* //------------Username----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  Username :
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.username}</Header>
              </Grid>
              {/* //------------email----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  email :{" "}
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.email}</Header>
              </Grid>
              {/* //------------phone----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  Phone :{" "}
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.phone}</Header>
              </Grid>
              {/* //------------website----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  Website :{" "}
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.website}</Header>
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
                <Header>{currentUser?.company?.name}</Header>
              </Grid>
              {/* //------------catchPhrase----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  catchPhrase :{" "}
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.company?.catchPhrase}</Header>
              </Grid>
              {/* //------------bs----------------// */}
              <Grid item xs={12} sm={6}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  bs :{" "}
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Header>{currentUser?.company?.bs}</Header>
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
                <Header>{currentUser?.address?.street}</Header>
              </Grid>
              {/* //---------------- Suite ------------------ */}
              <Grid item xs={12} sm={3}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  Suite :
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Header>{currentUser?.address?.suite}</Header>
              </Grid>
              {/* //---------------- City ------------------ */}
              <Grid item xs={12} sm={3}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  City :
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Header>{currentUser?.address?.city}</Header>
              </Grid>
              {/* //---------------- Zipcode ------------------ */}
              <Grid item xs={12} sm={3}>
                <ProfileTextSecondary variant="body1" sx={{ textAlign: "end" }}>
                  Zipcode :
                </ProfileTextSecondary>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Header>{currentUser?.address?.zipcode}</Header>
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
                  <Image
                    src="/location-image.png"
                    fill
                    alt="location"
                    style={{ borderRadius: "1rem" }}
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
                  <Typography
                    color="text.secondary"
                    sx={{ marginLeft: "1rem" }}
                  >
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
    </Container>
  );
};

export default ProfileDetails;
