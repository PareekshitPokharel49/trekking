"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { volunteerCountries, volunteerRoles } from "@/app/data/site";
import { submitForm } from "@/app/lib/submitForm";

const inputClass =
  "w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

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

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setError("");
    try {
      await submitForm("volunteer", form);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-700">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-bold text-stone-900">
          Application received
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Thank you for offering your time and skills. Our team will be in touch
          within a few days to talk through next steps.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 className="text-center text-2xl font-bold tracking-tight text-stone-900">
        Register Your Interest
      </h2>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            type="text"
            name="fullName"
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Email Address">
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Country of Origin">
          <select
            required
            name="country"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select your country
            </option>
            {volunteerCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-stone-700">
          Primary Skill or Area of Interest
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {volunteerRoles.map((role) => (
            <label
              key={role}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-700 transition-colors has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50"
            >
              <input
                type="radio"
                name="role"
                value={role}
                className="accent-brand-700"
              />
              {role}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <Field label="Why do you want to support Nepal?">
          <textarea
            name="motivation"
            rows={4}
            placeholder="Share a brief message about your motivation..."
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Submitting…" : "Submit Application"}
        {!sending && <span aria-hidden="true">→</span>}
      </button>

      <p className="mt-3 text-center text-xs text-stone-500">
        By submitting, you agree to our privacy policy regarding data usage.
      </p>
    </form>
  );
}
