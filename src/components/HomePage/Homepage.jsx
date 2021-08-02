import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import citadel from "../../images/citadel.png";
import meeUnf from "../../images/meeUnf.png";
import seatUnf from "../../images/seatUnf.png";
import "./homePage.scss";

function HomePage() {
  return (
    <>
      <Header />
      <main className="mainPrincipal">
        <Link to="/characterPage" className="mainPrincipal__browsers">
          <img
            src={meeUnf}
            alt="Meeseeks"
            tittle="Meeseeks"
            className="mainPrincipal__img mainPrincipal__imgMeeseeks"
          />
          <p>Buscador por personajes</p>
        </Link>
        <Link to="/locationPage" className="mainPrincipal__browsers">
          <img
            src={citadel}
            alt="Ciudadela"
            tittle="Ciudadela"
            className="mainPrincipal__img"
          />
          <p>Buscador por localizaciones</p>
        </Link>
        <Link to="/episodePage" className="mainPrincipal__browsers">
          <img
            src={seatUnf}
            alt="The old man and the seat"
            tittle="The old man and the seat"
            className="mainPrincipal__img mainPrincipal__imgEpisode"
          />
          <p>Buscador por episodios</p>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
