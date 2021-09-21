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
    <section className={error ? "characterList__error" : "characterList"}>
      {error ? (
        <article className="characterList__paragraph">
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
        </article>
      ) : (
        <ul className="characterList__container">
          {data.map((card) => (
            <li className="characterList__item" key={card.id}>
              <Link
                to={`/characterdetail/${card.id}`}
                className="characterList__link"
              >
                <CharacterCard card={card} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export { CharacterList };
