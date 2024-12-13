import { Box, Container } from "@mui/material";
import { TheHeader } from "./TheHeader";
import { Outlet } from "@tanstack/react-router";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TheHeader />

      <Container sx={{ padding: "2rem", height: "100%" }} maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  );
};
