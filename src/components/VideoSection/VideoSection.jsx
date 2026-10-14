import { useState } from 'react';
import { Play } from 'lucide-react';
import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeading from '../SectionHeading/SectionHeading';
import './VideoSection.scss';

export default function VideoSection() {
  const { t, s } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const { id, url, title, description, details } = site.video;

  return (
    <section className="section video" id="video" aria-labelledby="video-title">
      <div className="container">
        <SectionHeading id="video-title" kicker={s.video.kicker} title={s.video.title} intro={s.video.intro} />
        <div className="video__frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title={s.video.playerTitle}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button type="button" className="video__poster" onClick={() => setPlaying(true)} aria-label={s.video.play}>
              <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
              <span className="video__play" aria-hidden="true">
                <Play size={36} fill="currentColor" />
              </span>
            </button>
          )}
        </div>
        <div className="video__info">
          <h3 className="video__title">{title}</h3>
          <p>{t(description)}</p>
          <dl className="video__details">
            {details.map((d) => (
              <div key={d.label.en}>
                <dt>{t(d.label)}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
          <a className="video__link" href={url} target="_blank" rel="noopener noreferrer">
            {s.video.watch} →
          </a>
        </div>
      </div>
    </section>
  );
}
