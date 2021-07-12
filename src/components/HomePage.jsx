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
  status,
  onChangeStatus,
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
          status={status}
          onChangeStatus={onChangeStatus}
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

export { HomePage };
