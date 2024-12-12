import { Typography } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <Typography fontSize="36px" textAlign="center">
        Hello World
      </Typography>
    );
  },
});
