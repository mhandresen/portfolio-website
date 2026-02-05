import { faBriefcase, faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { NavBar } from "../components/nav-bar";
import { useTranslation } from "react-i18next";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const { t } = useTranslation();

  const navItems = [
    { name: t("nav.home"), link: "#home", icon: faHouse },
    { name: t("nav.about"), link: "#about", icon: faUser },
    { name: t("nav.work"), link: "#work", icon: faBriefcase },
    { name: t("nav.contact"), link: "#contact", icon: faEnvelope },
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
