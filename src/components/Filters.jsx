import "../stylesheet/layout/filter.scss";

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

function Filters({
  name,
  onChangeName,
  species,
  onChangeSpecies,
  status,
  onChangeStatus,
}) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDefault()}>
      <label htmlFor="name" className="form__label">
        Escribe aquí el nombre del personaje
      </label>
      <input
        className="form__input form__inputName"
        id="name"
        name="name"
        type="text"
        placeholder=" Ej: Rick"
        value={name}
        onChange={onChangeName}
      />
      <label htmlFor="species" className="form__label">
        Escoge aquí la especie a filtrar
      </label>
      <select
        className="form__input form__select"
        name="species"
        id="species"
        value={species}
        onChange={onChangeSpecies}
      >
        <option className="form__options" value="">
          Todas las especies
        </option>
        {allSpecies.map((species) => (
          <option className="form__options" key={species} value={species}>
            {species}
          </option>
        ))}
      </select>
      <label htmlFor="status" className="form__label">
        Escoge aquí el estado a filtrar
      </label>
      <select
        className="form__input form__select"
        id="status"
        value={status}
        onChange={onChangeStatus}
      >
        <option className="form__options" value="">
          Todos los estados
        </option>
        {allStatus.map((status) => (
          <option className="form__options" key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </form>
  );
}

export { Filters };
