
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./app/pages/login/Login";
import Register from "./app/pages/register/Register";
import { AuthProvider } from "./app/context/authContext/AuthContext";
import { MovieContext } from "./context/MoviesContext/MoviesContext";
import { useState } from "react";
import Movies from "./api/movies";
import DataMovies from "./components/MovieCard/DataMovies";

function App() {
  const [dataMovies, setDataMovies] = useState();

  //Follow module

  const [followMovies, setFollowMovies] = useState([]);

  // PRUEBA

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register></Register>} />
            <Route path="/login" element={<Login></Login>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <MovieContext.Provider
        value={{ dataMovies, setDataMovies, followMovies, setFollowMovies }}
      >
        <Movies />
        <DataMovies />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
