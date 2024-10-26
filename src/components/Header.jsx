"use client";

import { Stack, Typography } from "@mui/material";
import {
  MuiHeader,
  MuiProfileIcon,
  MuiProfileButton,
} from "./MUIStyled/mui-layout-components";
import SidebarOpenerButton from "./SidebarOpenerButton";
const Header = () => {
  return (
    <MuiHeader>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          px: 2,
        }}
      >
        <Stack direction={"row"} gap={1}>
          <SidebarOpenerButton />
          <Typography>Create Workout</Typography>
        </Stack>

        <MuiProfileButton direction={"row"}>
          <MuiProfileIcon />
          <Typography>Sohail</Typography>
        </MuiProfileButton>
      </Stack>
    </MuiHeader>
  );
};

export default Header;
