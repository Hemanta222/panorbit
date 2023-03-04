import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3D56C8",
      dark: "#2a3c8c",
      light: "#6377d3",
    },
    secondary: {
      main: "#D55151",
      dark: "#953838",
      light: "#dd7373",
      contrastText: "#fff",
    },
    text: {
      primary: "#646464",
      secondary: "#A0A0A0",
      disabled: "rgba(0, 0, 0, 0.1)",
      contrastText: "#000",
    },
    background: {
      paper: "#FAFAFA",
      default: "#FAFAFA",
    },
  },
});
