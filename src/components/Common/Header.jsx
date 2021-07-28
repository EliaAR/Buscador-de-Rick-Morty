import { Link } from "react-router-dom";
import Title from "../../images/Title.png";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <p className="header__paragraph">El Mejorado Buscador de </p>
      <Link to="/">
        <img className="header__img" src={Title} alt="title serie" />
      </Link>
    </header>
  );
}

export { Header };
