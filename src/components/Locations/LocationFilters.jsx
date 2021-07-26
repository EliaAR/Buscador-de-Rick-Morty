import { Filter } from "../Common/Filter";
import "../Common/filter.scss";
import "./locationFilters.scss";

const allTypes = [
  "Acid Plant",
  "Arcade",
  "Artificially generated world",
  "Asteroid",
  "Base",
  "Box",
  "Cluster",
  "Convention",
  "Customs",
  "Daycare",
  "Death Star",
  "Diegesis",
  "Dimension",
  "Dream",
  "Dwarf planet (Celestial Dwarf)",
  "Fantasy town",
  "Game",
  "Liquid",
  "Machine",
  "Menagerie",
  "Microverse",
  "Miniverse",
  "Mount",
  "Nightmare",
  "Non-Diegetic Alternative Reality",
  "Planet",
  "Quadrant",
  "Quasar",
  "Reality",
  "Resort",
  "Spa",
  "Space station",
  "Spacecraft",
  "TV",
  "Teenyverse",
  "Woods",
  "unknown",
];

const allDimensions = [
  "Chair Dimension",
  "Cromulon Dimension",
  "Cronenberg Dimension",
  "Dimension 5-126",
  "Dimension C-137",
  "Dimension C-35",
  "Dimension C-500A",
  "Dimension D-99",
  "Dimension D716",
  "Dimension D716-B",
  "Dimension D716-C",
  "Dimension J-22",
  "Dimension J19ζ7",
  "Dimension K-22",
  "Dimension K-83",
  "Eric Stoltz Mask Dimension",
  "Evil Rick's Target Dimension",
  "Fantasy Dimension",
  "Fascist Dimension",
  "Fascist Shrimp Dimension",
  "Fascist Teddy Bear Dimension",
  "Giant Telepathic Spiders Dimension",
  "Magic Dimension",
  "Merged Dimension",
  "Phone Dimension",
  "Pizza Dimension",
  "Post-Apocalyptic Dimension",
  "Replacement Dimension",
  "Testicle Monster Dimension",
  "Tusk Dimension",
  "Unknown dimension",
  "Wasp Dimension",
  "unknown",
];

function LocationFilters({
  nameLocation,
  onChangeNameLocation,
  type,
  onChangeType,
  dimension,
  onChangeDimension,
}) {
  return (
    <form
      className="form formLocation"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <Filter
        typeOfInput="input"
        id="name"
        textLabel="Escribe aquí el nombre de la localización"
        placeholder=" Ej: Citadel of Ricks"
        value={nameLocation}
        onChangeInput={onChangeNameLocation}
      />
      <Filter
        typeOfInput="select"
        id="type"
        textLabel="Escoge aquí el tipo a filtrar"
        value={type}
        onChangeSelect={onChangeType}
        textOption="Todos los tipos"
        options={allTypes}
      />
      <Filter
        typeOfInput="select"
        id="dimension"
        textLabel="Escoge aquí la dimensión a filtrar"
        value={dimension}
        onChangeSelect={onChangeDimension}
        textOption="Todos los estados"
        options={allDimensions}
      />
    </form>
  );
}

export { LocationFilters };
