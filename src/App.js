import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from './Components/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Solutions from './Components/Solutions/Solutions'
import Consultation from './Components/Consultation/Consultation'
import ScrollToTop from './Components/ScrollToTop';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Helmet>
        <title>Clear Creations | Branding Agency</title>
        <meta 
          name='description' 
          content='Clear Creations is an independent agency dedicated to creating the brand, digital products and campaigns you need to take your company to the next level' 
        />
        <meta
          name='keywords'
          content='branding agency, digital marketing, web design, web development, brand identity, logo design, brand strategy, website maintenance, email marketing, content marketing, marketing automation, social media management, seo, search engine optimization, google ads, pay per click'
        />
        <meta 
          name='robots' 
          content='index, follow'
        /> 
      </Helmet>
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