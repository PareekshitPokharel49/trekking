import type { Metadata } from "next";
import ShareHero from "@/app/components/ShareHero";
import ShareModel from "@/app/components/ShareModel";
import ShareTestimonial from "@/app/components/ShareTestimonial";
import ShareForm from "@/app/components/ShareForm";

export const metadata: Metadata = {
  title: "Share Your Experience — Call From Himalaya",
  description:
    "Submit your Nepal photos and footage. We license your visuals for ethical tourism and split every dollar 50/50 with frontline mountain relief.",
};

export default function ShareExperiencePage() {
  return (
    <>
      <ShareHero />
      <ShareModel />
      <ShareTestimonial />
      <ShareForm />
    </>
  );
}
