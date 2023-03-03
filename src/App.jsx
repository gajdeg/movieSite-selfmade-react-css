import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/homepage";
import Footer from "./components/footer/Footer";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import { AnimatePresence } from "framer-motion";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/details/:type/:movieId/:title"
            element={<MovieDetails />}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
