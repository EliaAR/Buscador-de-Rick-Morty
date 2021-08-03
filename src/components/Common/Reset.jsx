import "./reset.scss";

function Reset({ onClickReset }) {
  return (
    <section className="reset">
      <button className="reset__button" onClick={onClickReset}>
        <i className="fas fa-undo reset__icon"></i>{" "}
        <span className="reset__paragraph">Reset</span>
      </button>
    </section>
  );
}

export { Reset };
