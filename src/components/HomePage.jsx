import { Filters } from "./Filters";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CharacterList } from "./CharacterList";
import "../stylesheet/layout/homePage.scss";

function HomePage({
  searchValue,
  onChangeName,
  data,
  species,
  onChangeSpecies,
  error,
}) {
  return (
    <>
      <Header />
      <main className="mainPrincipal">
        <Filters
          name={searchValue}
          onChangeName={onChangeName}
          data={data}
          species={species}
          onChangeSpecies={onChangeSpecies}
        />
        <CharacterList
          data={data}
          searchValue={searchValue}
          species={species}
          error={error}
        />
      </main>
      <Footer />
    </>
  );
}

export { HomePage };
