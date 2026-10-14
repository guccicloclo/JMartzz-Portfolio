import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import './Header.scss';

export default function Header() {
  const { lang, setLang, t, s } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const otherLang = lang === 'fr' ? 'en' : 'fr';

  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__inner">
        <a className="header__brand" href="#top" onClick={() => setOpen(false)}>
          {site.name}
        </a>
        <nav id="primary-nav" className={`header__nav ${open ? 'is-open' : ''}`} aria-label={s.header.primaryNav}>
          <ul>
            {site.nav.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <button
            type="button"
            className="header__lang"
            lang={otherLang}
            aria-label={s.header.switchLabel}
            onClick={() => setLang(otherLang)}
          >
            {s.header.switchText}
          </button>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? s.header.closeMenu : s.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
