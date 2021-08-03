import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import { GetArrayId } from "../../utils/indexUtils";
import {
  DataSingleLocationAPI,
  DataSingleCharacterAPI,
} from "../../Service/DataAPI";
import "./locationDetail.scss";

function LocationDetail() {
  const [singleLocation, setSingleLocation] = useState();
  const [charactersForTheLocation, setCharactersForTheLocation] = useState([]);
  const [error, setError] = useState(false);
  let { id } = useParams();

  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  useEffect(() => {
    setError(false);
    DataSingleLocationAPI(id)
      .then((location) => {
        setSingleLocation(location);
      })
      .catch((error) => setError(true));
  }, [id]);

  useEffect(() => {
    if (singleLocation) {
      let ArrayIdCharacterLocation = GetArrayId(singleLocation.residents);
      let ArrayPromises = ArrayIdCharacterLocation.map((idCharacterLocation) =>
        DataSingleCharacterAPI(idCharacterLocation)
      );
      Promise.all(ArrayPromises)
        .then((charactersLocation) => {
          setCharactersForTheLocation(charactersLocation);
        })
        .catch((error) => console.log(error));
    }
  }, [singleLocation]);

  if (singleLocation) {
    return (
      <>
        <Header />
        <main className="locationDetail">
          <Link to="/locationPage" className="locationDetail__linkContainer">
            <i className="fas fa-angle-double-left"></i>
            Ir al Buscador de localizaciones
          </Link>
          <button
            onClick={goToPreviousPath}
            className="locationDetail__linkContainer"
          >
            <i className="fas fa-angle-double-left"></i>
            Volver atrás
          </button>
          <section className="locationDetail__cardContainer">
            <section className="locationDetail__card">
              <p className="locationDetail__name"> {singleLocation.name} </p>
              <div className="locationDetail__paragraphContainer">
                <p className="locationDetail__paragraph">
                  Tipo: {singleLocation.type}
                </p>
                <p className="locationDetail__paragraph">
                  Dimensión: {singleLocation.dimension}
                </p>
              </div>
            </section>
            <section>
              <h3 className="locationDetail__paragraph locationDetail__tittle">
                Personajes que residen aquí
              </h3>
              {charactersForTheLocation.length ? (
                <ul className="locationDetail__locationList">
                  {charactersForTheLocation.map((characterLocation) => (
                    <li
                      className="locationDetail__locationOne"
                      key={characterLocation.id}
                    >
                      <Link
                        to={`/characterdetail/${characterLocation.id}`}
                        className="locationDetail__locationLink"
                      >
                        <img
                          className="locationDetail__locationImg"
                          src={characterLocation.image}
                          alt={characterLocation.name}
                        />{" "}
                        <span>{characterLocation.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="locationDetail__locationParagraph">
                  Aquí no vive nadie
                </p>
              )}
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  } else if (error) {
    return (
      <>
        <Header />
        <main className="locationDetail__errorMsg">
          <p className="locationDetail__pError">Episodio no encontrado</p>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <main className="locationDetail__loading"></main>
        <Footer />
      </>
    );
  }
}

export { LocationDetail };
