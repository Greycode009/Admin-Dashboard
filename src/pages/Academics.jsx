import SectionHeading from "../components/SectionHeading";

const schools = [
  {
    title: "School of Global Futures",
    description:
      "Diplomacy, languages, and systems thinking for tomorrow's changemakers.",
  },
  {
    title: "School of Creative Technology",
    description:
      "AI storytelling, immersive media, and creative computing studios.",
  },
  {
    title: "School of Health & BioDesign",
    description:
      "Biology, health innovation, and human-centered design labs.",
  },
  {
    title: "School of Performing Arts",
    description:
      "Conservatory-style training with interdisciplinary collaborations.",
  },
];

const Academics = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Academics"
          title="Curriculum that adapts to every learner"
          subtitle="Aurora's modular schedule blends seminars, studio intensives, and independent research. Students can tailor their week to match their goals."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {schools.map((school) => (
            <div
              key={school.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{school.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{school.description}</p>
              <button className="mt-4 text-sm font-semibold text-cyan-200">
                View pathways →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Signature learning experiences
              </h3>
              <p className="text-sm text-slate-300">
                Each term features intensive studio weeks, global capstones, and
                leadership residencies that culminate in public showcases.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Industry Micro-credentials",
                  "Capstone Research",
                  "Community Apprenticeships",
                  "Global Summit",
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
            <div className="space-y-4">
              {[
                {
                  title: "Academic Flex",
                  description:
                    "Students build schedules with faculty coaches each quarter.",
                },
                {
                  title: "Digital Badging",
                  description:
                    "Certify skills in design thinking, data science, and leadership.",
                },
                {
                  title: "Honors Innovation",
                  description:
                    "A four-year studio where students launch ventures and research.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
