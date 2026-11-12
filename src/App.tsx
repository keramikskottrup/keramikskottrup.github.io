document.documentElement.lang = "da";
document.title = "Keramik Skottrup";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/keramik_skoettrup/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61581062348077",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          className="fill-current stroke-none"
          d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H8V13h2.8v8"
        />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <div className="grain" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="page-title">
        <div className="photo-panel">
          <img
            className="studio-photo"
            src={`${import.meta.env.BASE_URL}assets/keramik-i-ovn.jpg`}
            alt="Håndlavet keramik med små flag klar til brænding i ovnen"
          />
          <div className="photo-shade" />
          <div className="maker-mark">
            <img
              src={`${import.meta.env.BASE_URL}assets/keramik-skottrup-logo.jpg`}
              alt="Keramik Skottrup"
            />
          </div>
        </div>

        <div className="content-panel">
          <header>
            <p className="eyebrow">
              <span />
              Håndlavet keramik
            </p>
            <h1 id="page-title">
              Keramik <em>Skøttrup</em>
            </h1>
          </header>

          <nav aria-label="Links til Keramik Skottrup">
            {links.map((link) => (
              <a
                className="social-link"
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="link-icon">{link.icon}</span>
                <strong>{link.label}</strong>
                <span className="arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

    </main>
  );
}
