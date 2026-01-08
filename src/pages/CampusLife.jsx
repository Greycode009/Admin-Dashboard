import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    title: "Creative District",
    description:
      "Black box theaters, recording suites, and a digital fashion runway power student artistry.",
  },
  {
    title: "Athletics & Movement",
    description:
      "Olympic-size pool, rooftop track, and adaptive sports programming.",
  },
  {
    title: "Residential Villages",
    description:
      "Living-learning communities with wellness lounges and global cuisine kitchens.",
  },
  {
    title: "Student-Led Clubs",
    description:
      "From climate action coalitions to esports leagues, students build belonging.",
  },
];

const CampusLife = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Campus life"
          title="A campus that feels like a creative city"
          subtitle="Aurora is alive at every hour with performances, research jams, and wellness experiences that keep students connected."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">Wellbeing & safety</h3>
            <p className="text-sm text-slate-300">
              Aurora offers 24/7 campus safety, wellness coaches, and quiet recharge
              zones in every building. Students have direct access to counselors and
              digital health resources.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Mental Health Concierge",
                "Smart Campus Alerts",
                "Meditation Atrium",
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
                title: "Food & Nutrition",
                description:
                  "Chef-curated menus, plant-forward options, and community kitchens.",
              },
              {
                title: "Green Spaces",
                description:
                  "Botanical courtyards and rooftop gardens for outdoor study and events.",
              },
              {
                title: "Mobility",
                description:
                  "On-campus bikes, electric shuttles, and accessible transit routes.",
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
      </section>
    </div>
  );
};

export default CampusLife;
