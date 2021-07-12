import "../stylesheet/layout/icon.scss";
import poopyShadow from "../images/poopyShadow.png";
import cronenbergSilu from "../images/cronenbergSilu.png";

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
    return <i className="fas fa-hand-spock icon__species" title="Alien"></i>;
  } else if (species === "Humanoid") {
    return (
      <i className="fas fa-user-astronaut icon__species" title="Humanoid"></i>
    );
  } else if (species === "Mythological Creature") {
    return (
      <i
        className="fas fa-dragon icon__species"
        title="Mythological Creature"
      ></i>
    );
  } else if (species === "Animal") {
    return <i className="fas fa-paw icon__species" title="Animal"></i>;
  } else if (species === "Robot") {
    return <i className="fas fa-robot icon__species" title="Robot"></i>;
  } else if (species === "Disease") {
    return <i className="fas fa-disease icon__species" title="Disease"></i>;
  } else if (species === "Planet") {
    return (
      <i className="fas fa-globe-americas icon__species" title="Planet"></i>
    );
  } else if (species === "Cronenberg") {
    return (
      <img
        src={cronenbergSilu}
        alt="Cronenberg"
        title="Cronenberg"
        className="icon__species icon__cronenberg"
      />
    );
  } else {
    return (
      <i className="fas fa-question-circle icon__species" title="Unknown"></i>
    );
  }
}

function StatusIcons({ status }) {
  if (status === "Alive") {
    return <i className="fas fa-heartbeat icon__status" title="Alive"></i>;
  } else if (status === "dead") {
    return (
      <i className="fas fa-skull-crossbones icon__status" title="Dead"></i>
    );
  } else {
    return (
      <i className="fas fa-question-circle icon__status" title="Unknown"></i>
    );
  }
}

export { SpeciesIcons, StatusIcons };
