function Filters({ data, name, species, onChangeName, onChangeSpecies }) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDeault()}>
      <input
        className="form__input"
        name="name"
        type="text"
        value={name}
        onChange={onChangeName}
      />
      <select
        className="form__input"
        name="species"
        value={species}
        onChange={onChangeSpecies}
      >
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
