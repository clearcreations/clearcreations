import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './Components/About/About'
import Solutions from './Components/Solutions/Solutions'
// import CaseStudies from './Components/CaseStudies'
import Consultation from './Components/Consultation/Consultation'
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/solutions' element={<Solutions />} />
            {/* <Route path='/casestudies' element={<CaseStudies />} /> */}
            <Route path='/consultation' element={<Consultation />} />
          </Route>
        </Routes>
        </ScrollToTop>
      </ParallaxProvider>
    </div>
  );
}

export default App;