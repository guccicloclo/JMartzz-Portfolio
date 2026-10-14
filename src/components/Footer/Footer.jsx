import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.scss';

export default function Footer() {
  const { t, s } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="footer__note">{s.footer.note}</p>
        </div>
        <nav aria-label={s.footer.nav}>
          <ul className="footer__nav">
            {site.nav.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{t(label)}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <p className="container footer__copy">{s.footer.copy(new Date().getFullYear())}</p>
    </footer>
  );
}
