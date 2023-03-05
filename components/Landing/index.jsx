import React from "react";
import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  Container,
  DialogContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Context } from "../layout";
import {
  LandingHeader,
  MuiDialog,
  MuiLandingBox,
} from "@/styles/StyledComponents";
const Index = () => {
  const router = useRouter();
  const { users, loading, changePreviousUser } = React.useContext(Context);

  const routerChangeHandler = (id, index) => {
    if (index === users.length - 1) {
      changePreviousUser(users[0].id);
    } else {
      changePreviousUser(users[index + 1].id);
    }
    router.push(`/profile/${id}`);
  };

  if (loading) {
    return (
      <MuiDialog open={loading}>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </MuiDialog>
    );
  }

  return (
    <MuiLandingBox component="main">
      <Container maxWidth="sm">
        <Card id="Card">
          <LandingHeader variant="body1">Select an account</LandingHeader>

          <Box component="ul">
            {users.map((user, index) => (
              <Stack key={user.id} component="li">
                <Stack
                  component="div"
                  onClick={() => {
                    routerChangeHandler(user.id, index);
                  }}
                >
                  <Avatar id="Avatar">
                    <Image
                      src={user.profilepicture}
                      width={35}
                      height={35}
                      alt={`img_${user.name}`}
                    />
                  </Avatar>
                  <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
                    {user.name}
                  </Typography>
                </Stack>
                <Divider />
              </Stack>
            ))}
          </Box>
        </Card>
      </Container>
    </MuiLandingBox>
  );
};

export default Index;
