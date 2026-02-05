import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/sections/hero-section";
import { SkillsSection } from "../components/sections/skills";
import { Footer } from "../components/footer";
import {ProjectsSection} from "../components/projects-section";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
