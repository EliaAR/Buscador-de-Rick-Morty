import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CharacterList } from "./CharacterList";
import "../stylesheet/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CharacterList}></Route>
      </Switch>
    </Router>
  );
}
export { App };
