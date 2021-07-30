import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import { DataSingleEpisodeAPI } from "../../Service/DataAPI";
import "./episodeDetail.scss";

function EpisodeDetail() {
  const [singleEpisode, setSingleEpisode] = useState();
  const [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setError(false);
    DataSingleEpisodeAPI(id)
      .then((episode) => {
        setSingleEpisode(episode);
      })
      .catch((error) => setError(true));
  }, [id]);

  if (singleEpisode) {
    return (
      <>
        <Header />
        <main className="episodeDetail">
          <Link to="/" className="episodeDetail__link">
            <i className="fas fa-angle-double-left">Volver a.......</i>
          </Link>
          <div className="episodeDetail__card">
            <p>Nombre: {singleEpisode.name} </p>
            <p>Fecha de estreno: {singleEpisode.air_date}</p>
            <p>Episodio: {singleEpisode.episode}</p>
            <div>
              <h3>Personajes que aparecen</h3>
              {singleEpisode.characters}
              <ul>
                {/* {singleEpisode.characters.map((single) => (
                    <li>{single.characters} </li>
                  ))} */}
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
