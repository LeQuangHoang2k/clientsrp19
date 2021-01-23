import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./components/Index/Index";
import No2 from "./components/No2/No2";
import No4 from "./components/No4/No4";
import No8 from "./components/No8/No8";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index}></Route>
      <Route path="/register" component={No2}></Route>
      <Route path="/chat" component={No4}></Route>
      <Route path="/search" component={No8}></Route>
    </Router>
  );
}

export default App;
