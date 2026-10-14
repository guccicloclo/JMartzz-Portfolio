import { portrait } from '../../data/process';
import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import ArtImage from '../ArtImage/ArtImage';
import SectionHeading from '../SectionHeading/SectionHeading';
import './About.scss';

export default function About() {
  const { t, s } = useLanguage();
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <figure className="about__portrait">
          <ArtImage image={portrait.image} alt={t(portrait.alt)} sizes="(min-width: 900px) 35vw, 90vw" />
        </figure>
        <div className="about__copy">
          <SectionHeading id="about-title" kicker={s.about.kicker} title={s.about.title} />
          {site.bio.map((p) => (
            <p key={p.en}>{t(p)}</p>
          ))}
          <h3 className="about__goals-title">{s.about.goals}</h3>
          <ul className="about__goals">
            {site.goals.map((g) => (
              <li key={g.en}>{t(g)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
