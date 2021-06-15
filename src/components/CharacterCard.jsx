import { SpeciesIcons, StatusIcons } from "../Service/Icons";

function CharacterCard({ card }) {
  return (
    <>
      <img src={card.image} alt={card.name} /> {card.name}{" "}
      <SpeciesIcons species={card.species} />{" "}
      <StatusIcons status={card.status} />
    </>
  );
}
export { CharacterCard };
