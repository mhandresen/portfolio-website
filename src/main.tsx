import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/theme-provider";

const router = createRouter({
  routeTree,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
