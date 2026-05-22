import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>

      <div className="bg-black text-white">

        {/* NAVBAR */}
        <nav className="flex gap-10 p-8 text-xl justify-center border-b border-gray-800">

          <Link
            to="/"
            className="hover:text-red-400 transition"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </Link>

        </nav>


        <Routes>

          <Route
            path="/"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/projects/:id"
            element={<ProjectDetail />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;