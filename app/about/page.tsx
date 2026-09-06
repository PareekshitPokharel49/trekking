import type { Metadata } from "next";
import AboutHero from "@/app/components/AboutHero";
import OperatingPillars from "@/app/components/OperatingPillars";
import OpenForum from "@/app/components/OpenForum";
import AboutCta from "@/app/components/AboutCta";

export const metadata: Metadata = {
  title: "About Us — Call From Himalaya",
  description:
    "Direct action, unbroken kinship — how we deliver unmediated crisis relief and community-guided rebuilding across the Himalayas.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OperatingPillars />
      <OpenForum />
      <AboutCta />
    </>
  );
}
