import { TheHeader } from "./TheHeader";
import { Outlet } from "@tanstack/react-router";

export const Layout = () => {
  return (
    <>
      <TheHeader />

      <main>
        <Outlet />
      </main>
    </>
  );
};
