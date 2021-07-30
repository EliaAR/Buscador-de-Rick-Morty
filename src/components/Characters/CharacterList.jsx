import { Link } from "react-router-dom";
import { PrintErrorMsg } from "../../utils/indexUtils";
import { CharacterCard } from "./CharacterCard";
import sunShouting from "../../images/sunShouting.png";
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
          <img
            className="characterList__img"
            src={sunShouting}
            alt="sun shouting"
          />
          <p className="characterList__searchs">
            {PrintErrorMsg(searchValueName, selectSpecies, selectStatus)}
          </p>
          <p className="characterList__text">
            No está en la Base de datos o No existe
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
