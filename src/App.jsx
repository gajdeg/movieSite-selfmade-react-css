import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/homepage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
