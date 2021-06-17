import "../stylesheet/layout/filter.scss";

function Filters({ data, name, species, onChangeName, onChangeSpecies }) {
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
        {data
          .map((user) => user.species)
          .filter((item, index, array) => {
            return array.indexOf(item) === index;
          })
          .map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
      </select>
    </form>
  );
}

export { Filters };
