import { LocationCard } from "./LocationCard";
import { PrintErrorMsg } from "../../utils/indexUtils";
import "./locationList.scss";
import { Link } from "react-router-dom";

function LocationList({
  dataLocation,
  error,
  searchValueLocation,
  selectType,
  selectDimension,
}) {
  return (
    <section className="locationList">
      {error ? (
        <div className="locationList__paragraph">
          <p className="locationList__searchs">
            {PrintErrorMsg(searchValueLocation, selectType, selectDimension)}
          </p>
          <p className="locationList__text">
            No está en la Base de datos o No existe
          </p>
        </div>
      ) : (
        <ul className="locationList__container">
          {dataLocation.map((card) => (
            <li key={card.id} className="locationList__item">
              <Link to={`/locationdetail/${card.id}`}>
                {" "}
                <LocationCard card={card} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export { LocationList };
