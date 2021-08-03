import "./sumary.scss";

function Sumary({ currentPage, pages, onClickBefore, onClickAfter }) {
  return (
    <section className="sumary">
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
    </section>
  );
}

export { Sumary };
