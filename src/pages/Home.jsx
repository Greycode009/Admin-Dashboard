import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const stats = [
  { label: "Global learning partners", value: "42" },
  { label: "Innovation labs", value: "18" },
  { label: "Student-led clubs", value: "70+" },
  { label: "College placement", value: "98%" },
];

const pillars = [
  {
    title: "Future-Ready Academics",
    description:
      "Interdisciplinary programs combine AI, humanities, and sustainability with studio-based learning.",
  },
  {
    title: "Signature Mentorship",
    description:
      "Every student is paired with a faculty mentor and industry guide to chart a personalized path.",
  },
  {
    title: "Wellness & Belonging",
    description:
      "Mindfulness labs, movement studios, and peer circles keep students grounded and inspired.",
  },
];

const programs = [
  "Global Leadership & Diplomacy",
  "Creative Computing Studio",
  "BioDesign & Health Sciences",
  "Civic Innovation Lab",
  "Performing Arts Conservatory",
  "Athletics & Sports Science",
];

const Home = () => {
  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden px-6 pb-16 pt-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_rgba(15,23,42,0.9)_55%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Ranked #1 for future skills in the region
            </div>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">
              The school where curiosity becomes a superpower.
            </h1>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              Aurora Academy is a next-generation school designed for bold learners. Our
              immersive campus blends technology, arts, and leadership so every student
              builds a portfolio that shines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30">
                Book a Discovery Tour
              </button>
              <Link
                to="/admissions"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50"
              >
                Explore Admissions
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
                >
                  <p className="text-2xl font-semibold text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-6 rounded-[40px] bg-gradient-to-b from-cyan-500/30 via-transparent to-violet-500/30 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-slate-900 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                    Live Campus Feed
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Student innovators are prototyping a solar drone for coastal cleanups.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <h3 className="text-base font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-5">
                  <p className="text-sm text-cyan-100">
                    Upcoming: Aurora Summit Week — a five-day festival of research
                    showcases, performances, and global speakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            kicker="What makes us different"
            title="A campus engineered for possibility"
            subtitle="From flexible studios to our skybridge library, everything is designed to keep students in their creative flow."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Immersive Learning",
                description:
                  "Mixed-reality classrooms, podcast labs, and maker bays turn lessons into experiences.",
              },
              {
                title: "Global Faculty Network",
                description:
                  "Guest mentors from NASA, UNESCO, and top design studios co-teach our signature intensives.",
              },
              {
                title: "Personalized Pathways",
                description:
                  "Students can build their own combinations of majors, minors, and micro-credentials.",
              },
              {
                title: "Career Launchpad",
                description:
                  "Every learner graduates with a portfolio, internship placements, and leadership coaching.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/70 p-10">
          <SectionHeading
            kicker="Programs"
            title="Signature academies that blur boundaries"
            subtitle="Choose from future-focused academies that mix science, creativity, and leadership."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <p className="text-sm font-medium text-white">{program}</p>
                <span className="text-cyan-300">→</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/academics"
              className="rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200"
            >
              Explore Academics
            </Link>
            <Link
              to="/campus-life"
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-200"
            >
              Discover Campus Life
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              kicker="Student voices"
              title="“We came for the academics and stayed for the community.”"
              subtitle="Every student finds their people here — from the ocean restoration club to the symphonic gaming orchestra."
            />
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p>
                “Aurora helped me publish my first research paper before graduation. I
                felt supported by mentors who truly listened.”
              </p>
              <p className="text-cyan-200">— Lina M., Class of 2024</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-violet-500/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                Next event
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Night of Innovation Showcase
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                Join us on April 22 for student demos, music, and immersive media.
              </p>
              <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white">
                Reserve a seat
              </button>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-300">
                1:7 student to faculty ratio · 100% counseling availability · 24/7
                smart campus support
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  "Immersive Studios",
                  "Eco Campus",
                  "Global Exchange",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
