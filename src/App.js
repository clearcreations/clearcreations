import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
// import About from './Components/About'
// import Solutions from './Components/Solutions'
// import CaseStudies from './Components/CaseStudies'
import Consultation from './Components/Consultation/Consultation'
// import Footer from './Components/Footer'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
          {/*<Route path='/about' element={<About />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/casestudies' element={<CaseStudies />} /> */}
          <Route path='/consultation' element={<Consultation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;