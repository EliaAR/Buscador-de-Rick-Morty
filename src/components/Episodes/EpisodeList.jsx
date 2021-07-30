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
    <div className="episodeList">
      {error ? (
        <div className="episodeList__paragraph">
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
        </div>
      ) : (
        <ul className="episodeList__container">
          {dataEpisode
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
              <li key={card.id} className="episodeList__item">
                <EpisodeCard card={card} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export { EpisodeList };
