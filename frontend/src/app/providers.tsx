import { ApolloClientProvider } from "@/app/apollo";
import { AppThemeProvider } from "@/app/mui";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ApolloClientProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ApolloClientProvider>
  );
};
