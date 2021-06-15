import Title from "../images/Title.png";
import "../stylesheet/layout/header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={Title} alt="title serie" />
    </header>
  );
}

export { Header };
