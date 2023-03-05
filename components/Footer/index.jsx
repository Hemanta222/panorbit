import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Context } from "../layout";

const Index = () => {
  const [openList, setOpenList] = React.useState(false);
  const { users } = React.useContext(Context);
  const handleClick = () => {
    setOpenList(!openList);
  };
  const randomNumber = Math.floor(Math.random() * 10);

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto auto", sm: "50% auto", md: "78% auto" },
          maxWidth: 1600,
          margin: "0 auto",
        }}
      >
        <Box></Box>
        <Box>
          <List
            sx={{
              maxWidth: 280,
              maxHeight: 400,
              marginBottom: "-7px",
              bgcolor: "#2C65C8",
              padding: ".5rem auto",
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
              border: "1px solid #2C65C8",
            }}
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Box
                  component="img"
                  src="/chat-icon.svg"
                  width={30}
                  height={30}
                  alt="chat-icon"
                />
              </ListItemIcon>
              <ListItemText
                primary="Chats"
                sx={{
                  marginLeft: "-16px",
                  color: "#fff",
                  fontSize: "1.1rem",
                  letterSpacing: "0.02em",
                  paddingBottom: ".2rem",
                }}
              />

              <Box
                component="img"
                src="/right-arrow.png"
                width={16}
                height={16}
                sx={{ rotate: !openList ? "270deg" : "90deg" }}
              />
            </ListItemButton>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  backgroundColor: "ghostwhite",
                  maxHeight: 300,
                  overflowY: "scroll",
                }}
              >
                {users.map((user, i) => (
                  <ListItemButton
                    key={user.id}
                    sx={{ pl: 2 }}
                    onClick={handleClick}
                  >
                    <ListItemIcon>
                      <Box
                        component="img"
                        src={user.profilepicture}
                        sx={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={user.name} color="text.secondary" />
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          randomNumber % (i + 1) === 0 ? "#D4D4D4" : "#1DA757",
                      }}
                    ></Box>
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
