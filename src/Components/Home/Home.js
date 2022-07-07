import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import ConsultationBtn from '../Buttons/ConsultationBtn'
// import ScrollMd from '../Images/scroll-md-svg.svg'
// import ScrollSm from '../Images/scroll-small-svg.svg'
// import ScrollLg from '../Images/scroll-lg-svg.svg'
import LearnMoreBtn from '../Buttons/LearnMoreBtn'
// import Image1 from '../Images/image1.png'
// import Image2 from '../Images/image2.png'
// import FoodBev from '../Images/foodbev.jpg'
// import NonProfit from '../Images/nonprofit.jpg'
// import Cannabis from '../Images/cannabis.jpg'
// import Tech from '../Images/technology.jpg'
import AllTabs from '../Tabs/AllTabs'
// import ParticleShape from './ParticleShape'
// import homepagedata from '../Data/homepage'
// import HomeServiceInfo from './HomeServiceInfo'



const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <div className="hero-section">
                    <div className="hero-left">
                        <h1 className="hero-headline">Create <span className="emphasize">Brands</span> People Crave.</h1>
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

            {/* Insert Infinite Scroll */}

            <div className="container">
                <div className="the-brand-blurb">
                    <div className="the-brand-left">
                        <div className="the-brand-left-text">
                            <h5>The Brand</h5>
                            <h2>
                                Clear Creations is a full-service branding
                                and digital marketing agency
                            </h2>
                        </div>
                    </div>
                    <div className="the-brand-right">
                        <div className="the-brand-right-text">
                            <p className="body-lg">
                                We work with creators, the curious, the driven, the rule breakers,
                                and pioneers, to create and bring forth new experiences for
                                consumers across the world.
                            </p>
                            <LearnMoreBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div className="image1"></div>
                <div className="image2"></div>
            </div>
            <div className="container">
                <div className="random-blurb">
                    <h1>Investing in your brand isn't <span className="emphasize">expensive.</span> <span className="emphasize">Uninformed decisions</span> are.</h1>
                </div>
            </div>
            <div className="industries-section">
                    <div className="industries-section-top">
                        <h5>Our Favorites</h5>
                        <h2>
                            Our Favorite Industries Leave A Lasting <span className="emphasize">Impact.</span>
                        </h2>
                        <p className="body-sm">
                            Don't see your industry? We can still provide clarity.
                        </p>
                    </div>
                    <div className="industry-grid">
                        <div className="grid-left">
                            <div className="industry-card food-bev">
                                {/* <img src={FoodBev}className="industry-img food-bev-img" /> */}
                                <div className="food-bev-img"></div>
                                <div className="card-overlay blur">
                                    <p className="industry-title body-lg">Food & Beverage</p>
                                    <p className="industry-description body-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Dolorem sit perspiciatis quaerat mollitia quam. Facilis 
                                        assumenda consequuntur impedit enim voluptate! Nisi, repellat 
                                        eveniet at modi facere voluptatem veritatis dicta ab!
                                    </p>
                                </div>
                            </div>
                            <div className="industry-card non-profit">
                                {/* <img src={NonProfit}className="industry-img non-profit-img" /> */}
                                <div className="non-profit-img"></div>
                                <div className="card-overlay blur">
                                    <p className="industry-title body-lg">Non-Profit</p>
                                    <p className="industry-description body-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Dolorem sit perspiciatis quaerat mollitia quam. Facilis 
                                        assumenda consequuntur impedit enim voluptate! Nisi, repellat 
                                        eveniet at modi facere voluptatem veritatis dicta ab!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-right">
                        <div className="industry-card cannabis">
                                {/* <img src={Cannabis}className="industry-img cannabis-img" /> */}
                                <div className="cannabis-img"></div>
                                <div className="card-overlay blur">
                                    <p className="industry-title body-lg">Cannabis</p>
                                    <p className="industry-description body-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Dolorem sit perspiciatis quaerat mollitia quam. Facilis 
                                        assumenda consequuntur impedit enim voluptate! Nisi, repellat 
                                        eveniet at modi facere voluptatem veritatis dicta ab!
                                    </p>
                                </div>
                            </div>
                            <div className="industry-card tech">
                                {/* <img src={Tech}className="industry-img tech-img" /> */}
                                <div className="tech-img"></div>
                                <div className="card-overlay blur">
                                    <p className="industry-title body-lg">Technology</p>
                                    <p className="industry-description body-sm">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Dolorem sit perspiciatis quaerat mollitia quam. Facilis 
                                        assumenda consequuntur impedit enim voluptate! Nisi, repellat 
                                        eveniet at modi facere voluptatem veritatis dicta ab!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">
                <div className="random-blurb">
                    <h1>We're Fully Invested In Your Brand. <br /> <span className="emphasize">Are You?</span></h1>
                    <ConsultationBtn className='center-btn'/>
                </div>
                <div className="what-we-do">
                    <div className="what-we-do-left">
                        <div className="what-we-do-left-text">
                            <h5>What We Do</h5>
                            <h2>
                                We Create Compelling Brands That Add Value To The Lives Of Consumers.
                            </h2>
                        </div>
                    </div>
                    <div className="what-we-do-right">
                        <div className="what-we-do-right-text">
                            <p className="body-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident 
                                aut id magnam, odio accusamus officiis quaerat sint eligendi dolorem 
                                nemo cumque. Iusto aliquam quisquam a, aliquid nulla eligendi impedit sit.
                            </p>
                            <LearnMoreBtn />
                        </div>
                    </div>
                </div>
                <div className="services-section">
                    <AllTabs/>
                </div>
                {/* Insert Blog Section Here */}
            </div>
        </div>
    )
}

export default Home