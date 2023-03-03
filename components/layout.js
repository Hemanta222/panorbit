import React, { useState, createContext } from "react";
import { responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "../styles/MuiTheme";
import axios from "axios";

export const Context = createContext();
const Layout = ({ children }) => {
  let customTheme = responsiveFontSizes(theme);
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}`)
      .then((response) => {
        setUsers(response.data.users);
        setloading(false);
      })
      .catch((err) => {
        console.log("failed to fetch user! reason : ", err.message);
        setloading(false);
      });
  }, []);

  return (
    <Context.Provider value={{ users: users, loading: loading }}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
    </Context.Provider>
  );
};

export default Layout;
