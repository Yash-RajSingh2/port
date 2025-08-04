import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "@routes/pages/homepage/homepage";
import About from "@routes/pages/about/About";
import Projects from "@routes/pages/projects/Projects";
import { ThemeProvider } from "@context/ThemeContext";
import Navbar from "@components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default App
