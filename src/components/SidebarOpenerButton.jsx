"use client";
import { Stack } from "@mui/material";
import { Dehaze } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { SidebarOpener } from "@/store/appSlice";
const SidebarOpenerButton = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => dispatch(SidebarOpener())}
    >
      <Stack
        sx={{
          bgcolor: theme.palette.primary.main,
          px: 0.4,
          borderRadius: "0.2rem",
          cursor: "pointer",
        }}
      >
        <Dehaze sx={{ color: "white" }} />
      </Stack>
    </Stack>
  );
};

export default SidebarOpenerButton;
