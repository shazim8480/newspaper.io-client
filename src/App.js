import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home/Home";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
import ArticleDetails from "./Components/Home/Home/ArticleDetails/ArticleDetails";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* user */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/articleDetails/:id">
            <ArticleDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* admin */}
          <Route path="/admin/dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/admin/manageAdmin">
            <MakeAdmin />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
