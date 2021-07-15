import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/homePage.scss";
import ciudadela from "../images/ciudadela.png";
import Meeseeks from "../images/Meeseeks.png";
import episode from "../images/episode.jpg";

function HomePage() {
  return (
    <>
      <Header />
      <main className="mainPrincipal">
        <p className="mainPrincipal__paragraph">
          El Mejorado Buscador de{" "}
          <span className="mainPrincipal__span">Rick y Morty</span>
        </p>
        <Link
          to="/characterPage"
          className="mainPrincipal__browsers mainPrincipal__browsersMeeseeks"
        >
          <img
            src={Meeseeks}
            alt="Meeseeks"
            tittle="Meeseeks"
            className="mainPrincipal__meeseeks"
          />
          <p>Buscador por personajes</p>
        </Link>
        <Link
          to="/locationPage"
          className="mainPrincipal__browsers mainPrincipal__browsersCidatel"
        >
          <img
            src={ciudadela}
            alt="Ciudadela"
            tittle="Ciudadela"
            className="mainPrincipal__cidatel"
          />
          <p>Buscador por localizaciones</p>
        </Link>
        <Link
          to="/episodePage"
          className="mainPrincipal__browsers mainPrincipal__browsersEpisode"
        >
          <img
            src={episode}
            alt="The old man and the seat"
            tittle="The old man and the seat"
            className="mainPrincipal__episode"
          />
          <p>Buscador por episodios</p>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
