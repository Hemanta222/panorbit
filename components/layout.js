import React, { useState, createContext } from "react";
import {
  Box,
  Container,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

//user imports
import { theme } from "../styles/MuiTheme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Context = createContext();

const Layout = ({ children }) => {
  let customTheme = responsiveFontSizes(theme);
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [previousUser, setPreviousUser] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter();
  //fetching users from api
  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}`)
      .then((response) => {
        const { users } = response.data;
        setUsers(users);
        setPreviousUser(users[2]);
        setCurrentUser(users[0]);
        setloading(false);
      })
      .catch((err) => {
        console.log("failed to fetch user! reason : ", err.message);
        setloading(false);
      });
  }, []);

  //used to change between users when clicked on the profile menu (users list)
  const changePreviousUser = (userId) => {
    const user = users.find((user) => user.id == userId);
    setPreviousUser(user);
  };
  // set selected user as current user from account list card
  const changeCurrentUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <Context.Provider
      value={{
        users: users,
        loading: loading,
        previousUser: previousUser,
        changePreviousUser: changePreviousUser,
        currentUser: currentUser,
        changeCurrentUser: changeCurrentUser,
      }}
    >
      <ThemeProvider theme={customTheme}>
        <Box>
          {router.pathname === "/" ? (
            children
          ) : (
            <Container
              maxWidth="xl"
              sx={{
                marginTop: "3rem",
                minHeight: "90vh",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Navbar />
                <main>{children}</main>
              </Box>
              <Footer />
            </Container>
          )}
        </Box>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default Layout;
