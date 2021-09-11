import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home/Home";
import AdminDashboard from "./Components/Admin/AdminDashboard/AdminDashboard";
import ArticleDetails from "./Components/Home/Home/ArticleDetails/ArticleDetails";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            {/* user */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/articleDetails/:id">
              <ArticleDetails />
            </PrivateRoute>
            {/* admin */}
            <PrivateRoute path="/admin/dashboard">
              <AdminDashboard />
            </PrivateRoute>
            <Route path="/admin/manageAdmin">
              <MakeAdmin />
            </Route>
            {/* auth */}
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
