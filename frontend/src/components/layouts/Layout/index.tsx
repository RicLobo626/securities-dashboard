import { Box, Container } from "@mui/material";
import { TheHeader } from "./TheHeader";
import { Outlet, CatchBoundary } from "@tanstack/react-router";
import { ErrorFallback } from "@/components/errors/ErrorFallback";
import { useState } from "react";

export const Layout = () => {
  const initialKey = "initial";
  const [resetKey, setResetKey] = useState(initialKey);

  const handleReset = () => {
    setResetKey((prevKey) => (prevKey === initialKey ? "reset" : initialKey));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TheHeader />

      <Container sx={{ padding: "2rem" }} maxWidth="lg">
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
