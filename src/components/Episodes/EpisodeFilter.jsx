import { Filter } from "../Common/Filter";
import { Submit } from "../Common/Submit";
import { Reset } from "../Common/Reset";
import "../Common/filter.scss";

const allEpisodes = [
  "S01E01",
  "S01E02",
  "S01E03",
  "S01E04",
  "S01E05",
  "S01E06",
  "S01E07",
  "S01E08",
  "S01E09",
  "S01E10",
  "S01E11",
  "S02E01",
  "S02E02",
  "S02E03",
  "S02E04",
  "S02E05",
  "S02E06",
  "S02E07",
  "S02E08",
  "S02E09",
  "S02E10",
  "S03E01",
  "S03E02",
  "S03E03",
  "S03E04",
  "S03E05",
  "S03E06",
  "S03E07",
  "S03E08",
  "S03E09",
  "S03E10",
  "S04E01",
  "S04E02",
  "S04E03",
  "S04E04",
  "S04E05",
  "S04E06",
  "S04E07",
  "S04E08",
  "S04E09",
  "S04E10",
];

function EpisodeFilter({
  searchValueEpisode,
  onChangeSearchValueEpisode,
  selectEpisode,
  onChangeSelectEpisode,
  onClickSubmit,
  onClickReset,
}) {
  return (
    <form className="form" onSubmit={(evt) => evt.preventDefault()}>
      <Filter
        typeOfInput="input"
        id="name"
        textLabel="Escribe aquí el nombre del episodio"
        placeholder=" Ej: The old man at the seat"
        value={searchValueEpisode}
        onChangeInput={onChangeSearchValueEpisode}
      />
      <Filter
        typeOfInput="select"
        id="type"
        textLabel="Escoge aquí un episodio"
        value={selectEpisode}
        onChangeSelect={onChangeSelectEpisode}
        textOption="Todos los episodios"
        options={allEpisodes}
      />
      <div>
        <Submit onClickSubmit={onClickSubmit} />
        <Reset onClickReset={onClickReset} />
      </div>
    </form>
  );
}

export { EpisodeFilter };
