import { Outlet, createRootRoute } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useTranslation } from "react-i18next";
import { Briefcase, House, User, Mail } from "lucide-react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), link: "#home", icon: House },
    { name: t("nav.about"), link: "#about", icon: User },
    { name: t("nav.work"), link: "#work", icon: Briefcase },
    { name: t("nav.contact"), link: "#contact", icon: Mail },
  ];

  return (
    <main className="flex flex-col px-5 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <NavBar navItems={navItems} />
        <Outlet />
      </div>
    </main>
  );
}
