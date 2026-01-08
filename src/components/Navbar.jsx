import { NavLink } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Campus Life", to: "/campus-life" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-[color:var(--accent)]"
        : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-lg font-bold text-slate-900">
            A
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
              Aurora
            </p>
            <p className="text-lg font-semibold">Academy</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--text)]"
            type="button"
          >
            Student Portal
          </button>
          <button
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg"
            type="button"
          >
            Schedule a Tour
          </button>
          <button
            className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--muted)]"
            type="button"
            onClick={onToggleTheme}
          >
            {theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full border border-[color:var(--border)] p-2 text-[color:var(--text)] lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <button
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--text)]"
                type="button"
              >
                Student Portal
              </button>
              <button
                className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-slate-900"
                type="button"
              >
                Schedule a Tour
              </button>
              <button
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-sm text-[color:var(--muted)]"
                type="button"
                onClick={onToggleTheme}
              >
                {theme === "light" ? "Dark mode" : "Light mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
