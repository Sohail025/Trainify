const { Button } = require("@mui/material");
import { styled } from "@mui/material/styles";

import { alpha } from "@mui/system";

export const MuiAddExerciseButton = styled(Button)(({ theme }) => ({
  width: 130,
  height: 35,
  textTransform: "none",
  backgroundColor: alpha(theme.palette.primary.main, 0.8),
  color: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
  },
}));
