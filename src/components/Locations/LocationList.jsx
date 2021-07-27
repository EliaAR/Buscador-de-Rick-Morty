import { LocationCard } from "./LocationCard";
import "./locationList.scss";

function LocationList({
  dataLocation,
  error,
  searchValueLocation,
  selectType,
  selectDimension,
}) {
  return (
    <div className="locationList">
      {error ? (
        <div className="locationList__paragraph">
          <p className="locationList__searchs">
            {searchValueLocation}, {selectType}, {selectDimension}{" "}
          </p>
          <p className="locationList__text">
            No está en la Base de datos o No existe
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
              <li key={card.id} className="locationList__item">
                <LocationCard card={card} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export { LocationList };
