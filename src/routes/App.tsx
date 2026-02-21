import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "@context/ThemeContext";
import { GlobalStyles } from "@globalStyles/globalStyles";
import { useAppSelector } from "@context/reducer/store";
import Loading from "@components/Loading/Loading";
const Homepage = lazy(() => import("@routes/pages/homepage/homepage"));
const About = lazy(() => import("@routes/pages/about/About"));
const Projects = lazy(() => import("@routes/pages/projects/Projects"));
const Awards = lazy(() => import("@routes/pages/awards/Awards.tsx"));

const App = () => {
  const { isLoading, isMenuOpen } = useAppSelector((state) => state.app);
  const shouldLockScroll = isLoading || isMenuOpen;

  return (
    <Router>
      <ThemeProvider>
        <GlobalStyles $lockScroll={shouldLockScroll} />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
