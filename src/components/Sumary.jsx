import "../stylesheet/layout/sumary.scss";

function Sumary({ currentPage, pages, onClickBefore, onClickAfter }) {
  return (
    <div className="sumary">
      <p className="sumary__paragraph">
        Estás en la página {currentPage} del total de {pages} páginas
      </p>
      <div>
        <button
          className="sumary__buttons sumary__before"
          onClick={onClickBefore}
        >
          Página anterior
        </button>
        <button
          className="sumary__buttons sumary__after"
          onClick={onClickAfter}
        >
          Pagina siguiente
        </button>
      </div>
    </div>
  );
}

export { Sumary };
