import "./reset.scss";

function Reset({ onClickReset }) {
  return (
    <div className="reset">
      <button className="reset__button" onClick={onClickReset}>
        <i className="fas fa-undo"></i> Reset
      </button>
    </div>
  );
}

export { Reset };
