import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./layouts/Home";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/counter/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
