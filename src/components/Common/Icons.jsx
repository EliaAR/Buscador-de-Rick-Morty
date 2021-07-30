import poopyShadow from "../../images/poopyShadow.png";
import cronenbergShadow from "../../images/cronenbergShadow.png";
import "./icons.scss";

function SpeciesIcons({ species }) {
  if (species === "Human") {
    return <i className="fas fa-user-tag icon__species" title="Human"></i>;
  } else if (species === "Poopybutthole") {
    return (
      <img
        src={poopyShadow}
        alt="Poopybutthole"
        title="Poopybutthole"
        className="icon__species icon__poopy"
      />
    );
  } else if (species === "Alien") {
    return (
      <i
        className="fas fa-hand-spock icon__species"
        alt="Alien"
        title="Alien"
      ></i>
    );
  } else if (species === "Humanoid") {
    return (
      <i
        className="fas fa-user-astronaut icon__species"
        alt="Humanoid"
        title="Humanoid"
      ></i>
    );
  } else if (species === "Mythological Creature") {
    return (
      <i
        className="fas fa-dragon icon__species"
        alt="Mythological Creature"
        title="Mythological Creature"
      ></i>
    );
  } else if (species === "Animal") {
    return (
      <i className="fas fa-paw icon__species" alt="Animal" title="Animal"></i>
    );
  } else if (species === "Robot") {
    return (
      <i className="fas fa-robot icon__species" alt="Robot" title="Robot"></i>
    );
  } else if (species === "Disease") {
    return (
      <i
        className="fas fa-disease icon__species"
        alt="Disease"
        title="Disease"
      ></i>
    );
  } else if (species === "Planet") {
    return (
      <i
        className="fas fa-globe-americas icon__species"
        alt="Planet"
        title="Planet"
      ></i>
    );
  } else if (species === "Cronenberg") {
    return (
      <img
        className="icon__species icon__cronenberg"
        src={cronenbergShadow}
        alt="Cronenberg"
        title="Cronenberg"
      />
    );
  } else {
    return (
      <i
        className="fas fa-question-circle icon__species"
        alt="Unknown"
        title="Unknown"
      ></i>
    );
  }
}

function StatusIcons({ status }) {
  if (status === "Alive") {
    return (
      <i
        className="fas fa-heartbeat icon__status"
        alt="Alive"
        title="Alive"
      ></i>
    );
  } else if (status === "Dead") {
    return (
      <i
        className="fas fa-skull-crossbones icon__status"
        alt="Dead"
        title="Dead"
      ></i>
    );
  } else {
    return (
      <i
        className="fas fa-question-circle icon__status"
        alt="Unknown"
        title="Unknown"
      ></i>
    );
  }
}

export { SpeciesIcons, StatusIcons };
