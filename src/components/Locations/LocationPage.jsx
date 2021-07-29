import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataLocationAPI } from "../../Service/DataAPI";
import { SetLocalStorage, GetLocalStorage } from "../../Service/LocalStorage";
import { Header } from "../Common/Header";
import { LocationFilters } from "./LocationFilters";
import { Sumary } from "../Common/Sumary";
import { LocationList } from "./LocationList";
import { Footer } from "../Common/Footer";
import "./locationPage.scss";

function LocationPage() {
  const [dataLocation, setDataLocation] = useState(
    GetLocalStorage("locationArray", [])
  );
  const [searchValueLocation, setSearchValueLocation] = useState(
    GetLocalStorage("searchValueLocation", "")
  );
  const [selectType, setSelectType] = useState(
    GetLocalStorage("selectType", "")
  );
  const [selectDimension, setSelectDimension] = useState(
    GetLocalStorage("selectDimension", "")
  );
  const [pagesLocation, setPagesLocation] = useState(
    GetLocalStorage("pagesLocation", 1)
  );
  const [currentPageLocation, setCurrentPageLocation] = useState(
    GetLocalStorage("currentPageLocation", 1)
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    DataLocationAPI({
      name: searchValueLocation,
      type: selectType,
      dimension: selectDimension,
      page: currentPageLocation,
    })
      .then(({ locationArray, totalPages }) => {
        setDataLocation(locationArray);
        setPagesLocation(totalPages);
        SetLocalStorage("locationArray", locationArray);
        SetLocalStorage("pagesLocation", totalPages);
      })
      .catch((error) => setError(true));
  }, [searchValueLocation, selectType, selectDimension, currentPageLocation]);

  return (
    <>
      <Header />
      <main className="mainLocation">
        <Link to="/" className="mainLocation__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
        <p className="mainLocation__paragraph">Búsqueda de localizaciones</p>
        <LocationFilters
          searchValueLocation={searchValueLocation}
          onChangesearchValueLocation={(evt) => {
            setSearchValueLocation(evt.currentTarget.value);
            SetLocalStorage("setSearchValueLocation", evt.currentTarget.value);
            setCurrentPageLocation(1);
          }}
          selectType={selectType}
          onChangeSelectType={(evt) => {
            setSelectType(evt.currentTarget.value);
            SetLocalStorage("selectType", evt.currentTarget.value);
            setCurrentPageLocation(1);
          }}
          selectDimension={selectDimension}
          onChangeSelectDimension={(evt) => {
            setSelectDimension(evt.currentTarget.value);
            SetLocalStorage("selectDimension", evt.currentTarget.value);
            setCurrentPageLocation(1);
          }}
          onClickReset={() => {
            setSearchValueLocation("");
            SetLocalStorage("setSearchValueLocation", "");
            setSelectType("");
            SetLocalStorage("selectType", "");
            setSelectDimension("");
            SetLocalStorage("selectDimension", "");
            setCurrentPageLocation(1);
          }}
        />
        {!error ? (
          <Sumary
            currentPage={currentPageLocation}
            pages={pagesLocation}
            onClickBefore={() => {
              if (currentPageLocation >= 2) {
                setCurrentPageLocation(currentPageLocation - 1);
              }
            }}
            onClickAfter={() => {
              if (currentPageLocation < pagesLocation) {
                setCurrentPageLocation(currentPageLocation + 1);
              }
            }}
          />
        ) : null}
        <LocationList
          dataLocation={dataLocation}
          error={error}
          searchValueLocation={searchValueLocation}
          selectType={selectType}
          selectDimension={selectDimension}
        />
      </main>
      <Footer />
    </>
  );
}

export { LocationPage };
