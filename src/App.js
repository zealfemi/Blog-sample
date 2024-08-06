import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Post from "./component/Post";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/posts/:id" Component={Post}></Route>
    </Routes>
  );
}

export default App;
