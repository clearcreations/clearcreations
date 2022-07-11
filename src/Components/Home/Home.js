import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import ConsultationBtn from '../Buttons/ConsultationBtn'
// import ScrollMd from '../Images/scroll-md-svg.svg'
// import ScrollSm from '../Images/scroll-small-svg.svg'
// import ScrollLg from '../Images/scroll-lg-svg.svg'
import LearnMoreBtn from '../Buttons/LearnMoreBtn'
import LearnMoreSmBtn from '../Buttons/LearnMoreSmBtn'
// import Image1 from '../Images/image1.png'
// import Image2 from '../Images/image2.png'
// import FoodBev from '../Images/foodbev.jpg'
// import NonProfit from '../Images/nonprofit.jpg'
// import Cannabis from '../Images/cannabis.jpg'
// import Tech from '../Images/technology.jpg'
// import AllTabs from '../Tabs/AllTabs'
// import ParticleShape from './ParticleShape'
// import homepagedata from '../Data/homepage'
// import HomeServiceInfo from './HomeServiceInfo'
import {FaBullseye, FaFingerprint, FaRocket, FaCode, FaWhmcs, FaFigma, FaSearch, FaEnvelopeOpenText, FaInstagram} from "react-icons/fa";
import Diamond from '../Images/diamond shape.png'

const Home = () => {

    return(
        <div className="home">
            <div className="container">
                <div className="hero-section">
                    <div className="hero-left">
                        <div className="hero-left-text">
                        <h1 className="hero-headline">Create <span className="emphasize">Brands</span> People Crave.</h1>
                        </div>
                        <p className="hero-body body-lg">
                            We cultivate brands, digital products, and campaigns 
                            that help take your brand to the next level. Book your 
                            free brand audit today and find clarity.
                        </p>
                        <ConsultationBtn />
                        <div className="scroll-indicator">
                            <div className="dots"></div>
                        </div>
                    </div>
                    <div className="hero-right">
                        {/* <ParticleShape/> */}
                    </div>
                </div>
            </div>
                <marquee className='marquee' direction="right" speed={150}>
                    <div className="marquee-content">
                    <div className="slider-content sm">
                      <p>Brand Identity</p>  
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content bold">
                        <p>Social Media</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content reg">
                        <p>Web Development</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content sm">
                      <p>UI/UX</p>  
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content bold">
                        <p>Brand Strategy</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content reg">
                        <p>Email Marketing</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content sm">
                      <p>Web Maintenance</p>  
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content bold">
                        <p>Social Media</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content reg">
                        <p>Brand Activation</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content sm">
                      <p>Content Marketing</p>  
                    </div>
                    <div className="diamond"></div>
                    <div className="slider-content bold">
                    <p>Search Engine Optimization</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    <div className="slider-content">
                    <p>Google Ads</p>
                    </div>
                    <div className="slider-content diamond"></div>
                    </div>
                </marquee>
            {/* Insert Infinite Scroll */}
            <div className="container">
                <div className="random-blurb">
                    <h1 className='artistic'>Investing in your brand isn't <span className="artistic-emphasize">expensive.</span> {/*<span className="artistic-emphasize">Uninformed decisions</span> are.*/}</h1> 
                </div>
            </div>
            <div className="container">
                <div className="blurb brand-blurb">
                    <div className="blurb-left">
                        <div className="blurb-left-text">
                            <h5>The Brand</h5>
                            <h2>
                                Clear Creations Is A Full-Service Branding And Digital Marketing Agency.
                            </h2>
                        </div>
                    </div>
                    <div className="blurb-right">
                        <div className="blurb-right-text">
                            <p className="body-lg">
                                We work with creators, the curious, the driven, the rule-breakers, and pioneers, 
                                to create and bring forth new experiences for consmers across the world.  
                            </p>
                            <LearnMoreBtn/>
                        </div>
                    </div>
                </div>
                <div className="services-section">
                    <div className="blurb services-blurb">
                        <div className="blurb-left">
                            <div className="blurb-left-text">
                                <h5>What We Do</h5>
                                <h2>
                                    We Create Compelling Brands That Add Value To The Lives Of Consumers.
                                </h2>
                            </div>
                        </div>
                        <div className="blurb-right">
                            <div className="blurb-right-text">
                                <p className="body-lg">
                                    Sit in convallis mauris enim. Lorem vulputate consectetur quam id tempor 
                                    venenatis facilisis consequat pulvinar. Eu ac placerat tellus fermentum in 
                                    libero. Nunc nullam malesuada turpis velit orci. Non non integer faucibus morbi fames.
                                </p>
                                <LearnMoreBtn/>
                            </div>
                        </div>
                    </div>
                    <div className="services-info">
                        <div className="service">
                            <h5 className="service-title">Branding</h5>
                            <h3 className="service-headline">Build The Brand People Trust.</h3>
                            <p className="body-reg service-body">
                                Your brand is more than just what you offer. It’s how you present yourself externally to 
                                consumers and internally to stakeholders. It’s how you communicate. It’s the story and 
                                passion you deliver with every action and word. Let’s build something great together.
                            </p>
                            <LearnMoreSmBtn/>
                        </div>
                        <div className="service">
                            <h5 className="service-title">Digital Products</h5>
                            <h3 className="service-headline">Digital Identities Are A Must.</h3>
                            <p className="body-reg service-body">
                                Your brand is more than just what you offer. It’s how you present yourself externally to 
                                consumers and internally to stakeholders. It’s how you communicate. It’s the story and 
                                passion you deliver with every action and word. Let’s build something great together.
                            </p>
                            <LearnMoreSmBtn/>
                        </div>
                        <div className="service">
                            <h5 className="service-title">Digital Marketing</h5>
                            <h3 className="service-headline">Engage Consistently. Stay Relevant.</h3>
                            <p className="body-reg service-body">
                                Your brand is more than just what you offer. It’s how you present yourself externally to 
                                consumers and internally to stakeholders. It’s how you communicate. It’s the story and 
                                passion you deliver with every action and word. Let’s build something great together.
                            </p>
                            <LearnMoreSmBtn/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="closing-cta">
                    <h1 className='artistic'>Uncertainty is a brand killer. <br/> <span className="artistic-emphasize">Find Clarity Today</span></h1>
                    <ConsultationBtn/>
                </div>
                {/* Insert Blog Section Here */}
            </div>
        </div>
    )
}

export default Home