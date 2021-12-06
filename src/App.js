import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { useHistory } from "react-router-dom";
import "./App.css";
import MainPage from "./components/Pages/MainPage";
import NavigationBar from "./components/Pages/NavigationBar";
import Footer from "./components/Pages/Footer";
import AboutUs from "./components/Pages/AboutUs";
import Login from "./components/Pages/Login";
import Services from "./components/Pages/Services";
import Register from "./components/Pages/Register";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(email, password);
    history.push("/")
};

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <NavigationBar isLoggedIn={isLoggedIn} onLogout={logoutHandler}/>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/register">
          <Register submitHandler={submitHandler} setEmail={setEmail} setPassword={setPassword}/>
        </Route>

        {!isLoggedIn && (
          <Route path="/login">
            <Login submitHandler={submitHandler} setEmail={setEmail} setPassword={setPassword}/>
          </Route>
        )}
        {isLoggedIn && <MainPage />}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
