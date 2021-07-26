import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import { LocationFilters } from "./LocationFilters";
import { Footer } from "../Common/Footer";
import "./locationPage.scss";

function LocationPage({
  nameLocation,
  onChangeNameLocation,
  type,
  onChangeType,
  dimension,
  onChangeDimension,
}) {
  return (
    <>
      <Header />
      <main className="mainLocation">
        <Link to="/" className="mainLocation__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
        <LocationFilters
          nameLocation={nameLocation}
          onChangeNameLocation={onChangeNameLocation}
          type={type}
          onChangeType={onChangeType}
          dimension={dimension}
          onChangeDimension={onChangeDimension}
        />
      </main>
      <Footer />
    </>
  );
}

export { LocationPage };
