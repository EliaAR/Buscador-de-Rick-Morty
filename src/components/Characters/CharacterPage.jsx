import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataCharacterAPI } from "../../Service/DataAPI";
import { SetLocalStorage, GetLocalStorage } from "../../Service/LocalStorage";
import { Header } from "../Common/Header";
import { CharacterFilters } from "./CharacterFilters";
import { Sumary } from "../Common/Sumary";
import { CharacterList } from "./CharacterList";
import { Footer } from "../Common/Footer";
import "./characterPage.scss";

function CharacterPage() {
  const [data, setData] = useState(GetLocalStorage("characterArray", []));
  const [searchValueName, setSearchValueName] = useState(
    GetLocalStorage("searchValueName", "")
  );
  const [selectSpecies, setSelectSpecies] = useState(
    GetLocalStorage("selectSpecies", "")
  );
  const [selectStatus, setSelectStatus] = useState(
    GetLocalStorage("selectStatus", "")
  );
  const [pages, setPages] = useState(GetLocalStorage("pages", 1));
  const [currentPage, setCurrentPage] = useState(
    GetLocalStorage("currentPage", 1)
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    DataCharacterAPI({
      name: searchValueName,
      species: selectSpecies,
      status: selectStatus,
      page: currentPage,
    })
      .then(({ characterArray, totalPages }) => {
        setData(characterArray);
        setPages(totalPages);
        SetLocalStorage("characterArray", characterArray);
        SetLocalStorage("pages", totalPages);
      })
      .catch((error) => setError(true));
  }, [searchValueName, selectSpecies, selectStatus, currentPage]);

  return (
    <>
      <Header />
      <main className="mainCharacter">
        <Link to="/" className="mainCharacter__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
        <p className="mainCharacter__paragraph">Búsqueda de personajes</p>
        <CharacterFilters
          searchValueName={searchValueName}
          onChangeSearchValueName={(evt) => {
            setSearchValueName(evt.currentTarget.value);
            SetLocalStorage("searchValueName", evt.currentTarget.value);
            setCurrentPage(1);
          }}
          selectSpecies={selectSpecies}
          onChangeSelectSpecies={(evt) => {
            setSelectSpecies(evt.currentTarget.value);
            SetLocalStorage("selectSpecies", evt.currentTarget.value);
            setCurrentPage(1);
          }}
          selectStatus={selectStatus}
          onChangeSelectStatus={(evt) => {
            setSelectStatus(evt.currentTarget.value);
            SetLocalStorage("selectStatus", evt.currentTarget.value);
            setCurrentPage(1);
          }}
          onClickReset={() => {
            setSearchValueName("");
            SetLocalStorage("searchValueName", "");
            setSelectSpecies("");
            SetLocalStorage("selectSpecies", "");
            setSelectStatus("");
            SetLocalStorage("selectStatus", "");
            setCurrentPage(1);
          }}
        />
        {!error ? (
          <Sumary
            currentPage={currentPage}
            pages={pages}
            onClickBefore={() => {
              if (currentPage >= 2) {
                setCurrentPage(currentPage - 1);
              }
            }}
            onClickAfter={() => {
              if (currentPage < pages) {
                setCurrentPage(currentPage + 1);
              }
            }}
          />
        ) : null}

        <CharacterList
          data={data}
          searchValueName={searchValueName}
          selectSpecies={selectSpecies}
          error={error}
          selectStatus={selectStatus}
        />
      </main>
      <Footer />
    </>
  );
}

export { CharacterPage };
