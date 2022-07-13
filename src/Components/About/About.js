import React from 'react'
import './About.css'
import {FaHeart, FaChartLine, FaUserFriends, FaRegCircle, FaSearch, FaLightbulb, FaRegQuestionCircle, FaRedoAlt, FaCircle, FaQuestionCircle} from 'react-icons/fa'
import ConsultationBtn from '../Buttons/ConsultationBtn'


const About = (props) => {

    return (
    <div className="about">
        <div className="container">
            <div className="about-blurb random-blurb">
                <h1 className='artistic'>Avoid <span className="artistic-emphasize">Cookie-Cutter Templates.</span> Our Processes Are Bespoke To Your Brand.</h1> 
            </div>
            <div className="scroll-indicator">
                <div className="dots"></div>
            </div>
            <div className="mission">
                <h5>Our Mission</h5>
                <h2>
                    Clear Creations helps businesses of all sizes create clarity consumers crave. We provide a 
                    consumer-oriented, subjective, and innovative approach to data-driven solutions with an agile approach.
                </h2>
            </div>
            <div className="the-brand-section">
                <div className="blurb the-brand-blurb">
                    <div className="blurb-left">
                        <div className="blurb-left-text">
                            <h5>The Brand</h5>
                            <h2>
                                Disrupting Industries, One Brand At A Time.
                            </h2>
                            <p className="body-lg">
                                Your brand is your lifeline, it should be treated as such. We look at a brand as more than a logo 
                                and a color pallete. Let us help you cultivate a culture and meaning behind your brand that consumers crave.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="the-brand-info">
                    <div className="brand-info">
                        <div className="culture-info">
                            <div className="info-icon">
                                <FaHeart className='svg' />
                            </div>
                            <div className="info-text culture-info-text">
                                <h4 className='brand-info-title'>Cultivate Culture</h4>
                                <p className="brand-description body-sm">
                                    Your products and services will only take you so far. With saturated markets, people are looking for brands 
                                    they can truly appreciate. It’s time to be that brand.
                                </p>
                            </div>
                        </div>
                        <div className="roi-info">
                            <div className="info-icon">
                                <FaChartLine className='svg' />
                            </div>
                            <div className="info-text roi-info-text">
                                <h4 className='brand-info-title'>Increase ROI</h4>
                                <p className="brand-description body-sm">
                                    Strong brand assets are the difference maker in your bottom line. Invest in your brand and its assets, 
                                    and you’ll see the desired returns.
                                </p>
                            </div>
                        </div>
                        <div className="hire-info">
                            <div className="info-icon">
                                <FaUserFriends className='svg' />
                            </div>
                            <div className="info-text hire-info-text">
                                <h4 className='brand-info-title'>More Than Another Hire</h4>
                                <p className="brand-description body-sm">
                                    We’re not just here to setup and disappear. We strive to build a dependable relationship with all of our clients. 
                                    Your brand success is just as important to us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-values">
                <div className="blurb brand-values-blurb">
                    <div className="blurb-left">
                        <div className="blurb-left-text">
                            <h5>What We're About</h5>
                            <h2>We Follow A Set Of Values That Encourages Us To Consistently Provide The Best Results Possible.</h2>
                        </div>
                    </div>
                </div>
                <div className="values-section">
                    <div className="values-top">
                        <div className="value-left">
                            <div className="value-top-info">
                                <div className="value-icon">
                                    <FaRegCircle className='svg' />
                                </div>
                                <div className="value-top-text">
                                <h4>Boldness</h4>
                                <p className="body-description body-sm">
                                In a sea of competition you have to stand out. You have to be bold. Break the barrier of the status quo and be disruptive.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="value-right">
                            <div className="value-top-info">
                                <div className="value-icon">
                                    <FaSearch className='svg' />
                                </div>
                                <div className="value-top-text">
                                <h4>Transparency</h4>
                                <p className="body-description body-sm">
                                Transparency is the key to a successful project. Constant and clear communication is the only way we operate.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="values-bottom">
                        <div className="value-bottom-left">
                            <div className="value-bottom-info">
                                <div className="value-icon">
                                    <FaLightbulb className='svg' />
                                </div>
                                <div className="value-bottom-text">
                                <h4>Innovation</h4>
                                <p className="body-description body-sm">
                                Innovation is the process of introducing something new. New products, new services, new ideas. We like to step outside the box, with a holistic approach.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="value-bottom-middle">
                            <div className="value-bottom-info">
                                <div className="value-icon">
                                    <FaRegQuestionCircle className='svg' />
                                </div>
                                <div className="value-bottom-text">
                                <h4>Curiosity</h4>
                                <p className="body-description body-sm">
                                What if? What if we do what hasn’t been done? What if we never asked what if? Curiousty makes the world go round. What ifs are meant to take you further.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="value-bottom-right">
                            <div className="value-bottom-info">
                                <div className="value-icon">
                                    <FaRedoAlt className='svg' />
                                </div>
                                <div className="value-bottom-text">
                                <h4>Tenacity</h4>
                                <p className="body-description body-sm">
                                No matter what, keep improving. We are dedicated to getting the job done properly. No matter what it takes.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="closing-cta">
                <h1 className='artistic'>Uncertainty Is A Brand Killer. <br/> <span className="artistic-emphasize">Find Clarity Today.</span></h1>
                <div className="btn-div">
                    <ConsultationBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About