import SectionHeading from "../components/SectionHeading";

const updates = [
  {
    title: "Students win global sustainability challenge",
    date: "March 12, 2024",
    summary: "A team designed a low-cost water purification kit for rural communities.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "New AI ethics institute opens",
    date: "February 28, 2024",
    summary: "The institute hosts visiting researchers and public lecture series.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Campus orchestra performs in immersive dome",
    date: "January 18, 2024",
    summary: "Students blended live music with generative visuals for a sold-out show.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  },
];

const News = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="News"
          title="Latest highlights from Aurora"
          subtitle="Simple, quick updates so families can stay in the loop."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]"
            >
              <img
                src={update.image}
                alt={update.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
                  {update.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{update.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {update.summary}
                </p>
                <button className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
                  Read story →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
