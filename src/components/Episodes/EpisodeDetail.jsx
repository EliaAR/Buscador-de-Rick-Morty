import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Common/Header";
import { Title } from "../Common/Title";
import { Footer } from "../Common/Footer";
import { GetArrayId } from "../../utils/indexUtils";
import {
  DataSingleEpisodeAPI,
  DataSingleCharacterAPI,
} from "../../Service/DataAPI";
import "./episodeDetail.scss";

function EpisodeDetail() {
  const [singleEpisode, setSingleEpisode] = useState();
  const [charactersForTheEpisode, setCharactersForTheEpisode] = useState([]);
  const [error, setError] = useState(false);
  let { id } = useParams();

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    setError(false);
    DataSingleEpisodeAPI(id)
      .then((episode) => {
        setSingleEpisode(episode);
      })
      .catch((error) => {
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    if (singleEpisode) {
      let ArrayIdCharacter = GetArrayId(singleEpisode.characters);
      let ArrayPromises = ArrayIdCharacter.map((idCharacter) =>
        DataSingleCharacterAPI(idCharacter)
      );
      Promise.all(ArrayPromises)
        .then((charactersEpisode) => {
          setCharactersForTheEpisode(charactersEpisode);
        })
        .catch((error) => console.log(error));
    }
  }, [singleEpisode]);

  if (singleEpisode) {
    return (
      <>
        <Header />
        <main className="episodeDetail">
          <Link to="/episodePage" className="episodeDetail__linkContainer">
            <i className="fas fa-angle-double-left"></i>
            Ir al Buscador de episodios
          </Link>
          <button
            onClick={goToPreviousPath}
            className="episodeDetail__linkContainer characterDetail__linkBack"
          >
            <i className="fas fa-angle-double-left"></i>
            Volver atrás
          </button>
          <Title textTitle="Detalles de episodio" />
          <section className="episodeDetail__cardContainer">
            <article className="episodeDetail__card">
              <p className="episodeDetail__name"> {singleEpisode.name} </p>
              <div className="episodeDetail__paragraphContainer">
                <p className="episodeDetail__paragraph">
                  Fecha de estreno: {singleEpisode.air_date}
                </p>
                <p className="episodeDetail__paragraph">
                  Episodio: {singleEpisode.episode}
                </p>
              </div>
            </article>
            <article>
              <h3 className="episodeDetail__tittle">Personajes que aparecen</h3>
              <ul className="episodeDetail__episodeList">
                {charactersForTheEpisode.map((character) => (
                  <li className="episodeDetail__episodeOne" key={character.id}>
                    <Link
                      to={`/characterdetail/${character.id}`}
                      className="episodeDetail__episodeLink"
                    >
                      <img
                        className="episodeDetail__episodeImg"
                        src={character.image}
                        alt={character.name}
                      />{" "}
                      <span>{character.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </main>
        <Footer />
      </>
    );
  } else if (error) {
    return (
      <>
        <Header />
        <main className="episodeDetail__errorMsg">
          <p className="episodeDetail__pError">Episodio no encontrado</p>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main className="episodeDetail__loading"></main>
        <Footer />
      </>
    );
  }
}

export { EpisodeDetail };
