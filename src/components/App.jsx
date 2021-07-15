import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataAPI } from "../Service/DataAPI";
import { SetLocalStorage, GetLocalStorage } from "../Service/LocalStorage";
import { HomePage } from "./HomePage";
import { CharacterDetail } from "./CharacterDetail";
import { ErrorRouteMsg } from "./ErrorRouteMsg";
import "../stylesheet/App.scss";

const defaultData = GetLocalStorage("characterArray", []);
const defaultSearchValue = GetLocalStorage("searchValue", "");
const defaultSpecies = GetLocalStorage("species", "");
const defaultStatus = GetLocalStorage("status", "");
const defaultPages = GetLocalStorage("pages", 1);
const defaultCurrentPage = GetLocalStorage("currentPage", 1);

function App() {
  const [data, setData] = useState(defaultData);
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [species, setSpecies] = useState(defaultSpecies);
  const [status, setStatus] = useState(defaultStatus);
  const [pages, setPages] = useState(defaultPages);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    DataAPI({ name: searchValue, species, status, page: currentPage })
      .then(({ characterArray, totalPages }) => {
        setData(characterArray);
        setPages(totalPages);
        SetLocalStorage("characterArray", characterArray);
        SetLocalStorage("pages", totalPages);
      })
      .catch((error) => setError(true));
  }, [searchValue, species, status, currentPage]);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          children={
            <HomePage
              data={data}
              searchValue={searchValue}
              onChangeName={(evt) => {
                setSearchValue(evt.currentTarget.value);
                SetLocalStorage("searchValue", evt.currentTarget.value);
              }}
              species={species}
              onChangeSpecies={(evt) => {
                setSpecies(evt.currentTarget.value);
                SetLocalStorage("species", evt.currentTarget.value);
              }}
              status={status}
              onChangeStatus={(evt) => {
                setStatus(evt.currentTarget.value);
                SetLocalStorage("status", evt.currentTarget.value);
              }}
              error={error}
              currentPage={currentPage}
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
              pages={pages}
            />
          }
        ></Route>
        <Route
          path="/characterdetails/:id"
          children={<CharacterDetail data={data} />}
        />
        <Route path="" children={<ErrorRouteMsg />} />
      </Switch>
    </Router>
  );
}
export { App };
