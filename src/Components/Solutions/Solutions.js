import React from 'react'
import './Solutions.css'
import {FaHeart, FaChartLine, FaUserFriends} from 'react-icons/fa'
import ConsultationBtn from '../Buttons/ConsultationBtn'

const Solutions = () => {
  return (
    <div className="solutions">
        <div className="solutions-hero">
            
        </div>
        <div className="container">
            <div className="solutions-blurb random-blurb">
                <h1 className='artistic'>Avoid <span className="artistic-emphasize">Cookie-Cutter Templates.</span> Our Processes Are Bespoke To Your Brand.</h1> 
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
            <div className="solutions-section">
                <div id="brand-solution" className="solution branding-solution">
                    <div className="left branding-top">
                        <div className="branding-text">
                            <h5>Branding</h5>
                            <h2>Build The Brand People Trust.</h2>
                            <p className="body-lg">
                                Your brand is more than just what you offer. It’s how you present yourself externally to consumers and internally to stakeholders. 
                                It’s how you communicate. It’s the story and passion you deliver with every action and word. Let’s build something great together.
                            </p>
                        </div>
                    </div>
                    <div className="branding-bottom">
                        <div className="branding-services">
                            <div className="solution-text brand-strategy">
                                <div className="overline"></div>
                                <h4>Brand Strategy</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text brand-identity">
                                <div className="overline"></div>
                                <h4>Brand Identity</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text brand-activation">
                                <div className="overline"></div>
                                <h4>Brand Activation</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dig-prod-solution" className="solution dig-prod-solution">
                    <div className="left dig-prod-top">
                        <div className="dig-prod-text">
                            <h5>Digital Products</h5>
                            <h2>Digital Identities Are A Must.</h2>
                            <p className="body-lg">
                                In this digital age, how you present your brand on the web is vital to your success. Believe it or not, good websites, apps, and 
                                software have a basic formula to success. We take that formula, combine it with your brand, and we create something amazing.
                            </p>
                        </div>
                    </div>
                    <div className="dig-prod-bottom">
                        <div className="dig-prod-services">
                            <div className="solution-text web-design">
                                <div className="overline"></div>
                                <h4>UI/UX Design</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text web-mobile-dev">
                                <div className="overline"></div>
                                <h4>Web/Mobile Development</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text web-maintenance">
                                <div className="overline"></div>
                                <h4>Web Maintenance</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dig-mark-solution" className="solution dig-mark-solution">
                    <div className="left dig-mark-top">
                        <div className="dig-mark-text">
                            <h5>Digital Marketings</h5>
                            <h2>Engage Consistently. Stay Relevant.</h2>
                            <p className="body-lg">
                                Generating leads, re-marketing, and consistent engagement are all part of sa successful business. 
                                We offer a variety of digital marketing services to help you target, engage, and retain customers. Leave the monotonous tasks to a team that cares. We can also help you automate your marketing.
                            </p>
                        </div>
                    </div>
                    <div className="dig-mark-bottom">
                        <div className="dig-mark-services">
                            <div className="solution-text content-marketing">
                                <div className="overline"></div>
                                <h4>Content Marketing</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text email-marketing">
                                <div className="overline"></div>
                                <h4>Email Marketing</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text social-media">
                                <div className="overline"></div>
                                <h4>Social Media</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text seo">
                                <div className="overline"></div>
                                <h4>Search Engine Optimization</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text marketing-automation">
                                <div className="overline"></div>
                                <h4>Marketing Automation</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                            <div className="solution-text google">
                                <div className="overline"></div>
                                <h4>Google Ads</h4>
                                <p className='body-sm'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, velit!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="solutions closing-cta">
                <h1 className='artistic'>Uncertainty Is A Brand Killer. <br/> <span className="artistic-emphasize">Find Clarity Today.</span></h1>
                <div className="btn-div">
                    <ConsultationBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions