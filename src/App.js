import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext';
import PublicRoute from './components/router/PublicRoute';
import PrivateRoute from './components/router/PrivateRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* PUBLICS ROUTES */}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* PRIVATES ROUTES */}
          <Route path="/users" element={<PrivateRoute />}>
            <Route index element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
