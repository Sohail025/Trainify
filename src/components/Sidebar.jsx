"use client";
import {
  MuiSidebar,
  MuiSidebarButton,
} from "./MUIStyled/mui-layout-components";
import {
  AddBox,
  PlayCircle,
  TravelExplore,
  SportsGymnastics,
  AccountBox,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
const Sidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.appSlice);
  console.log(sidebarOpen);

  return (
    <MuiSidebar sidebarOpen={sidebarOpen}>
      <Stack direction={"row"} sx={{ justifyContent: "center" }}>
        <Image src={logo} width={90} />
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Stack direction={"column"} sx={{ alignItems: "center" }} gap={2}>
        <MuiSidebarButton startIcon={<AddBox />}>
          Create Workout
        </MuiSidebarButton>
        <MuiSidebarButton startIcon={<PlayCircle />}>
          Current Workout
        </MuiSidebarButton>
        <MuiSidebarButton startIcon={<TravelExplore />}>
          Browse Workout
        </MuiSidebarButton>
        <MuiSidebarButton startIcon={<SportsGymnastics />}>
          My Fitness
        </MuiSidebarButton>
      </Stack>
      <Stack direction={"row"} sx={{ justifyContent: "center" }}>
        <MuiSidebarButton
          startIcon={<AccountBox />}
          sx={{ width: 100, position: "fixed", bottom: "30px" }}
        >
          Profile
        </MuiSidebarButton>
      </Stack>
    </MuiSidebar>
  );
};

export default Sidebar;
