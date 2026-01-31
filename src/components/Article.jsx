export default function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article className="card">
      <h3 className="cardTitle">{title}</h3>
      <small className="date">{date}</small>
      <p className="preview">{preview}</p>
    </article>
  );
}
