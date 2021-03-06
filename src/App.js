import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* PUBLICS ROUTES */}
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            {/* PRIVATES ROUTES */}
            <Route path="/users" element={<PrivateRoute />}>
              <Route index element={<Users />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
