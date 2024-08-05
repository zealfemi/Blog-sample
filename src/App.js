import { useState, useEffect } from "react";
import { Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Post from "./component/Post";

function App() {
  return (
    <Router>
      <Route path="/" Component={Home}></Route>
      <Route path="/post/:id" Component={Post}></Route>
    </Router>
  );
}

export default App;
