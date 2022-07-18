import { useEffect, useRef,} from 'react'
import './Home.css'
import ConsultationBtn from '../Buttons/ConsultationBtn'
import LearnMoreBtn from '../Buttons/LearnMoreBtn'
import LearnMoreSmBtn from '../Buttons/LearnMoreSmBtn'
import SolutionsLearnMoreBtn from '../Buttons/SolutionsLearnMoreBtn'
import Image1 from '../Images/image1.png'
import Image2 from '../Images/image2.png'
import FoodBev from '../Images/foodbev.jpg'
import NonProfit from '../Images/nonprofit.jpg'
import Cannabis from '../Images/cannabis.jpg'
import Tech from '../Images/technology.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger} from 'gsap/all';


const Home = (props) => {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const herotl = useRef();

    const industryCards = useRef();
    const ic = gsap.utils.selector(industryCards);

    const services = useRef();
    const service = gsap.utils.selector(services);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        herotl.current = gsap.timeline()
            .to(q(".hero-left-text"), {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power4.inOut"
            })
            .to(q(".hero-btn-div"), {
                opacity: .8,
                y: 0,
                duration: 1.5,
                ease: "power1.inOut"
            })
            .to(q(".scroll-container"), {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'back.inOut(1.7)'
            });

        const cards = ic('.industry-card');
        gsap.set(cards, {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'
        });
        ScrollTrigger.batch(cards, {
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
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
                    overwrite: true
                })
        });

        const offering = service('.service');
        gsap.set(offering, {
            opacity: 0,
            y: 100
            // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        });
        ScrollTrigger.batch(offering, {
            start: 'top 80%',
            onEnter: (targets) =>
                gsap.to(targets, {
                    opacity: 1,
                    y: 0,
                    // clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
                    duration: 1,
                    stagger: 0.33
                }),
            onLeave: (targets) =>
                gsap.to(targets, {
                    opacity: 0,
                    y: 100
                    // clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
                })
        });

    }, []);

    return (
        <div className="home">
            <div className="container">
                <div className="hero-section">
                    <div className="hero-left" ref={el}>
                        <div className="hero-left-text">
                            <h1 className="hero-headline">Create <span className="emphasize">Brands</span> People Crave.</h1>
                            <p className="hero-body body-lg">
                                We cultivate brands, digital products, and campaigns
                                that take your organization to the next level. Book your
                                free brand audit and find clarity.
                            </p>
                        </div>
                        <div className="hero-btn-div">
                            <ConsultationBtn />
                        </div>
                        <div className="scroll-container">
                            <p className="body-sm rotate">Scroll</p>
                            <div className="scroll-indicator">
                                <div className="dots"></div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        {/* <ParticleShape/> */}
                    </div>
                </div>
            </div>
            <marquee className='marquee' direction="right" speed={300}>
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
                    <h1 className='split artistic'>Investing In Your Brand Is Not <span className="artistic-emphasize">Expensive.</span> {/*<span className="artistic-emphasize">Uninformed decisions</span> are.*/}</h1>
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
                            <a href="#about" className="btn-div">
                                <LearnMoreBtn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img className='image1' src={Image1} />
                <img className='image2' src={Image2} />
            </div>
            <div className='container'>
                <div className="industries-section">
                    <div className="industries-section-top">
                        <div className="blurb-left">
                            <h5>Industry Speicalizations</h5>
                            <h2>We Love Working In Some Pretty Great Industries</h2>
                        </div>
                        <div className="blurb-right">
                            <div className="blurb-right-text">
                                <p className="body-lg">
                                    We love industries that leave a lasting impact on people.
                                    Don't see yours? Don't worry we're still here to help.
                                </p>
                                {/* <div className="btn-div">
                                    <LearnMoreBtn />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="industries-section-bottom" ref={industryCards}>
                        <div className="industry-card foodbev">
                            <img src={FoodBev} />
                        </div>
                        <div className="industry-card nonprofit">
                            <img src={NonProfit} />
                        </div>
                        <div className="industry-card cannabis">
                            <img src={Cannabis} />
                        </div>
                        <div className="industry-card tech">
                            <img src={Tech} />
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
                                    Whether its branding, digital design, or digital marketing, we’ve got you covered. 
                                    We offer a suite of solutions for your brand’s needs. Partner with a team that will 
                                    treat your brand as more than just another client.
                                </p>
                                <div className="btn-div">
                                    <SolutionsLearnMoreBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-info" ref={services}>
                        <div className="service">
                            <h5 className="service-title">Branding</h5>
                            <h3 className="service-headline">Build The Brand People Trust.</h3>
                            <p className="body-reg service-body">
                                Your brand is more than just what you offer. It’s how you present yourself externally to
                                consumers and internally to stakeholders. It’s how you communicate. It’s the story and
                                passion you deliver with every action and word. Let’s build something great together.
                            </p>
                            <a href="#brand-solution">
                                <div className="btn-div">
                                    <LearnMoreSmBtn />
                                </div>
                            </a>
                        </div>
                        <div className="service">
                            <h5 className="service-title">Digital Products</h5>
                            <h3 className="service-headline">Digital Identities Are A Must.</h3>
                            <p className="body-reg service-body">
                                In this digital age, how you present your brand on the web is vital to your success.
                                Believe it or not, good websites, apps, and software have a basic formula to success.
                                We take that formula, combine it with your brand, and we create something amazing.
                            </p>
                            <div className="btn-div">
                                <LearnMoreSmBtn />
                            </div>
                        </div>
                        <div className="service">
                            <h5 className="service-title">Digital Marketing</h5>
                            <h3 className="service-headline">Engage Consistently. Stay Relevant.</h3>
                            <p className="body-reg service-body">
                                Generating leads, re-marketing, and consistent engagement are all part of sa successful
                                business. We offer a variety of digital marketing services to help you target, engage,
                                and retain customers. Leave the monotonous tasks to a team that cares. We can also help you automate your marketing.
                            </p>
                            <div className="btn-div">
                                <LearnMoreSmBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="closing-cta">
                    <h1 className='artistic'>Uncertainty Is A Brand Killer. <br /> <span className="artistic-emphasize">Find Clarity Today.</span></h1>
                    <div className="btn-div">
                        <ConsultationBtn />
                    </div>
                </div>
                {/* Insert Blog Section Here */}
            </div>
        </div>
    )
}

export default Home