import { Box, Container } from "@mui/material";
import { TheHeader } from "./TheHeader";
import { Outlet, CatchBoundary } from "@tanstack/react-router";
import { ErrorFallback } from "@/components/errors";
import { useState } from "react";

export const Layout = () => {
  const initialKey = "initial";
  const [resetKey, setResetKey] = useState(initialKey);

  const handleReset = () => {
    setResetKey((prevKey) => (prevKey === initialKey ? "reset" : initialKey));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TheHeader />

      <Container
        sx={{ padding: { xs: "0.4rem", sm: "1rem", md: "2rem" }, flex: "1 1 100%" }}
        maxWidth="lg"
        disableGutters
      >
        <CatchBoundary
          getResetKey={() => resetKey}
          errorComponent={() => <ErrorFallback onReset={handleReset} />}
        >
          <Outlet />
        </CatchBoundary>
      </Container>
    </Box>
  );
};
