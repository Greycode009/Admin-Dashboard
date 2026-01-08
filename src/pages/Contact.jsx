import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Contact"
          title="Let’s plan your Aurora visit"
          subtitle="Reach out and our admissions team will reply within one business day."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[color:var(--muted)]">
                Full name
                <input
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="space-y-2 text-sm text-[color:var(--muted)]">
                Email address
                <input
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm"
                  placeholder="jordan@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-[color:var(--muted)]">
              Message
              <textarea
                className="min-h-[140px] w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm"
                placeholder="Tell us about your goals or tour preferences."
              />
            </label>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Send message
            </button>
          </form>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <h3 className="text-lg font-semibold">Admissions concierge</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                admissions@aurora.edu
                <br />
                +1 (415) 239-1010
              </p>
              <p className="mt-4 text-sm text-[color:var(--muted)]">
                321 Northbridge Ave
                <br />
                Arcadia, CA 94016
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Campus map overview"
              className="h-52 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
