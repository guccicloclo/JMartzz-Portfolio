import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import ArtImage from '../ArtImage/ArtImage';
import './Lightbox.scss';

// Accessible modal built on the native <dialog>: focus trapping and inert background come for free.
export default function Lightbox({ items, index, onIndexChange, onClose }) {
  const { t, s } = useLanguage();
  const dialogRef = useRef(null);
  const total = items.length;
  const item = items[index];

  const go = (delta) => onIndexChange((index + delta + total) % total);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    dialog.showModal();
    document.body.classList.add('is-locked');
    return () => {
      document.body.classList.remove('is-locked');
      if (dialog.open) dialog.close();
      opener?.focus?.();
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby="lightbox-title"
      onKeyDown={onKeyDown}
      onClick={onBackdropClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div className="lightbox__inner">
        <button type="button" className="lightbox__close" onClick={onClose} aria-label={s.lightbox.close}>
          <X aria-hidden="true" />
        </button>

        <div className="lightbox__stage">
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => go(-1)} aria-label={s.lightbox.prev}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <ArtImage key={item.id} image={item.image} alt={t(item.alt)} sizes="(min-width: 900px) 60vw, 100vw" eager className="lightbox__image" />
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => go(1)} aria-label={s.lightbox.next}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="lightbox__caption">
          <p className="lightbox__count" aria-live="polite">
            {index + 1} / {total}
          </p>
          <h3 id="lightbox-title">{t(item.title)}</h3>
          <p>{t(item.description)}</p>
          {item.fanArt && <p className="lightbox__note">{s.lightbox.fanNote}</p>}
          {item.processId && (
            <a className="lightbox__link" href={`#process-${item.processId}`} onClick={onClose}>
              {s.lightbox.process}
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
