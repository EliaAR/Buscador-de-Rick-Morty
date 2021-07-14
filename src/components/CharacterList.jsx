import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "../stylesheet/layout/characterList.scss";

function CharacterList({ data, searchValue, species, error, status }) {
  return (
    <div className="characterList__div">
      {error ? (
        <div className="characterList__paragraph">
          <p>
            {searchValue}, {species}, {status}{" "}
          </p>
          <p className="characterList__text">
            No se encuentra en la Base de datos
          </p>
        </div>
      ) : (
        <ul className="characterList__container">
          {data
            .filter((card) => {
              if (!species) {
                return true;
              } else {
                return species === card.species;
              }
            })
            .filter((card) => {
              if (!status) {
                return true;
              } else {
                return status === card.status;
              }
            })
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
