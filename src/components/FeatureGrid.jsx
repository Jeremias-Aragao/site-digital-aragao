export default function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <div key={item.title} className="feature-card glass neon-frame">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
