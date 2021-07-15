import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Header } from "./Header";
import { CharacterCard } from "./CharacterCard";
import { Footer } from "./Footer";
import "../stylesheet/layout/characterDetail.scss";

function CharacterDetail({ data }) {
  let { id } = useParams();
  let specificCharacter = data.find(
    (character) => character.id.toString() === id
  );
  if (specificCharacter) {
    return (
      <>
        <Header />
        <main className="characterDetail__container">
          <Link to="/" className="characterDetail__link">
            <i className="fas fa-angle-double-left">
              Volver a la página principal
            </i>
          </Link>
          <div className="characterDetail__card">
            <CharacterCard card={specificCharacter} />
            <p className="characterDetail__paragraph">
              Número de episodios: {specificCharacter.episode}
            </p>
            <p className="characterDetail__paragraph">
              Planeta de origen: {specificCharacter.origin}
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main className="characterDetail__errorMsg">
          <p className="characterDetail__pError">Personaje no encontrado</p>
        </main>
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
