// Interface text for each language. Artwork and biography copy live in src/data as { fr, en } pairs.
export const ui = {
  fr: {
    meta: {
      title: 'JMartzz — Artiste numérique & illustrateur',
      description:
        "JMartzz est un artiste numérique et illustrateur émergent qui explore personnages, mondes et histoires. Portfolio de fan art, de processus créatif et de cover art.",
    },
    skip: 'Aller aux œuvres',
    header: {
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      primaryNav: 'Navigation principale',
      switchLabel: 'Switch to English',
      switchText: 'EN',
    },
    hero: {
      eyebrow: 'Artiste numérique & illustrateur',
      headlineStart: "L'imagination, en",
      headlineAccent: 'pleine couleur.',
      cta1: 'Explorer mon travail',
      cta2: "À propos de l'artiste",
      caption: 'fan art',
    },
    social: {
      listLabel: 'JMartzz sur les réseaux sociaux',
      newTab: "s'ouvre dans un nouvel onglet",
    },
    gallery: {
      kicker: 'Œuvres sélectionnées',
      title: 'La galerie',
      intro:
        "Du fan art des personnages Marvel et DC qui m'ont donné envie de dessiner. Sélectionnez une œuvre pour l'agrandir.",
      filterLabel: 'Filtrer les œuvres par univers',
      all: 'Tout',
      pieces: (n) => `${n} ${n > 1 ? 'œuvres' : 'œuvre'}`,
      empty: 'Aucune œuvre dans cette catégorie pour le moment — revenez bientôt.',
      view: (title) => `Agrandir ${title}`,
      fanArt: 'Fan art',
    },
    lightbox: {
      close: 'Fermer la visionneuse',
      prev: 'Œuvre précédente',
      next: 'Œuvre suivante',
      fanNote:
        "Fan art non officiel. Les personnages appartiennent à leurs propriétaires respectifs ; aucun lien ni approbation de leur part.",
      process: 'Voir comment elle a été réalisée →',
    },
    process: {
      kicker: 'Dans les coulisses',
      title: 'Du croquis au rendu final',
      intro: "Chaque œuvre commence par quelques traits libres. Voici l'évolution de deux d'entre elles, étape par étape.",
      empty: 'Les étapes de création arrivent bientôt.',
    },
    video: {
      kicker: 'En mouvement',
      title: 'La vidéo',
      intro: "Regarde mon travail en vidéo.",
      play: 'Lire la vidéo',
      playerTitle: 'Vidéo de JMartzz sur YouTube',
      watch: 'Voir sur YouTube',
    },
    about: {
      kicker: "L'artiste",
      title: "Salut, moi c'est Jonathan",
      goals: 'Où je vais',
    },
    contact: {
      kicker: 'Dis bonjour',
      title: 'Créons ensemble',
      intro:
        "Une commission, une collaboration, ou simplement l'envie de parler d'art ? Pour le moment, le meilleur moyen de me joindre, ce sont les réseaux sociaux.",
      instagram: "M'écrire sur Instagram",
    },
    footer: {
      nav: 'Pied de page',
      note: "Illustrations originales et fan art non officiel. Aucun lien avec Marvel, DC ou tout autre ayant droit, et aucune approbation de leur part ; tous les personnages appartiennent à leurs propriétaires respectifs.",
      copy: (year) => `© ${year} JMartzz. Œuvres de Jonathan ; tous droits réservés.`,
    },
  },
  en: {
    meta: {
      title: 'JMartzz — Digital Artist & Illustrator',
      description:
        'JMartzz is an emerging digital artist and illustrator exploring characters, worlds, and stories. Portfolio of fan art, process, and cover art.',
    },
    skip: 'Skip to artwork',
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      primaryNav: 'Primary',
      switchLabel: 'Passer en français',
      switchText: 'FR',
    },
    hero: {
      eyebrow: 'Digital artist & illustrator',
      headlineStart: 'Imagination, in',
      headlineAccent: 'full color.',
      cta1: 'Explore My Work',
      cta2: 'About the Artist',
      caption: 'fan art',
    },
    social: {
      listLabel: 'JMartzz on social media',
      newTab: 'opens in a new tab',
    },
    gallery: {
      kicker: 'Selected works',
      title: 'The Gallery',
      intro: 'Fan art of the Marvel and DC characters that got me drawing. Select a piece to view it larger.',
      filterLabel: 'Filter artwork by universe',
      all: 'All',
      pieces: (n) => `${n} ${n === 1 ? 'piece' : 'pieces'}`,
      empty: 'No artwork in this category yet — check back soon.',
      view: (title) => `View ${title} larger`,
      fanArt: 'Fan art',
    },
    lightbox: {
      close: 'Close artwork viewer',
      prev: 'Previous artwork',
      next: 'Next artwork',
      fanNote: 'Unofficial fan art. Characters belong to their respective owners; not affiliated with or endorsed by them.',
      process: 'See how it was made →',
    },
    process: {
      kicker: 'Behind the art',
      title: 'From Sketch to Finish',
      intro: 'Every piece starts as loose lines. Here is how two of them evolved, step by step.',
      empty: 'Process breakdowns are coming soon.',
    },
    video: {
      kicker: 'In motion',
      title: 'The video',
      intro: "Watch my work in video.",
      play: 'Play video',
      playerTitle: 'JMartzz video on YouTube',
      watch: 'Watch on YouTube',
    },
    about: {
      kicker: 'The artist',
      title: "Hi, I'm Jonathan",
      goals: "Where I'm headed",
    },
    contact: {
      kicker: 'Say hello',
      title: "Let's Create",
      intro:
        'Interested in a commission, a collaboration, or just want to talk art? The best way to reach me right now is through social media.',
      instagram: 'Message me on Instagram',
    },
    footer: {
      nav: 'Footer',
      note: 'Original illustrations and unofficial fan art. Not affiliated with or endorsed by Marvel, DC, or any other rights holder; all characters belong to their respective owners.',
      copy: (year) => `© ${year} JMartzz. Artwork by Jonathan; all rights reserved.`,
    },
  },
};
