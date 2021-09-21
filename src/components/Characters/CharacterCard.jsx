import { SpeciesIcons, StatusIcons } from "../Common/Icons";
import "./characterCard.scss";

function CharacterCard({ card }) {
  return (
    <section className="cardCharacter">
      <img
        src={card.image}
        alt={card.name}
        title={card.name}
        className="cardCharacter__img"
      />{" "}
      <article className="cardCharacter__container">
        <p className="cardCharacter__name">{card.name}</p>{" "}
        <SpeciesIcons species={card.species} />{" "}
        <StatusIcons status={card.status} />
      </article>
    </section>
  );
}
export { CharacterCard };
