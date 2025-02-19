import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Common/Header";
import { Title } from "../Common/Title";
import { SpeciesIcons, StatusIcons } from "../Common/Icons";
import { Footer } from "../Common/Footer";
import { GetArrayId } from "../../utils/indexUtils";
import {
  DataSingleCharacterAPI,
  DataSingleEpisodeAPI,
} from "../../Service/DataAPI";
import "./characterDetail.scss";

function CharacterDetail() {
  const [singleCharacter, setSingleCharacter] = useState();
  const [episodesForTheCharacter, setEpisodesForTheCharacter] = useState([]);
  const [error, setError] = useState(false);
  let { id } = useParams();

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    setError(false);
    DataSingleCharacterAPI(id)
      .then((character) => {
        setSingleCharacter(character);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  useEffect(() => {
    if (singleCharacter) {
      let ArrayIdEpisode = GetArrayId(singleCharacter.episode);
      let ArrayPromises = ArrayIdEpisode.map((idEpisode) =>
        DataSingleEpisodeAPI(idEpisode)
      );
      Promise.all(ArrayPromises)
        .then((episodesCharacter) => {
          setEpisodesForTheCharacter(episodesCharacter);
        })
        .catch((error) => console.log(error));
    }
  }, [singleCharacter]);

  if (singleCharacter) {
    return (
      <>
        <Header />
        <main className="characterDetail">
          <Link to="/characterPage" className="characterDetail__linkContainer">
            <i className="fas fa-angle-double-left"></i>
            Ir al Buscador de personajes
          </Link>
          <button
            onClick={goToPreviousPath}
            className="characterDetail__linkContainer characterDetail__linkBack"
          >
            <i className="fas fa-angle-double-left"></i>
            Volver atrás
          </button>
          <Title textTitle="Detalles de personaje" />
          <section className="characterDetail__cardContainer">
            <article className="characterDetail__card">
              <section className="characterDetail__containerImg">
                <img
                  src={singleCharacter.image}
                  alt={singleCharacter.name}
                  title={singleCharacter.name}
                  className="characterDetail__img"
                />{" "}
              </section>
              <section className="characterDetail__containerMoreInfo">
                <p className="characterDetail__paragraphContainer">
                  {singleCharacter.name}{" "}
                  <SpeciesIcons species={singleCharacter.species} />{" "}
                  <StatusIcons status={singleCharacter.status} />
                </p>
                {singleCharacter.type ? (
                  <div>
                    <p className="characterDetail__subject">Tipo:</p>
                    <p className="characterDetail__paragraph">
                      {singleCharacter.type}
                    </p>
                  </div>
                ) : null}

                <p className="characterDetail__subject">Planeta de origen:</p>
                <p className="characterDetail__paragraph">
                  {singleCharacter.origin}
                </p>

                <p className="characterDetail__subject">Última localización:</p>
                <p className="characterDetail__paragraph">
                  {singleCharacter.location}
                </p>
              </section>
            </article>
            <article>
              <h3 className="characterDetail__tittle">
                Episodios en los que aparece
              </h3>
              <ul className="characterDetail__episodeList">
                {episodesForTheCharacter.map((episode) => (
                  <li className="characterDetail__episodeOne" key={episode.id}>
                    <Link
                      to={`/episodedetail/${episode.id}`}
                      className="characterDetail__episodeLink"
                    >
                      <strong>{episode.episode}</strong> <em>{episode.name}</em>
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
        <main className="characterDetail__errorMsg">
          <p className="characterDetail__pError">Personaje no encontrado</p>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main className="characterDetail__loading"></main>
        <Footer />
      </>
    );
  }
}

export { CharacterDetail };
