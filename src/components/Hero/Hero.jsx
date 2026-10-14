import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { artworks } from '../../data/artworks';
import { site } from '../../data/site';
import { useLanguage } from '../../i18n/LanguageContext';
import ArtImage from '../ArtImage/ArtImage';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Hero.scss';

const featured = artworks.find((a) => a.featured) ?? artworks[0];

export default function Hero() {
  const reduce = useReducedMotion();
  const { t, s } = useLanguage();
  const rise = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__halftone" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <motion.p className="hero__eyebrow" {...rise(0)}>
            {s.hero.eyebrow}
          </motion.p>
          <motion.h1 id="hero-title" className="hero__name" {...rise(0.08)}>
            {site.name}
          </motion.h1>
          <motion.p className="hero__headline" {...rise(0.16)}>
            {s.hero.headlineStart} <span>{s.hero.headlineAccent}</span>
          </motion.p>
          <motion.p className="hero__text" {...rise(0.24)}>
            {t(site.tagline)}
          </motion.p>
          <motion.div className="hero__cta" {...rise(0.32)}>
            <a className="btn btn--primary" href="#work">
              {s.hero.cta1} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn" href="#about">
              {s.hero.cta2}
            </a>
          </motion.div>
          <motion.div {...rise(0.4)}>
            <SocialLinks className="hero__social" />
          </motion.div>
        </div>

        <motion.figure
          className="hero__art"
          initial={reduce ? false : { opacity: 0, rotate: 3, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, rotate: -1.5, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__frame">
            <ArtImage image={featured.image} alt={t(featured.alt)} sizes="(min-width: 900px) 40vw, 90vw" eager />
          </div>
          <figcaption>
            “{t(featured.title)}” — {s.hero.caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
