const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-14 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-bold text-slate-900">
              A
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Aurora</p>
              <p className="text-lg font-semibold">Academy</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Aurora Academy is a future-focused school where curiosity becomes impact.
            Our global campus blends arts, science, and leadership to help students
            thrive in an ever-changing world.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              "Innovation Lab",
              "World Languages",
              "Wellness Studio",
              "Green Campus",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Academic Pathways</li>
              <li>Faculty & Staff</li>
              <li>Student Life</li>
              <li>Virtual Tour</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Admissions</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>How to Apply</li>
              <li>Scholarships</li>
              <li>International Students</li>
              <li>Financial Aid</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>admissions@aurora.edu</li>
              <li>+1 (415) 239-1010</li>
              <li>321 Northbridge Ave, Arcadia</li>
              <li>Mon-Fri, 8am-6pm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 md:flex-row">
          <p>© 2024 Aurora Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Accessibility</span>
            <span>Campus Safety</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
