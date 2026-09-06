"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Container from "@/app/components/Container";
import { shareContentTypes, shareRegions, siteName } from "@/app/data/site";

const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

const optionClass =
  "flex cursor-pointer items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-700 transition-colors has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-stone-700">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function ShareForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend yet — capture intent locally and show confirmation.
    setSubmitted(true);
  }

  return (
    <section id="submit" className="scroll-mt-16 bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Join the Network
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Get Involved &amp; Submit Your Experience
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            Tell us about your footage, photos, or travel story. Our curation team
            will review your portfolio and send you the creator agreement and
            submission portal details.
          </p>
        </div>

        {submitted ? (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold text-stone-900">
              Submission received
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Thanks for sharing your work. Our curation team will review your
              portfolio and email you the creator agreement and portal details.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
            >
              Submit another experience
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name">
                <input
                  required
                  type="text"
                  name="fullName"
                  placeholder="e.g. Sophia Chen"
                  autoComplete="name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email Address">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="sophia@example.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </Field>
            </div>

            <fieldset className="mt-4">
              <legend className="text-sm font-medium text-stone-700">
                Primary Content Type
              </legend>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {shareContentTypes.map((type) => (
                  <label key={type} className={optionClass}>
                    <input
                      type="radio"
                      name="contentType"
                      value={type}
                      className="accent-brand-700"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-4">
              <legend className="text-sm font-medium text-stone-700">
                Regions Explored in Nepal{" "}
                <span className="font-normal text-stone-400">
                  (select all that apply)
                </span>
              </legend>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                {shareRegions.map((region) => (
                  <label key={region} className={optionClass}>
                    <input
                      type="checkbox"
                      name="regions"
                      value={region}
                      className="accent-brand-700"
                    />
                    {region}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-4">
              <Field label="Portfolio or Cloud Drive Link">
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Google Drive, Dropbox, Instagram, Vimeo, or personal website link"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Brief Story & Preferred Social Cause">
                <textarea
                  name="story"
                  rows={4}
                  placeholder="Tell us about the context of your footage and which relief causes you want to champion (e.g. high-altitude porter medical relief, Sherpa school rebuilds, Trishuli clean water)..."
                  className={`${inputClass} resize-y`}
                />
              </Field>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-stone-600">
              <input
                required
                type="checkbox"
                name="agree"
                className="mt-0.5 accent-brand-700"
              />
              <span>
                I understand and agree that content earnings will be divided
                equally (50/50) between creator compensation and {siteName}{" "}
                verified social relief projects, while I retain original ownership
                rights.
              </span>
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-stone-700"
            >
              Submit Your Experience &amp; Join Program
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </Container>
    </section>
  );
}
