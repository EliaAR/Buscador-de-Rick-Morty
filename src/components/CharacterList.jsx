import { useState, useEffect } from "react";
import { DataAPI, DataAPIName } from "../Service/DataAPI";
import { CharacterCard } from "./CharacterCard";
import { Filters } from "./Filters";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/mainPrincipal.scss";

function CharacterList() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [species, setSpecies] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    DataAPI().then((peopleArray) => {
      setData(peopleArray);
    });
  }, []);

  useEffect(() => {
    setError(false);
    if (searchValue) {
      DataAPIName(searchValue)
        .then((peopleArray) => {
          setData(peopleArray);
        })
        .catch((error) => setError(true));
    } else {
      DataAPI().then((peopleArray) => {
        setData(peopleArray);
      });
    }
  }, [searchValue]);

  return (
    <div>
      <Header />
      <main className="mainPrincipal">
        <Filters
          name={searchValue}
          onChangeName={(evt) => setSearchValue(evt.currentTarget.value)}
          data={data}
          species={species}
          onChangeSpecies={(evt) => setSpecies(evt.currentTarget.value)}
        />
        {error ? (
          <p>{searchValue} no existe</p>
        ) : (
          <ul className="mainPrincipal__characterContainer">
            {data
              .filter((card) => {
                if (!species) {
                  return true;
                } else {
                  return species === card.species;
                }
              })
              .map((card) => (
                <li key={card.id}>
                  <CharacterCard card={card} />
                </li>
              ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}

export { CharacterList };
