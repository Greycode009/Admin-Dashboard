import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Contact"
          title="Let’s plan your Aurora visit"
          subtitle="We’re ready to welcome you to campus or connect virtually. Reach out and our admissions concierge will follow up within 24 hours."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Full name
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Email address
                <input
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                  placeholder="jordan@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-slate-200">
              Program interest
              <select className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
                <option>Global Futures</option>
                <option>Creative Technology</option>
                <option>BioDesign</option>
                <option>Performing Arts</option>
              </select>
            </label>
            <label className="mt-4 block space-y-2 text-sm text-slate-200">
              Message
              <textarea
                className="min-h-[140px] w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                placeholder="Tell us about your goals, questions, or tour preferences."
              />
            </label>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Send message
            </button>
          </form>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">Admissions concierge</h3>
              <p className="mt-3 text-sm text-slate-300">
                admissions@aurora.edu
                <br />
                +1 (415) 239-1010
              </p>
              <p className="mt-4 text-sm text-slate-300">
                321 Northbridge Ave
                <br />
                Arcadia, CA 94016
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-violet-500/10 p-6">
              <h3 className="text-lg font-semibold text-white">Campus tour hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Monday - Friday: 9am - 5pm</li>
                <li>Saturday: 10am - 2pm</li>
                <li>Virtual tours daily at 6pm</li>
              </ul>
              <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white">
                Book a tour slot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
