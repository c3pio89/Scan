import "./styles/App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ResultProvider } from "./context/resultProvider";
import Header from "./components/Page/Header";
import {MainPage} from "./components/Page/Main";
import {Auth} from "./components/login/login";
import {SearchPage} from "./components/Page/Search";
import {ResultPage} from "./components/Page/Result";
import {AuthErrorPage} from "./components/loginError/loginError";
import Footer from "./components/Page/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
      <div className="App">

        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
              path="/auth"
              element={!isAuth ? <Auth isAuth={isAuth} setIsAuth={setIsAuth} /> : <Navigate to="/" />}
          />

          <Route element={isAuth ? <Outlet /> : <Navigate to="/auth" />}>
            <Route
                path="/search"
                element={
                  <ResultProvider>
                    <SearchPage />
                  </ResultProvider>
                }
            />
            <Route
                path="/result"
                element={
                  <ResultProvider>
                    <ResultPage />
                  </ResultProvider>
                }
            />
          </Route>
          <Route path="/error" element={<AuthErrorPage />} />
        </Routes>
        <Footer />

      </div>
  );
}

export default App;
