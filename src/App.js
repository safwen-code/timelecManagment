import "./App.css";
import Navbars from "./components/Layout/Navbars";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import KmInfo from "./components/content/KmContent/KmInfo";
import AddKm from "./components/content/kmForm/AddKm";
import Login from "./components/content/Auth/Login";
import Register from "./components/content/Auth/Register";
function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <div className="container border border-primary mt-5">
          <Route exact path="/" component={KmInfo} />
          <Route path="/addkm" component={AddKm} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
