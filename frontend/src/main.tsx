import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#e2e8f0",
    },
    primary: {
      main: "#003134",
      contrastText: "#aec1c2",
    },
    secondary: {
      main: "#aec1c2",
      contrastText: "#003134",
    },
  },
});

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  const globalStyles = (
    <GlobalStyles
      styles={{
        html: { height: "100%" },
        body: { height: "100%" },
        "#root": { height: "100%" },
      }}
    />
  );

  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}
