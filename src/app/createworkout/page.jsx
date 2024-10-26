"use client";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { exerciseTableHeaders } from "@/data/contants";
import { LibraryAdd } from "@mui/icons-material";
import { MuiAddExerciseButton } from "@/components/MUIStyled/mui-createworkout-components";
const page = () => {
  return (
    <Stack sx={{ mt: 8 }}>
      <Stack direction={"column"} gap={2}>
        <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
          <MuiAddExerciseButton startIcon={<LibraryAdd />} size="small">
            Add Exercise
          </MuiAddExerciseButton>
        </Stack>
        <Paper sx={{ height: "10rem" }}>
          <Stack
            direction={"row"}
            sx={{ px: 2, py: 2 }}
            justifyContent={"space-between"}
          >
            {exerciseTableHeaders.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Stack>
          <Divider sx={{ width: "100%" }} />
        </Paper>
      </Stack>
    </Stack>
  );
};

export default page;
