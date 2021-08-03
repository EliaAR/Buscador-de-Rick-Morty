import "./submit.scss";

function Submit({ onClickSubmit }) {
  return (
    <section className="submit">
      <button className="submit__button" onClick={onClickSubmit}>
        <i className="fas fa-search submit__icon"></i>{" "}
        <span className="submit__paragraph">Buscar</span>
      </button>
    </section>
  );
}

export { Submit };
