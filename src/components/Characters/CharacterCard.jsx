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
      <p className="cardCharacter__container">
        {card.name} <SpeciesIcons species={card.species} />{" "}
        <StatusIcons status={card.status} />
      </p>
    </section>
  );
}
export { CharacterCard };
