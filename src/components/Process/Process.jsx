import { processSets } from '../../data/process';
import { useLanguage } from '../../i18n/LanguageContext';
import ArtImage from '../ArtImage/ArtImage';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Process.scss';

export default function Process() {
  const { t, s } = useLanguage();
  return (
    <section className="section section--alt process" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHeading id="process-title" kicker={s.process.kicker} title={s.process.title} intro={s.process.intro} />

        {processSets.length === 0 ? (
          <p>{s.process.empty}</p>
        ) : (
          processSets.map((set) => (
            <article className="process__set" key={set.id} id={`process-${set.id}`} aria-labelledby={`process-${set.id}-title`}>
              <h3 id={`process-${set.id}-title`}>{t(set.title)}</h3>
              <ol className="process__steps">
                {set.steps.map((step, i) => (
                  <li className="process__step" key={step.label.en}>
                    <figure>
                      <div className="process__frame">
                        <ArtImage image={step.image} alt={t(step.alt)} sizes="(min-width: 900px) 22vw, 45vw" />
                      </div>
                      <figcaption>
                        <span className="process__num" aria-hidden="true">
                          {i + 1}
                        </span>
                        {t(step.label)}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ol>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
