import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, Stack, Box } from "@mui/material";
import { alpha } from "@mui/system";

export const MuiHeader = styled(Paper)(({ theme }) => ({
  height: "4rem",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  borderRadius: "10px",
  borderRadius: "0",
}));

export const MuiSidebar = styled(Stack)(({ theme, sidebarOpen }) => ({
  width: sidebarOpen ? "0%" : "20%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: theme.palette.primary.main,
}));

export const MuiMainPart = styled(Stack)(({ theme, sidebarOpen }) => ({
  flexGrow: 1,
  backgroundColor: alpha(theme.palette.secondary.main, 0.02),
}));

export const MuiPage = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export const MuiSidebarButton = styled(Button)(({ theme }) => ({
  justifyContent: "flex-start",
  textAlign: "left",
  paddingLeft: 15,
  textTransform: "none",
  width: 210,
  borderRadius: 8,
  color: "white",
  backgroundColor: alpha("#ffffff", 0.15),
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  },
}));

export const MuiProfileIcon = styled(Box)(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  backgroundColor: alpha(theme.palette.primary.main, 0.8),
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  },
}));

export const MuiProfileButton = styled(Stack)(({ theme }) => ({
  direction: "row",
  gap: 10,
  paddingLeft: 9,
  alignItems: "center",
  width: 170,
  height: 50,
  borderRadius: "4rem",
  border: alpha(theme.palette.primary.main, 0.8),
  border: "0.2px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  },
  cursor: "pointer",
}));
