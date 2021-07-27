function LocationList({
  dataLocation,
  error,
  searchValueLocation,
  selectType,
  selectDimension,
}) {
  return (
    <div className="locationList__div">
      {error ? (
        <div className="locationList__paragraph">
          <p>
            {searchValueLocation}, {selectType}, {selectDimension}{" "}
          </p>
          <p className="locationList__text">
            No se encuentra en la Base de datos
          </p>
        </div>
      ) : (
        <ul className="locationList__container">
          {dataLocation
            .sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .map((card) => (
              <li className="locationList__item">{card.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export { LocationList };
