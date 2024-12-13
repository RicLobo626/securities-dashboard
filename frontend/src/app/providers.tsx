import { ApolloClientProvider } from "@/app/apollo";
import { AppThemeProvider, globalStyles } from "@/app/mui";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ApolloClientProvider>
      <AppThemeProvider>
        <CssBaseline />
        {globalStyles}
        {children}
      </AppThemeProvider>
    </ApolloClientProvider>
  );
};
