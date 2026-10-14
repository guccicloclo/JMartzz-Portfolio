import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { artworks, categories } from '../../data/artworks';
import { useLanguage } from '../../i18n/LanguageContext';
import ArtImage from '../ArtImage/ArtImage';
import Lightbox from '../Lightbox/Lightbox';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Gallery.scss';

export default function Gallery() {
  const reduce = useReducedMotion();
  const { t, s } = useLanguage();
  const [category, setCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const visible = useMemo(
    () => (category === 'All' ? artworks : artworks.filter((a) => a.category === category)),
    [category],
  );
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, c === 'All' ? artworks.length : artworks.filter((a) => a.category === c).length])),
    [],
  );

  return (
    <section className="section gallery" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" kicker={s.gallery.kicker} title={s.gallery.title} intro={s.gallery.intro} />

        <div className="gallery__filters" role="group" aria-label={s.gallery.filterLabel}>
          {categories
            .filter((c) => counts[c] > 0)
            .map((c) => (
              <button
                key={c}
                type="button"
                className={`gallery__filter ${category === c ? 'is-active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c === 'All' ? s.gallery.all : c} <span aria-hidden="true">{counts[c]}</span>
                <span className="visually-hidden"> ({s.gallery.pieces(counts[c])})</span>
              </button>
            ))}
        </div>

        {visible.length === 0 ? (
          <p className="gallery__empty">{s.gallery.empty}</p>
        ) : (
          <ul className="gallery__grid" aria-live="polite">
            {visible.map((art, i) => (
              <motion.li
                key={art.id}
                className="gallery__item"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <button
                  type="button"
                  className="gallery__card"
                  onClick={() => setActiveIndex(i)}
                  aria-label={s.gallery.view(t(art.title))}
                >
                  <span className="gallery__frame">
                    <ArtImage image={art.image} alt={t(art.alt)} sizes="(min-width: 1000px) 30vw, (min-width: 600px) 45vw, 92vw" />
                  </span>
                  <span className="gallery__meta">
                    <span className="gallery__title">{t(art.title)}</span>
                    <span className="gallery__tag">
                      {art.category}
                      {art.fanArt ? ` · ${s.gallery.fanArt}` : ''}
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        )}
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={visible}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
