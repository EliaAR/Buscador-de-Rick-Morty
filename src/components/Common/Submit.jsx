import "./submit.scss";

function Submit({ onSubmitButton }) {
  return (
    <section className="submit">
      <button className="submit__button" onSubmit={onSubmitButton}>
        <i className="fas fa-search submit__icon"></i>{" "}
        <span className="submit__paragraph">Buscar</span>
      </button>
    </section>
  );
}

export { Submit };
