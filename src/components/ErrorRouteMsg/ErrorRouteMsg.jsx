import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";
import "./errorRouteMsg.scss";

function ErrorRouteMsg() {
  return (
    <>
      <Header />
      <main className="errorRouteMsg">
        <p className="errorRouteMsg__paragraph">Página no encontrada</p>
      </main>

      <Footer />
    </>
  );
}
export { ErrorRouteMsg };
