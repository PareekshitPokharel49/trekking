import type { Metadata } from "next";
import VolunteerHero from "@/app/components/VolunteerHero";
import VolunteerInterest from "@/app/components/VolunteerInterest";

export const metadata: Metadata = {
  title: "Volunteer — Call From Himalaya",
  description:
    "Join our humanitarian missions in rural Nepal — medical, logistics, teaching, and general support.",
};

export default function VolunteerPage() {
  return (
    <>
      <VolunteerHero />
      <VolunteerInterest />
    </>
  );
}
