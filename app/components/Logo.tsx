type LogoProps = {
  /** Tailwind size classes for the badge, e.g. "h-8 w-8". */
  className?: string;
};

// Small brand mark: a Himalayan ridgeline with a rising sun.
export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-lg bg-brand-700 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[62%] w-[62%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="17" cy="6.5" r="2.4" fill="#fff" fillOpacity="0.85" />
        <path
          d="M1.5 20 L8 8 L11.5 14 L14.5 9.5 L22.5 20 Z"
          fill="#fff"
        />
        <path
          d="M6.4 11 L8 8 L9.6 11 L8.5 11.6 L7.5 11 Z"
          fill="#b91c1c"
        />
      </svg>
    </span>
  );
}
