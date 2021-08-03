import { Link } from "react-router-dom";
import { EpisodeCard } from "./EpisodeCard";
import { PrintErrorMsg } from "../../utils/indexUtils";
import bury from "../../images/bury.jpg";
import "./episodeList.scss";

function EpisodeList({
  error,
  searchValueEpisode,
  selectEpisode,
  dataEpisode,
}) {
  return (
    <section className="episodeList">
      {error ? (
        <article className="episodeList__paragraph">
          <img
            className="episodeList__img"
            src={bury}
            alt="Riack and Mortu buring themself"
          />
          <p className="episodeList__searchs">
            {PrintErrorMsg(searchValueEpisode, selectEpisode)}
          </p>
          <p className="episodeList__text">
            No está en la Base de datos o No existe
          </p>
        </article>
      ) : (
        <ul className="episodeList__container">
          {dataEpisode.map((card) => (
            <li className="episodeList__item" key={card.id}>
              <Link to={`/episodedetail/${card.id}`}>
                <EpisodeCard card={card} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export { EpisodeList };
