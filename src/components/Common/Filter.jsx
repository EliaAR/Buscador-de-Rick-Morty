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
      <>
        <label htmlFor={id} className="form__label">
          {textLabel}
        </label>
        <input
          className="form__input form__inputName formLocation__inputName"
          id={id}
          name={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
        />
      </>
    );
  } else {
    return (
      <>
        <label htmlFor={id} className="form__label">
          {textLabel}
        </label>
        <select
          className="form__input form__select formLocation__input"
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
      </>
    );
  }
}

export { Filter };
