import { artImage } from './artImage';

// Category ids are stable keys; `categories` drives the filter buttons (labels are translated in the UI).
export const categories = ['All', 'Marvel', 'DC'];

// Add new pieces here; the gallery, lightbox and filters update automatically.
// Titles come from the artist's own file names. Descriptions only state what is visible in the piece.
export const artworks = [
  {
    id: 'sorcerer-supreme-wanda',
    title: { fr: 'Wanda, Sorcière Suprême', en: 'Supreme Sorcerer Wanda' },
    category: 'Marvel',
    description: {
      fr: 'Wanda Maximoff en Sorcier Suprême, dessinée comme une couverture de comics avec un titre en lettrage marqué.',
      en: 'Wanda Maximoff as Sorcerer Supreme, drawn in the style of a comic cover with a bold title lockup.',
    },
    alt: {
      fr: 'Illustration numérique de Wanda Maximoff en Sorcier Suprême, à genoux et tenant une sphère de magie rouge lumineuse au centre d’un cercle de runes écarlates, avec le titre « Sorcerer Supreme » en dessous.',
      en: 'Digital illustration of Wanda Maximoff as Sorcerer Supreme, kneeling and holding a glowing red orb of magic inside a ring of crimson runes, with a "Sorcerer Supreme" title below.',
    },
    image: artImage('wanda'),
    fanArt: true,
    featured: true,
  },
  {
    id: 'miguel-ohara-vs-miles-morales',
    title: { fr: "Miguel O'Hara vs Miles Morales", en: "Miguel O'Hara vs Miles Morales" },
    category: 'Marvel',
    description: {
      fr: 'Un affrontement en plein vol entre Spider-Man 2099 et Miles Morales, construit sur des formes géométriques tranchantes et une lumière néon.',
      en: 'A mid-air clash between Spider-Man 2099 and Miles Morales, built on sharp geometric shapes and neon light.',
    },
    alt: {
      fr: 'Illustration numérique de Spider-Man 2099 en bleu et rouge et de Miles Morales en noir et rouge bondissant l’un vers l’autre devant un fond géométrique violet et orange, avec des lueurs en éclairs.',
      en: 'Digital illustration of Spider-Man 2099 in blue and red and Miles Morales in black and red leaping at each other against a violet and orange geometric background with lightning-like glows.',
    },
    image: artImage('spiderverse-4'),
    fanArt: true,
    processId: 'miguel-miles',
  },
  {
    id: 'magik-and-danger-blue',
    title: { fr: 'Magik & Danger — version bleue', en: 'Magik & Danger — Blue Variant' },
    category: 'Marvel',
    description: {
      fr: 'Magik debout devant une épée géante, avec un motif d’ailes de papillon, dans une version aux couleurs froides.',
      en: 'Magik standing before a giant sword with a butterfly-wing motif, shown in a cool blue colour version.',
    },
    alt: {
      fr: 'Illustration numérique de Magik aux longs cheveux blonds tenant une grande épée verticale, lumineuse et bleue, avec d’immenses ailes de papillon bleues derrière elle et des éclaboussures d’eau en bas.',
      en: 'Digital illustration of Magik with long blonde hair holding a large sword upright, glowing blue, with giant blue butterfly wings behind her and splashing water below.',
    },
    image: artImage('magik-danger-1'),
    fanArt: true,
  },
  {
    id: 'magik-and-danger-orange',
    title: { fr: 'Magik & Danger — version orange', en: 'Magik & Danger — Orange Variant' },
    category: 'Marvel',
    description: {
      fr: 'La même composition que la version bleue, retravaillée dans une palette chaude d’orange et d’ambre.',
      en: 'The same composition as the blue variant, reworked in a warm orange and amber colour palette.',
    },
    alt: {
      fr: 'La même illustration de Magik avec une grande épée et des ailes de papillon, recolorée en oranges et ambres lumineux.',
      en: 'The same illustration of Magik with a large sword and butterfly wings, recoloured in glowing oranges and ambers.',
    },
    image: artImage('magik-danger-2'),
    fanArt: true,
  },
  {
    id: 'spider-man',
    title: { fr: 'Spider-Man', en: 'Spider-Man' },
    category: 'Marvel',
    description: {
      fr: 'Un portrait dynamique et rapproché de l’homme-araignée, avec une texture de trame et une énergie violette en arrière-plan.',
      en: 'A close, dynamic portrait of the web-swinger with halftone texture and purple energy behind him.',
    },
    alt: {
      fr: 'Illustration numérique de Spider-Man penché vers le spectateur, les yeux d’un blanc vif, devant un nuage violet traversé d’éclairs jaunes et de points de trame.',
      en: 'Digital illustration of Spider-Man leaning toward the viewer with bright white eyes, set against a purple cloud with yellow lightning and halftone dots.',
    },
    image: artImage('spider-man'),
    fanArt: true,
  },
  {
    id: 'black-cat',
    title: { fr: 'Black Cat', en: 'Black Cat' },
    category: 'Marvel',
    description: {
      fr: 'Une étude de portrait monochrome et dorée de Black Cat de profil.',
      en: 'A monochrome-and-gold portrait study of Black Cat in profile.',
    },
    alt: {
      fr: 'Illustration stylisée de Black Cat de profil, aux cheveux clairs, avec un collier clouté et une veste bordée de fourrure, dans des tons crème et or chauds.',
      en: 'Stylised illustration of Black Cat in profile with pale hair, a studded collar and a fur-trimmed jacket, rendered in warm cream and gold tones.',
    },
    image: artImage('black-cat'),
    fanArt: true,
  },
  {
    id: 'supergirl-vs-lobo',
    title: { fr: 'Supergirl vs Lobo', en: 'Supergirl vs Lobo' },
    category: 'DC',
    description: {
      fr: 'Supergirl et Lobo enchaînés dans un combat au-dessus d’une ville en flammes. Présenté ici du croquis au rendu final.',
      en: 'Supergirl and Lobo locked in a chain-wrapped fight above a burning city. Shown here from sketch to final.',
    },
    alt: {
      fr: 'Illustration numérique de Supergirl dans sa cape rouge frappant Lobo, enveloppé de chaînes, avec un soleil rouge et une brume verte lumineuse au-dessus d’une ville en ruines.',
      en: 'Digital illustration of Supergirl in her red cape striking Lobo, who is wrapped in chains, with a red sun and a glowing green haze above a ruined city.',
    },
    image: artImage('supergirl-lobo-4'),
    fanArt: true,
    processId: 'supergirl-lobo',
  },
  {
    id: 'flash-barry-vs-wally',
    title: { fr: 'Flash — Barry Allen vs Wally West', en: 'The Flash — Barry Allen vs Wally West' },
    category: 'DC',
    description: {
      fr: 'Deux speedsters séparés au milieu d’un même cadre, l’un crépitant d’énergie bleue et l’autre d’énergie rouge.',
      en: 'Two speedsters split down the middle of one frame, one crackling with blue energy and the other with red.',
    },
    alt: {
      fr: 'Illustration numérique d’un Flash divisé par une fissure en zigzag, la moitié gauche en éclairs bleus et la moitié droite en rouge et magenta, avec des lignes de vitesse en arrière-plan.',
      en: 'Digital illustration of a Flash figure divided by a jagged crack, the left half in blue lightning and the right half in red and magenta, with speed lines behind.',
    },
    image: artImage('flash'),
    fanArt: true,
  },
  {
    id: 'starfire-and-nightwing',
    title: { fr: 'Koriand’r & Dick Grayson', en: 'Koriand’r & Dick Grayson' },
    category: 'DC',
    description: {
      fr: 'Starfire et Nightwing dans un portrait fan art sur le thème de la Saint-Valentin.',
      en: 'Starfire and Nightwing in a Valentine’s-themed fan art portrait.',
    },
    alt: {
      fr: 'Illustration numérique de Starfire, aux longs cheveux roux et au collier à pierre verte, enlacée par derrière par un Nightwing souriant, sur un fond corail chaud.',
      en: 'Digital illustration of Starfire with long red hair and a green gem necklace embraced from behind by smiling Nightwing, against a warm coral background.',
    },
    image: artImage('starfire-nightwing'),
    fanArt: true,
  },
  {
    id: 'catwoman',
    title: { fr: 'Catwoman', en: 'Catwoman' },
    category: 'DC',
    description: {
      fr: 'Un portrait serré aux tons sépia de Catwoman, les lunettes relevées sur sa cagoule.',
      en: 'A tight, sepia-toned portrait of Catwoman with goggles pushed up on her cowl.',
    },
    alt: {
      fr: 'Gros plan aux tons sépia de Catwoman regardant le spectateur, des lunettes sur la cagoule, avec une texture granuleuse sur toute l’image.',
      en: 'Close-up sepia-toned illustration of Catwoman looking out at the viewer with goggles on her cowl and a grain texture across the image.',
    },
    image: artImage('catwoman'),
    fanArt: true,
  },
];
