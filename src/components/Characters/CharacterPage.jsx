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

const defaultData = GetLocalStorage("characterArray", []);
const defaultSearchValue = GetLocalStorage("searchValue", "");
const defaultSpecies = GetLocalStorage("species", "");
const defaultStatus = GetLocalStorage("status", "");
const defaultPages = GetLocalStorage("pages", 1);
const defaultCurrentPage = GetLocalStorage("currentPage", 1);

function CharacterPage() {
  const [data, setData] = useState(defaultData);
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [species, setSpecies] = useState(defaultSpecies);
  const [status, setStatus] = useState(defaultStatus);
  const [pages, setPages] = useState(defaultPages);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    DataCharacterAPI({ name: searchValue, species, status, page: currentPage })
      .then(({ characterArray, totalPages }) => {
        setData(characterArray);
        setPages(totalPages);
        SetLocalStorage("characterArray", characterArray);
        SetLocalStorage("pages", totalPages);
      })
      .catch((error) => setError(true));
  }, [searchValue, species, status, currentPage]);

  return (
    <>
      <Header />
      <main className="mainCharacter">
        <Link to="/" className="mainCharacter__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
        <CharacterFilters
          name={searchValue}
          onChangeName={(evt) => {
            setSearchValue(evt.currentTarget.value);
            SetLocalStorage("searchValue", evt.currentTarget.value);
            setCurrentPage(1);
          }}
          species={species}
          onChangeSpecies={(evt) => {
            setSpecies(evt.currentTarget.value);
            SetLocalStorage("species", evt.currentTarget.value);
            setCurrentPage(1);
          }}
          status={status}
          onChangeStatus={(evt) => {
            setStatus(evt.currentTarget.value);
            SetLocalStorage("status", evt.currentTarget.value);
            setCurrentPage(1);
          }}
        />
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
        <CharacterList
          data={data}
          searchValue={searchValue}
          species={species}
          error={error}
          status={status}
        />
      </main>
      <Footer />
    </>
  );
}

export { CharacterPage };
