import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "./characterList.scss";

function CharacterList({
  data,
  searchValueName,
  selectSpecies,
  error,
  selectStatus,
}) {
  return (
    <div className="characterList">
      {error ? (
        <div className="characterList__paragraph">
          <p>
            {searchValueName}, {selectSpecies}, {selectStatus}{" "}
          </p>
          <p className="characterList__text">
            No se encuentra en la Base de datos
          </p>
        </div>
      ) : (
        <ul className="characterList__container">
          {data
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
              <Link
                to={`/characterdetails/${card.id}`}
                key={card.id}
                className="characterList__link"
              >
                <li className="characterList__item">
                  <CharacterCard card={card} />
                </li>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
}

export { CharacterList };
