import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/episodePage.scss";

function EpisodePage() {
  return (
    <>
      <Header />
      <main className="mainEpisode">
        <Link to="/" className="mainEpisode__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export { EpisodePage };
