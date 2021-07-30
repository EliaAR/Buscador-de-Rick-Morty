import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header } from "../Common/Header";
import { CharacterCard } from "./CharacterCard";
import { Footer } from "../Common/Footer";
import { GetArrayId } from "../../utils/indexUtils";
import { DataSingleCharacterAPI } from "../../Service/DataAPI";
import "./characterDetail.scss";

function CharacterDetail() {
  const [singleCharacter, setSingleCharacter] = useState();
  const [error, setError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setError(false);
    DataSingleCharacterAPI(id)
      .then((character) => {
        setSingleCharacter(character);
      })
      .catch((error) => setError(true));
  }, [id]);

  if (singleCharacter) {
    let ArrayIdEpisode = GetArrayId(singleCharacter.episode);
    console.log(ArrayIdEpisode);

    return (
      <>
        <Header />
        <main className="characterDetail">
          <Link to="/characterPage" className="characterDetail__link">
            <i className="fas fa-angle-double-left">
              Volver al Buscador de personajes
            </i>
          </Link>
          <div className="characterDetail__card">
            <CharacterCard card={singleCharacter} />
            <p className="characterDetail__paragraph">
              Tipo: {singleCharacter.type}
            </p>
            <p className="characterDetail__paragraph">
              Planeta de origen: {singleCharacter.origin}
            </p>
            <p className="characterDetail__paragraph">
              Última localización: {singleCharacter.location}
            </p>
            <div>
              <h3>Episodios en los que aparece</h3>
              {singleCharacter.episode}
              <ul>
                {ArrayIdEpisode.map((id) => (
                  <Link to={`/episodedetail/${id}`} key={id}>
                    <li>cosita</li>
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

CharacterDetail.propTypes = {
  episode: PropTypes.number,
  origin: PropTypes.string,
};
