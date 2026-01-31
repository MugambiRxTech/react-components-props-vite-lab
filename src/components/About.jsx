export default function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <aside className="aboutCard">
      <img className="aboutImg" src={image} alt="blog logo" />
      <p className="aboutP">{about}</p>
    </aside>
  );
}
