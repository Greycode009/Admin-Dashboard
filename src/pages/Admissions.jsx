import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    title: "1. Submit your vision",
    description:
      "Share a two-minute video or portfolio highlighting your passions and impact.",
  },
  {
    title: "2. Discovery interview",
    description:
      "Meet with faculty mentors and explore which academy aligns with your goals.",
  },
  {
    title: "3. Immersive day",
    description:
      "Join an on-campus studio session and collaborate with future classmates.",
  },
  {
    title: "4. Welcome kit",
    description:
      "Receive your personalized learning map and onboarding support.",
  },
];

const Admissions = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Admissions"
          title="An admissions journey designed around your story"
          subtitle="We look beyond scores. Our admissions process helps us understand how you learn, create, and lead."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 p-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Scholarships & financial support
            </h3>
            <p className="text-sm text-slate-300">
              62% of Aurora students receive some form of aid. We offer merit, need,
              and impact scholarships that align with student passions.
            </p>
            <button className="rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200">
              Speak with admissions
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Early Decision",
                detail: "Priority review and guaranteed housing assignment.",
              },
              {
                title: "Global Scholars",
                detail: "Full-tuition awards for international changemakers.",
              },
              {
                title: "Transfer Excellence",
                detail: "Custom credit mapping and mentorship for transfers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
