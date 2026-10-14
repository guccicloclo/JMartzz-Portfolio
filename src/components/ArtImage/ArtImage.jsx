import { useState } from 'react';
import './ArtImage.scss';

// Responsive, lazy-loading artwork image with a loading placeholder.
export default function ArtImage({ image, alt, sizes, eager = false, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={`art-image ${loaded ? 'is-loaded' : ''} ${className}`}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      ref={(el) => {
        if (el?.complete && !loaded) setLoaded(true);
      }}
    />
  );
}
