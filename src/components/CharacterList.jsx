import { Link } from "react-router-dom";
import { CharacterCard } from "./CharacterCard";
import "../stylesheet/layout/characterList.scss";

function CharacterList({ data, searchValue, species, error }) {
  return (
    <div>
      {error ? (
        <p>{searchValue} no existe</p>
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
