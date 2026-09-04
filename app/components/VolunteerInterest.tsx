import Container from "@/app/components/Container";
import VolunteerForm from "@/app/components/VolunteerForm";
import { volunteerSkills, type VolunteerSkill } from "@/app/data/site";

function SkillIcon({ name }: { name: VolunteerSkill["icon"] }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "medical") {
    return (
      <svg {...props}>
        <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 4-6.32" />
        <path d="M12 21s7-4.35 7-10a7 7 0 0 0-4-6.32" />
        <path d="M12 8v6M9 11h6" />
      </svg>
    );
  }

  if (name === "logistics") {
    return (
      <svg {...props}>
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="17.5" cy="17.5" r="1.5" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}

export default function VolunteerInterest() {
  return (
    <section id="register" className="scroll-mt-16 bg-stone-50 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Volunteer
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            The impact of your skills
          </h2>
          <p className="mt-4 leading-relaxed text-stone-600">
            International volunteers are vital to accelerating local initiatives.
            By sharing your expertise, you directly contribute to sustainable
            development in rural Nepali villages.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {volunteerSkills.map((skill) => (
              <div
                key={skill.title}
                className={`rounded-2xl border border-stone-200 bg-white p-5 ${
                  skill.icon === "teaching"
                    ? "sm:col-span-2 sm:flex sm:items-start sm:gap-4"
                    : ""
                }`}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <SkillIcon name={skill.icon} />
                </div>
                <div className="mt-3 sm:mt-0">
                  <h3 className="font-bold text-stone-900">{skill.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-1">
          <VolunteerForm />
        </div>
      </Container>
    </section>
  );
}
