const links = ["Services", "Memberships", "Estimate", "Service Area", "FAQ", "Contact", "Privacy", "Terms"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 px-4 py-12 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-black text-hdm-text">Honey Do Man</p>
          <p className="mt-2 text-sm text-hdm-muted">Your local home maintenance team.</p>
          <p className="mt-2 text-sm font-semibold text-hdm-gold">409 / Golden Triangle Texas</p>
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-hdm-text">LINKS</p>
          <ul className="mt-3 space-y-2 text-sm text-hdm-muted">
            {links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-hdm-text">CONTACT</p>
          <p className="mt-3 text-sm text-hdm-muted">Phone: (346) 360-7235</p>
          <p className="mt-1 text-sm text-hdm-muted">Email: hello@honeydoman.com</p>
        </div>

        <div>
          <a href="#estimate" className="cta-primary w-full justify-center text-center">
            GET FREE ESTIMATE
          </a>
        </div>
      </div>
    </footer>
  );
}
