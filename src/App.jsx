import NavBar from "./claro/NavBar";
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import './App.css'
import Hero from "./claro/Hero";
import Contact from "./claro/Contact";
import Tasks from "./conponents/Tasks";
import TaskPlace from "./claro/TaskPlace";

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/taskplace" element={<TaskPlace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
