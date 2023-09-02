import "./App.css";
import "normalize.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
