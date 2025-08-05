import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@context/reducer/store";
import Homepage from "@routes/pages/homepage/homepage";
import About from "@routes/pages/about/About";
import Projects from "@routes/pages/projects/Projects";
import { ThemeProvider } from "@context/ThemeContext";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
