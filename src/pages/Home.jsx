import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const stats = [
  { label: "Student-faculty ratio", value: "1:8" },
  { label: "College placement", value: "98%" },
  { label: "Labs & studios", value: "20" },
  { label: "Global partners", value: "40+" },
];

const highlights = [
  {
    title: "Project-based learning",
    description:
      "Every term ends with a public showcase, portfolio, or community impact project.",
  },
  {
    title: "Personal mentors",
    description:
      "Students work with academic coaches and industry guides each quarter.",
  },
  {
    title: "Wellness support",
    description:
      "On-campus counselors, quiet zones, and wellness programming every day.",
  },
];

const Home = () => {
  return (
    <div className="space-y-20">
      <section className="px-6 pb-12 pt-6">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--accent-soft)] px-4 py-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              A modern school built for future-ready learners
            </div>
            <h1 className="text-4xl font-semibold md:text-6xl">
              Aurora Academy blends creativity, science, and leadership.
            </h1>
            <p className="text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              Our campus helps students explore bold ideas, build real portfolios, and
              graduate with confidence. Learn through studios, global collaborations,
              and caring mentors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-slate-900">
                Book a campus tour
              </button>
              <Link
                to="/admissions"
                className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold"
              >
                Explore admissions
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-4"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
              alt="Students collaborating in a modern campus space"
              className="h-full w-full rounded-[32px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          kicker="Why Aurora"
          title="A simple, supportive learning experience"
          subtitle="We keep the experience clear and focused so students can spend their time building what matters."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="Signature programs"
              title="Choose a pathway that fits your ambition"
              subtitle="Flexible pathways help students build deep expertise in areas they care about most."
            />
            <div className="flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
              {[
                "Global Leadership",
                "Creative Technology",
                "Health Sciences",
                "Performing Arts",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]"
            >
              Explore academics →
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
            alt="Students collaborating in a studio"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface)] p-8">
            <SectionHeading
              kicker="Student story"
              title="“I built a portfolio before graduation.”"
              subtitle="Aurora helped me turn ideas into impact with mentors who cared about my goals."
            />
            <p className="mt-6 text-sm text-[color:var(--muted)]">
              — Lina M., Class of 2024
            </p>
          </div>
          <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-8">
            <h3 className="text-xl font-semibold">Next campus event</h3>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Future Skills Open House · April 3 · Hybrid
            </p>
            <button className="mt-6 rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold">
              Reserve a seat
            </button>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80"
              alt="Students attending a campus event"
              className="mt-6 h-44 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
