import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/locationPage.scss";

function LocationPage() {
  return (
    <>
      <Header />
      <main className="mainLocation">
        <Link to="/" className="mainLocation__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export { LocationPage };
