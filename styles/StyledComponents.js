const { styled, Typography, Dialog, Divider } = require("@mui/material");

export const LandingHeader = styled(Typography)(({ theme }) => ({
  padding: "2.5rem 0",
  backgroundColor: "#f2f2f2",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.4rem",
}));
export const Header = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.4rem",
  color: theme.palette.text.primary,
}));
export const MuiDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-scrollPaper": {
    backgroundColor: "#fff",
    boxShadow: "unset",
  },
  "& .MuiPaper-root": {
    backgroundColor: "#fff",
    boxShadow: "unset",
  },
}));

export const ProfileTextSecondary = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.text.secondary,
}));
export const MuiDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#d1d1d1",
}));
