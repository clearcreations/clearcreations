import React, { useEffect, useRef } from 'react'
import './About.css'
import {FaHeart, FaChartLine, FaUserFriends, FaRegCircle, FaSearch, FaLightbulb, FaRegQuestionCircle, FaRedoAlt} from 'react-icons/fa'
import ConsultationBtn from '../Buttons/ConsultationBtn'
import { gsap } from 'gsap'
import { ScrollTrigger} from 'gsap/all';
import 'animate.css'
import { Helmet } from 'react-helmet'

const About = (props) => {

    const brandThings = useRef();
    const brandThing = gsap.utils.selector(brandThings);

    const brandValues = useRef();
    const brandValue = gsap.utils.selector(brandValues);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const brandInfo = brandThing('.info');
        gsap.set(brandInfo, {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'
        });
        ScrollTrigger.batch(brandInfo, {
            start: 'top 80%',
            onEnter: (targets) =>
                gsap.to(targets, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    duration: 1.5,
                    stagger: 0.2,
                    overwrite: true
                }),
            onLeave: (targets) => 
                gsap.to(targets, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    overwrite: true
                })
        });

        const brandVal = brandValue('.value');
        gsap.set(brandVal, {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'
        });
        ScrollTrigger.batch(brandVal, {
            start: 'top 80%',
            onEnter: (targets) =>
                gsap.to(targets, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    duration: 1.5,
                    stagger: 0.2,
                    overwrite: true
                }),
            onLeave: (targets) => 
                gsap.to(targets, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                    overwrite: true
                })
        });

    }, []);

    return (
    <div className="about">
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
        <div className="container">
            <div className="about-blurb random-blurb">
                <h1 className='animate__animated animate__fadeInLeft artistic'>The Brand Dedicated To <span className="artistic">Elevating</span> <br /> Your Brand To The Next Level. </h1> 
            </div>
            <div className="mission">
                <h5>Our Mission</h5>
                <h2>
                    Clear Creations helps businesses of all sizes create clarity consumers crave. We provide a 
                    consumer-oriented, subjective, and innovative approach to data-driven solutions.
                </h2>
            </div>
            <div className="the-brand-section">
                <div className="blurb the-brand-blurb">
                    <div className="blurb-left">
                        <div className="blurb-left-text">
                            <h5>The Brand</h5>
                            <h2>
                                Disrupting Industries, <br /> One Brand At A Time.
                            </h2>
                            <p className="body-lg">
                                Your brand is your lifeline, it should be treated as such. We look at a brand as more than a logo 
                                and a color pallette. Let us help you cultivate a culture and meaning behind your brand that consumers crave.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="the-brand-info">
                    <div className="brand-info" ref={brandThings}>
                        <div className="info culture-info">
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
                        <div className="info roi-info">
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
                        <div className="info hire-info">
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
                <div className="values-section" ref={brandValues}>
                    <div className="values-top">
                        <div className="value value-left">
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
                        <div className="value value-right">
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
                        <div className="value value-bottom-left">
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
                        <div className="value value-bottom-middle">
                            <div className="value-bottom-info">
                                <div className="value-icon">
                                    <FaRegQuestionCircle className='svg' />
                                </div>
                                <div className="value-bottom-text">
                                <h4>Curiosity</h4>
                                <p className="body-description body-sm">
                                    What if? What if we do what hasn’t been done? What if we never asked what if? Curiosity makes the world go round. What ifs are meant to take you further.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="value value-bottom-right">
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