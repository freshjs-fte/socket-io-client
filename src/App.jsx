import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ChatPage from "./pages/Chat";
import "./App.css";
import { useSelector } from "react-redux";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const { isLoggedIn } = useSelector((state) => state.userSlice);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            {isLoggedIn ? (
              <li>
                <Link to="/chat" />
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/chat">
            <ChatPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
