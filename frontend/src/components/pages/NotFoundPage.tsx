import { Home, SentimentVeryDissatisfied } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: "1.6rem",
            sm: "3rem",
          },
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        404 Not Found
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.4rem",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        The page you are looking for does not exist.{" "}
        <SentimentVeryDissatisfied fontSize="large" aria-hidden="true" />
      </Typography>

      <Button
        component={Link}
        startIcon={<Home />}
        to="/"
        variant="contained"
        sx={{ marginBlockStart: "1rem" }}
      >
        Back to Home
      </Button>
    </Box>
  );
};
