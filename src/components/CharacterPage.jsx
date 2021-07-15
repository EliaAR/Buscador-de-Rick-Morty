import { Header } from "./Header";
import { Filters } from "./Filters";
import { Sumary } from "./Sumary";
import { CharacterList } from "./CharacterList";
import { Footer } from "./Footer";
import "../stylesheet/layout/characterPage.scss";

function CharacterPage({
  searchValue,
  onChangeName,
  data,
  species,
  onChangeSpecies,
  error,
  status,
  onChangeStatus,
  currentPage,
  onClickBefore,
  onClickAfter,
  pages,
}) {
  return (
    <>
      <Header />
      <main className="mainCharacter">
        <Filters
          name={searchValue}
          onChangeName={onChangeName}
          data={data}
          species={species}
          onChangeSpecies={onChangeSpecies}
          status={status}
          onChangeStatus={onChangeStatus}
        />
        <Sumary
          currentPage={currentPage}
          onClickBefore={onClickBefore}
          onClickAfter={onClickAfter}
          pages={pages}
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
