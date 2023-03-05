const {
  styled,
  Typography,
  Dialog,
  Divider,
  Stack,
  Box,
  Container,
} = require("@mui/material");
let width = "270px";
export const HeaderText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.3rem",
  color: theme.palette.text.primary,
}));

export const ProfileTextSecondary = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.text.secondary,
}));
export const MuiDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#d1d1d1",
}));

//Landing Component
export const MuiLandingBox = styled(Box)(({ theme }) => ({
  paddingTop: "8rem",
  paddingBottom: "8rem",
  background: 'url("/landing-background.svg") no-repeat',
  maxWidth: "1600px",
  margin: "auto",
  "& #Card": {
    borderRadius: "1.5rem",
  },
  "& #Card > ul": {
    maxHeight: 400,
    zIndex: 88,
    overflowY: "scroll",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginRight: "1rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
  },
  "& #Card > ul > li div": {
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
    padding: ".5rem 0",
    cursor: "pointer",
  },
  "& #Avatar": {
    width: "35px",
    height: "35px",
  },
}));
export const LandingHeader = styled(Typography)(({ theme }) => ({
  padding: "2.5rem 0",
  backgroundColor: "#f2f2f2",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.4rem",
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

//NavBar Component
export const MuiNabvar = styled(Stack)(({ theme }) => ({
  background: `linear-gradient(0deg, rgba(95,58,200,1) 0%, rgba(51,95,200,1) 100%)`,
  color: "#fff",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  "& span": {
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 500,
    display: "inline-block",
    padding: "1rem 0",
  },
  "& > ul": {
    width: width,
  },
  "& > ul li": {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  "& .NavItem": {
    width: "45px",
    height: "50px",
    color: "red",
    position: "absolute",
    right: -7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "url(/list-arrow.svg) no-repeat",
  },
}));

//CommingSoon Component
export const MuiCommingSoonBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  "& > p": {
    color: "#EEEEEE",
    fontSize: "5rem",
    fontWeight: 800,
    textAlign: "center",
  },
}));
//Layout Component
export const MuiLayoutContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  minHeight: "90vh",
  "& > div": {
    display: "flex",
    flexDirection: "row",
  },
}));
//MainContainer Component
export const MuiMainBox = styled(Box)(({ theme }) => ({
  padding: ".5rem 2.5rem",
  marginBottom: "3rem",
  width: `calc(100vw - ${width})`,
  minHeight: "99vh",
  position: "relative",
}));
//Header Component
export const MuiHeaderBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "1.5rem",
  "& #Menu_avatar": {
    width: "35px",
    height: "35px",
    "&>img": {
      width: "35px",
      height: "35px",
    },
  },
  "& #Menu": {
    display: "flex",
    alignItems: "center",
    padding: ".5rem 0",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
  },
}));
