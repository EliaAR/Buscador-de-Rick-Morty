import "./reset.scss";

function Reset({ onClickReset }) {
  return (
    <div className="reset">
      <button className="reset__button" onClick={onClickReset}>
        <i class="fas fa-undo"></i> Reset
      </button>
    </div>
  );
}

export { Reset };
