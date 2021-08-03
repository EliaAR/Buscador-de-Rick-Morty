function Filter({
  typeOfInput,
  id,
  textLabel,
  placeholder,
  value,
  onChangeInput,
  onChangeSelect,
  textOption,
  options,
}) {
  if (typeOfInput === "input") {
    return (
      <section className="form__nameContainer">
        <label htmlFor={id} className="form__label form__labelName">
          {textLabel}
        </label>
        <input
          className="form__input form__inputName"
          id={id}
          name={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
        />
      </section>
    );
  } else {
    return (
      <section className="form__selectContainer">
        <label htmlFor={id} className="form__label">
          {textLabel}
        </label>
        <select
          className="form__input form__select"
          name={id}
          id={id}
          value={value}
          onChange={onChangeSelect}
        >
          <option className="form__options" value="">
            {textOption}
          </option>
          {options.map((option) => (
            <option className="form__options" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

export { Filter };
