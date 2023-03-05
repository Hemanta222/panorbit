import React from "react";
import List from "@mui/material/List";
import { Box, Stack, Typography } from "@mui/material";
import { MuiDivider } from "@/styles/StyledComponents";
import { useRouter } from "next/router";

const NavItems = [
  { id: 1001, title: "Profile", url: "/profile/1", path: "profile" },
  { id: 1002, title: "Posts", url: "/posts", path: "posts" },
  { id: 1003, title: "Gallery", url: "/gallery", path: "gallery" },
  { id: 1004, title: "ToDO", url: "/todo", path: "todo" },
];
const Index = () => {
  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];
  const routeChangeHandler = (url) => {
    router.push(url);
  };
  return (
    <Stack
      component="nav"
      sx={{
        background: `linear-gradient(0deg, rgba(95,58,200,1) 0%, rgba(51,95,200,1) 100%)`,
        color: "#fff",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <List sx={{ width: "270px" }} component="ul">
        {NavItems.map((navItem) => (
          <Box
            component="li"
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
            key={navItem.id}
          >
            <Box sx={{ width: "100%", padding: "0 2.5rem" }}>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: 500,
                  display: "inline-block",
                  padding: "1rem 0",
                  color:
                    navItem.path === currentPath ? "#fff" : "text.secondary",
                }}
                onClick={() => routeChangeHandler(navItem.url)}
              >
                {navItem.title}
              </Typography>
              <MuiDivider />
            </Box>
            {navItem.path === currentPath ? (
              <Box
                sx={{
                  width: "45px",
                  height: "50px",
                  color: "red",
                  position: "absolute",
                  right: -7,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "url(/list-arrow.svg) no-repeat",
                }}
              >
                <Box
                  component="img"
                  src="/right-arrow.png"
                  width={13}
                  height={13}
                  alt="arrow"
                />
              </Box>
            ) : null}
          </Box>
        ))}
      </List>
    </Stack>
  );
};

export default Index;
