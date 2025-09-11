import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "@routes/pages/homepage/homepage";
import About from "@routes/pages/about/About";
import Projects from "@routes/pages/projects/Projects";
import { ThemeProvider } from "@context/ThemeContext";
import { GlobalStyles } from "@globalStyles/globalStyles";
import { useAppSelector } from "@context/reducer/store";

const App = () => {
  const { isLoading, isMenuOpen } = useAppSelector((state) => state.app);
  const shouldLockScroll = isLoading || isMenuOpen;

  return (
    <Router>
      <ThemeProvider>
        <GlobalStyles $lockScroll={shouldLockScroll} />
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
