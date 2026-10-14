import { artImage } from './artImage';

// Each set was matched by file name (…1, …2, …3, …4 are consecutive stages of one piece),
// and checked visually: the stages share the same composition and character poses.
const labels = {
  sketch: { fr: 'Croquis', en: 'Rough sketch' },
  lineart: { fr: 'Dessin au trait', en: 'Refined line art' },
  flats: { fr: 'Aplats de couleur', en: 'Flat colours' },
  final: { fr: 'Illustration finale', en: 'Final illustration' },
};

export const processSets = [
  {
    id: 'supergirl-lobo',
    title: { fr: 'Supergirl vs Lobo', en: 'Supergirl vs Lobo' },
    steps: [
      {
        label: labels.sketch,
        image: artImage('supergirl-lobo-1'),
        alt: {
          fr: 'Croquis libre au crayon de Supergirl et Lobo en plein combat, avec des chaînes en bas.',
          en: 'Loose pencil sketch of Supergirl and Lobo fighting, with chains along the bottom.',
        },
      },
      {
        label: labels.lineart,
        image: artImage('supergirl-lobo-2'),
        alt: {
          fr: 'Dessin au trait plus propre du même combat, avec plus de détails sur les muscles, la cape et les chaînes.',
          en: 'Cleaner line art of the same fight with more detail in the muscles, cape and chains.',
        },
      },
      {
        label: labels.flats,
        image: artImage('supergirl-lobo-3'),
        alt: {
          fr: 'Le combat colorisé en aplats sur un fond mauve poussiéreux.',
          en: 'The fight coloured in flat tones on a dusty mauve background.',
        },
      },
      {
        label: labels.final,
        image: artImage('supergirl-lobo-4'),
        alt: {
          fr: 'L’illustration terminée, avec un éclairage dramatique, un soleil rouge et une lueur verte.',
          en: 'The finished illustration with dramatic lighting, a red sun and a green glow.',
        },
      },
    ],
  },
  {
    id: 'miguel-miles',
    title: { fr: "Miguel O'Hara vs Miles Morales", en: "Miguel O'Hara vs Miles Morales" },
    steps: [
      {
        label: labels.sketch,
        image: artImage('spiderverse-1'),
        alt: {
          fr: 'Croquis libre au crayon de deux Spider-héros bondissant l’un vers l’autre.',
          en: 'Loose pencil sketch of two Spider-heroes leaping at each other.',
        },
      },
      {
        label: labels.lineart,
        image: artImage('spiderverse-2'),
        alt: {
          fr: 'Dessin au trait plus propre de la même pose, avec une anatomie et des détails de costume plus fins.',
          en: 'Cleaner line art of the same pose with finer anatomy and costume detail.',
        },
      },
      {
        label: labels.flats,
        image: artImage('spiderverse-3'),
        alt: {
          fr: 'La pose colorisée en aplats de bleu, de noir et de rouge sur un fond géométrique violet et orange.',
          en: 'The pose coloured in flat blues, blacks and reds over a geometric purple and orange background.',
        },
      },
      {
        label: labels.final,
        image: artImage('spiderverse-4'),
        alt: {
          fr: 'L’illustration terminée, avec des effets de lumière lumineux et des ombres.',
          en: 'The finished illustration with glowing light effects and shading.',
        },
      },
    ],
  },
];

export const portrait = {
  image: artImage('jmartzz-portrait'),
  alt: {
    fr: 'Portrait illustré et stylisé de JMartzz, au regard déterminé, en noir et blanc avec des contours décalés rouge et cyan et des lignes de vitesse façon manga.',
    en: 'Stylised illustrated portrait of JMartzz with a determined expression, drawn in black and white with red and cyan offset edges and manga-style speed lines.',
  },
};
