import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Solutions from './Components/Solutions/Solutions'
import Consultation from './Components/Consultation/Consultation'

function App() {
  return (
    <div className="app">
        <Routes basename='/clearcreations'>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/solutions' element={<Solutions />} />
            {/* <Route path='/casestudies' element={<CaseStudies />} /> */}
            <Route path='/consultation' element={<Consultation />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;