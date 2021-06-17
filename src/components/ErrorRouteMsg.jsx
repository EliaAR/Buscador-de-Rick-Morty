import { Header } from "./Header";
import { Footer } from "./Footer";
import "../stylesheet/layout/errorRouteMsg.scss";

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
