import React from "react";
import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";
import { MuiDivider, MuiNabvar } from "@/styles/StyledComponents";
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
    <MuiNabvar component="nav">
      <List component="ul">
        {NavItems.map((navItem) => (
          <Box component="li" key={navItem.id}>
            <Box sx={{ width: "100%", padding: "0 2.5rem" }}>
              <Typography
                component="span"
                variant="body2"
                sx={{
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
              <Box className="NavItem">
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
    </MuiNabvar>
  );
};

export default Index;
