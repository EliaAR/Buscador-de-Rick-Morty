import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Header } from "../Common/Header";
import { CharacterCard } from "./CharacterCard";
import { Footer } from "../Common/Footer";
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
    return (
      <>
        <Header />
        <main className="characterDetail__container">
          <Link to="/characterPage" className="characterDetail__link">
            <i className="fas fa-angle-double-left">
              Volver al Buscador de personajes
            </i>
          </Link>
          <div className="characterDetail__card">
            <CharacterCard card={singleCharacter} />
            <p className="characterDetail__paragraph">
              Número de episodios: {singleCharacter.episode}
            </p>
            <p className="characterDetail__paragraph">
              Planeta de origen: {singleCharacter.origin}
            </p>
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
