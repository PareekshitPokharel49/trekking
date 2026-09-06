import type { Metadata } from "next";
import MissionHero from "@/app/components/MissionHero";
import OperatingPillars from "@/app/components/OperatingPillars";
import OpenForum from "@/app/components/OpenForum";
import MissionCta from "@/app/components/MissionCta";

export const metadata: Metadata = {
  title: "Our Mission & Purpose — Call From Himalaya",
  description:
    "Direct action, unbroken kinship — how we deliver unmediated crisis relief and community-guided rebuilding across the Himalayas.",
};

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <OperatingPillars />
      <OpenForum />
      <MissionCta />
    </>
  );
}
