import './SectionHeading.scss';

export default function SectionHeading({ id, kicker, title, intro }) {
  return (
    <header className="section-heading">
      <p className="section-heading__kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </header>
  );
}
