import { Link } from "react-router-dom";
import { Header } from "../Common/Header";
import { CharacterFilters } from "./CharacterFilters";
import { Sumary } from "../Common/Sumary";
import { CharacterList } from "./CharacterList";
import { Footer } from "../Common/Footer";
import "./characterPage.scss";

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
        <Link to="/" className="mainCharacter__link">
          <i className="fas fa-angle-double-left">
            Volver a la página principal
          </i>
        </Link>
        <CharacterFilters
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
