import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { DataAPI, DataAPIName } from "../Service/DataAPI";
import { HomePage } from "./HomePage";
import { CharacterDetail } from "./CharacterDetail";
import { ErrorRouteMsg } from "./ErrorRouteMsg";
import { SetLocalStorage, GetLocalStorage } from "../Service/LocalStorage";
import "../stylesheet/App.scss";

const defaultData = GetLocalStorage("characterArray", []);
const defaultSearchValue = GetLocalStorage("searchValue", "");
const defaultSpecies = GetLocalStorage("species", "");

function App() {
  const [data, setData] = useState(defaultData);
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [species, setSpecies] = useState(defaultSpecies);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    if (searchValue) {
      DataAPIName(searchValue)
        .then((characterArray) => {
          setData(characterArray);
          SetLocalStorage("characterArray", characterArray);
        })
        .catch((error) => setError(true));
    } else {
      DataAPI().then((characterArray) => {
        setData(characterArray);
        SetLocalStorage("characterArray", characterArray);
      });
    }
  }, [searchValue]);

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
              error={error}
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
