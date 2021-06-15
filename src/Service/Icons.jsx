function SpeciesIcons({ species }) {
  if (species === "Human") {
    return <i className="fas fa-user-tag" title="Human"></i>;
  } else {
    return <i className="fas fa-hand-spock" title="Alien"></i>;
  }
}

function StatusIcons({ status }) {
  if (status === "Alive") {
    return <i className="fas fa-heartbeat" title="Alive"></i>;
  } else if (status === "dead") {
    return <i className="fas fa-skull-crossbones" title="Dead"></i>;
  } else {
    return <i className="fas fa-question-circle" title="Unknown"></i>;
  }
}

export { SpeciesIcons };
export { StatusIcons };
