import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatPage from "./pages/Chat";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { getUserRequest } from "./app/actions";
import browserHistory from "./browserHistory";
import "./App.css";

function App() {
  const { isLoggedIn, data } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRequest(data?._id));
  }, []);

  return (
    <div className="App">
      <BrowserRouter history={browserHistory}>
        <nav>
          <ul>
            {isLoggedIn ? (
              <li>
                <Link to="/chat">Chat</Link>
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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/chat" component={ChatPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
