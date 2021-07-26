import pickleRickUnfi from "../../images/pickleRickUnfi.png";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={pickleRickUnfi} alt="Pickle-Rick" />
      <small className="footer__small"> Pickle Rick &copy; 2021</small>
    </footer>
  );
}
export { Footer };
