import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import { GetArrayId } from "../../utils/indexUtils";
import { DataSingleEpisodeAPI } from "../../Service/DataAPI";
import "./episodeDetail.scss";

function EpisodeDetail() {
  const [singleEpisode, setSingleEpisode] = useState();
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
      .catch((error) => setError(true));
  }, [id]);

  if (singleEpisode) {
    let ArrayIdCharacter = GetArrayId(singleEpisode.characters);
    console.log(ArrayIdCharacter);

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
            className="episodeDetail__linkContainer"
          >
            <i className="fas fa-angle-double-left"></i>
            Volver atrás
          </button>
          <div className="episodeDetail__card">
            <p className="episodeDetail__name"> {singleEpisode.name} </p>
            <p className="episodeDetail__paragraph">
              Fecha de estreno: {singleEpisode.air_date}
            </p>
            <p className="episodeDetail__paragraph">
              Episodio: {singleEpisode.episode}
            </p>
            <div>
              <h3 className="episodeDetail__paragraph episodeDetail__tittle">
                Personajes que aparecen
              </h3>
              <ul className="episodeDetail__episodeList">
                {ArrayIdCharacter.map((id) => (
                  <Link to={`/characterdetail/${id}`} key={id}>
                    <li className="episodeDetail__episodeOne">Cosita</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
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
