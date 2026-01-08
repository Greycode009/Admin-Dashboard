import SectionHeading from "../components/SectionHeading";

const updates = [
  {
    title: "Aurora students win global sustainability challenge",
    date: "March 12, 2024",
    summary:
      "A multi-disciplinary team designed a low-cost water purification kit for rural communities.",
  },
  {
    title: "New AI ethics institute opens on campus",
    date: "February 28, 2024",
    summary:
      "The institute will host visiting researchers and a public lecture series for the city.",
  },
  {
    title: "Campus orchestra performs in immersive dome",
    date: "January 18, 2024",
    summary:
      "Students blended live music with generative visuals for a sold-out showcase.",
  },
];

const events = [
  {
    title: "Future Skills Open House",
    detail: "April 3 · Hybrid",
  },
  {
    title: "Innovation Hack Week",
    detail: "April 22-26 · On campus",
  },
  {
    title: "Global Alumni Summit",
    detail: "May 10 · Virtual",
  },
];

const News = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="News & stories"
          title="Highlights from our vibrant community"
          subtitle="Stay up to date with Aurora achievements, campus events, and thought leadership."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                {update.date}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-white">{update.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{update.summary}</p>
              <button className="mt-4 text-sm font-semibold text-cyan-200">
                Read story →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">Upcoming events</h3>
            <p className="text-sm text-slate-300">
              Join us for immersive workshops, live showcases, and global speaker
              series that highlight student talent.
            </p>
            <button className="rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200">
              View event calendar
            </button>
          </div>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h4 className="text-base font-semibold text-white">{event.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{event.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
