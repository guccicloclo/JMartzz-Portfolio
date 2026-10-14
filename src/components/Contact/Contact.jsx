import { Mail } from 'lucide-react';
import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Contact.scss';

export default function Contact() {
  const { s } = useLanguage();
  const instagram = site.socials.find((x) => x.id === 'instagram');

  return (
    <section className="section section--alt contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <SectionHeading id="contact-title" kicker={s.contact.kicker} title={s.contact.title} intro={s.contact.intro} />
        <div className="contact__actions">
          {instagram && (
            <a className="btn btn--primary" href={instagram.url} target="_blank" rel="noopener noreferrer">
              {s.contact.instagram} <span className="visually-hidden">({s.social.newTab})</span>
            </a>
          )}
          {site.email && (
            <a className="btn" href={`mailto:${site.email}`}>
              <Mail size={18} aria-hidden="true" /> {site.email}
            </a>
          )}
        </div>
        <SocialLinks showLabels className="contact__social" />
      </div>
    </section>
  );
}
