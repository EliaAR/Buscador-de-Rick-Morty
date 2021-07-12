import "../stylesheet/layout/filter.scss";

const allSpecies = [
  "Human",
  "Alien",
  "Humanoid",
  "unknown",
  "Poopybutthole",
  "Mythological Creature",
  "Animal",
  "Robot",
  "Cronenberg",
  "Disease",
  "Planet",
];

const allStatus = ["Alive", "Dead", "Unknown"];

function Filters({
  data,
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
        className="form__input"
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
        className="form__select"
        name="species"
        id="species"
        value={species}
        onChange={onChangeSpecies}
      >
        <option value="">Todas las especies</option>
        {allSpecies.map((species) => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>
      <label htmlFor="status" className="form__label">
        Escoge aquí el estado a filtrar
      </label>
      <select
        className="form__input"
        id="status"
        value={status}
        onChange={onChangeStatus}
      >
        <option value="">Todos los estados</option>
        {allStatus.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </form>
  );
}

export { Filters };
