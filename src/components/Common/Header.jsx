import { Link } from "react-router-dom";
import { useState } from "react";
import Title from "../../images/Title.png";
import "./header.scss";

function Header() {
  const [burguer, setBurguer] = useState(false);

  return (
    <header className="header">
      <button
        onClick={() => setBurguer(!burguer)}
        className="header__menuContainer"
      >
        <nav className="header__menuNav fas fa-bars">
          {burguer ? (
            <ul className="header__menuUl">
              <li>
                <Link to="/characterPage" className="header__menuLink">
                  Buscador de personajes
                </Link>
              </li>
              <li>
                <Link to="/locationPage" className="header__menuLink">
                  Buscador de localizaciones
                </Link>
              </li>
              <li>
                <Link to="/episodePage" className="header__menuLink">
                  Buscador de episodios
                </Link>
              </li>
            </ul>
          ) : null}
        </nav>
      </button>
      <p className="header__paragraph">El Mejorado Buscador de</p>
      <Link to="/">
        <img className="header__img" src={Title} alt="title serie" />
      </Link>
    </header>
  );
}

export { Header };
