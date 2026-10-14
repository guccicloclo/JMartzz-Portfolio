import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import SocialIcon from './SocialIcon';
import './SocialLinks.scss';

export default function SocialLinks({ className = '', showLabels = false }) {
  const { s } = useLanguage();
  return (
    <ul className={`social-links ${className}`} aria-label={s.social.listLabel}>
      {site.socials.map(({ id, label, handle, url }) => (
        <li key={id}>
          <a
            className="social-links__link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={showLabels ? undefined : `${label} (${s.social.newTab})`}
          >
            <SocialIcon name={id} />
            {showLabels && (
              <span className="social-links__text">
                <span className="social-links__label">{label}</span>
                <span className="social-links__handle">{handle}</span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
