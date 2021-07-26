import { Filter } from "../Common/Filter";
import "../Common/filter.scss";

const allSpecies = [
  "Alien",
  "Animal",
  "Cronenberg",
  "Disease",
  "Human",
  "Humanoid",
  "Mythological Creature",
  "Planet",
  "Poopybutthole",
  "Robot",
  "Unknown",
];

const allStatus = ["Alive", "Dead", "Unknown"];

function CharacterFilters({
  name,
  onChangeName,
  species,
  onChangeSpecies,
  status,
  onChangeStatus,
}) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDefault()}>
      <Filter
        typeOfInput="input"
        id="name"
        textLabel="Escribe aquí el nombre del personaje"
        placeholder=" Ej: Rick"
        value={name}
        onChangeInput={onChangeName}
      />
      <Filter
        typeOfInput="select"
        id="species"
        textLabel="Escoge aquí la especie a filtrar"
        value={species}
        onChangeSelect={onChangeSpecies}
        textOption="Todas las especies"
        options={allSpecies}
      />
      <Filter
        typeOfInput="select"
        id="status"
        textLabel="Escoge aquí el estado a filtrar"
        value={status}
        onChangeSelect={onChangeStatus}
        textOption="Todos los estados"
        options={allStatus}
      />
    </form>
  );
}

export { CharacterFilters };
