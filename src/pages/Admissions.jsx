import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    title: "1. Share your story",
    description: "Submit a short video or portfolio that highlights your passions.",
  },
  {
    title: "2. Admissions call",
    description: "Meet a counselor and explore the best pathway for you.",
  },
  {
    title: "3. Campus experience",
    description: "Join a studio session and connect with future classmates.",
  },
];

const Admissions = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks! Our admissions team will reach out within 24 hours.");
  };

  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Admissions"
          title="A clear, supportive admissions journey"
          subtitle="We focus on who you are, not just test scores. Our process is designed to be friendly and simple."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold">Request information</h3>
            <p className="text-sm text-[color:var(--muted)]">
              Tell us what you're interested in and we'll send guidance on next steps.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm text-[color:var(--muted)]">
                Full name
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm"
                  placeholder="Jordan Lee"
                />
              </label>
              <label className="block text-sm text-[color:var(--muted)]">
                Email
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm"
                  placeholder="jordan@email.com"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-900"
              >
                Send request
              </button>
              {status && <p className="text-sm text-[color:var(--accent)]">{status}</p>}
            </form>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
            alt="Students talking with advisors"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Admissions;
