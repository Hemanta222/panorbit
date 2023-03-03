import React from "react";
import {
  Avatar,
  Box,
  Card,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Context } from "../layout";
import { LandingHeader, MuiDialog } from "@/styles/StyledComponents";
const Index = () => {
  const router = useRouter();

  const { users, loading } = React.useContext(Context);
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
    <Box
      sx={{
        background: `rgb(112,44,200)`,
        background: `linear-gradient(54deg, rgba(112,44,200,1) 0%, rgba(51,95,200,1) 100%)`,
        minHeight: "400px",
        // clipPath: `polygon(0 44%, 8% 47%,16% 47%, 34% 45%, 69% 56%, 87% 52%, 100% 44%, 100% 0, 0 0)`,
        paddingTop: "8rem",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: "1.5rem",
          }}
        >
          <LandingHeader variant="body1">Select an account</LandingHeader>

          <Box
            my={1}
            px={4}
            mr={1}
            sx={{ maxHeight: 400, overflowY: "scroll" }}
          >
            {users.map((user, i) => (
              <Stack key={user.id}>
                <Stack
                  direction="row"
                  gap={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: ".5rem 0",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`/profile/${user.id}`);
                  }}
                >
                  <Avatar sx={{ width: "35px", height: "35px" }}>
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
                <Divider sx={{ borderColor: "#d1d1d1" }} />
              </Stack>
            ))}
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Index;
