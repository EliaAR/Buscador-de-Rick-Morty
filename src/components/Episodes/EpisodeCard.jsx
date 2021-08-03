import "./episodeCard.scss";

function EpisodeCard({ card }) {
  return (
    <section className="episodeCard">
      <p className="episodeCard__name">{card.name}</p>
      <div className="episodeCard__container">
        <p>Fecha de estreno: {card.air_date}</p>
        <p>Episodio: {card.episode}</p>
        <p>Núm. personajes: {card.characters}</p>
      </div>
    </section>
  );
}

export { EpisodeCard };
