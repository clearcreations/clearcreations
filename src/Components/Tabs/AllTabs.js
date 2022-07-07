import React, { useState } from "react";
import TabNavItem from "../Tabs/TabNavItem";
import TabContent from "./TabContent.js";
import '../Tabs/AllTabs.css'
import {FaBullseye, FaFingerprint, FaRocket, FaCode, FaWhmcs, FaFigma, FaSearch, FaEnvelopeOpenText, FaInstagram} from "react-icons/fa";
import LearnMoreBtn from "../Buttons/LearnMoreBtn";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="home-tabs">
      <ul className="home-tabs-nav">
        <TabNavItem title="Branding" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Digital Products" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Digital Marketing" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="home-tabs-outlet">
        <TabContent className="tab branding-tab" id="tab1" activeTab={activeTab}>
          <div className="tab-left">
            <div className="headline">
                <h2>Build The Brand People Crave.</h2>
            </div>
            <p className="body-lg">
                Your brand is more than just what you offer. It’s how you present yourself externally 
                to consumers and internally to stakeholders. It’s how you communicate. It’s the story 
                and passion you deliver with every action and word. Let’s build something great together.
            </p>
            <LearnMoreBtn/>
          </div>
          <div className="tab-right">
            <div className="tab-cards">
                <div className="card brand-strategy-card">
                    <div className="card-icon-container">
                        <FaBullseye className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Brand Strategy</h4>
                        <p className="body-sm card-body">
                            Due diligence is important in analyzing your competitive environment. 
                            Let us align your brand with your goals and set you up for long-term success.
                        </p>
                    </div>
                </div>
                <div className="card brand-identity-card">
                    <div className="card-icon-container">
                        <FaFingerprint className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Brand Identity</h4>
                        <p className="body-sm card-body">
                            First impressions are important. All brand assets should align with each other 
                            aesthetically. Don’t settle for anything less.
                        </p>
                    </div>
                </div>
                <div className="card brand-activation-card">
                    <div className="card-icon-container">
                        <FaRocket className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Brand Activation</h4>
                        <p className="body-sm card-body">
                            The initial release of a new product or brand is pivotal to building lasting brand 
                            loyalty. Engage early, engage properly.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </TabContent>
        <TabContent className="dig-prod-tab" id="tab2" activeTab={activeTab}>
        <div className="tab-left">
            <div className="headline">
                <h2>A Digital Identity Is A Must.</h2>
            </div>
            <p className="body-lg">
                In this digital age, how you present your brand on the web is vital to your success. 
                Believe it or not, good websites, apps, and software have a basic formula to success. 
                We take that formula, combine it with your brand, and we create something amazing.
            </p>
            <LearnMoreBtn/>
          </div>
          <div className="tab-right">
            <div className="tab-cards">
                <div className="card uiux-card">
                    <div className="card-icon-container">
                        <FaFigma className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">UI/UX Design</h4>
                        <p className="body-sm card-body">
                            Great websites and apps are more than aesthetics and flashy animations - 
                            it's about performance.
                        </p>
                    </div>
                </div>
                <div className="card webdev-card">
                    <div className="card-icon-container">
                        <FaCode className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Web Development</h4>
                        <p className="body-sm card-body">
                            We build solutions small and large with experience and performance in mind. 
                            Let us help you with your next website, e-commerce, mobile application, or corporate software.
                        </p>
                    </div>
                </div>
                <div className="card web-maintenance-card">
                    <div className="card-icon-container">
                        <FaWhmcs className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Web Maintenance</h4>
                        <p className="body-sm card-body">
                            Website maintenance is often a time-consuming and daunting task. 
                            Leave the busy work to a dedicated team who cares about your brand’s digital presence.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </TabContent>
        <TabContent className="dig-mark-tab" id="tab3" activeTab={activeTab}>
        <div className="tab-left">
            <div className="headline">
                <h2>Engage Consistently. Stay Relevant.</h2>
            </div>
            <p className="body-lg">
                Generating leads, re-marketing, and consistent engagement are all part of sa successful business. 
                We offer a variety of digital marketing services to help you target, engage, and retain customers. 
                Leave the monotonous tasks to a team that cares. We can also help you automate your marketing.
            </p>
            <LearnMoreBtn/>
          </div>
          <div className="tab-right">
            <div className="tab-cards">
                <div className="card social-media-card">
                    <div className="card-icon-container">
                        <FaInstagram  className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Social Media</h4>
                        <p className="body-sm card-body">
                            Social media is here to stay so take advantage of it. 
                            Grow your following, increase likes, shares, and develop a loyal following, and generate more revenue.
                        </p>
                    </div>
                </div>
                <div className="card email-card"> 
                    <div className="card-icon-container">
                        <FaEnvelopeOpenText className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Email Marketing</h4>
                        <p className="body-sm card-body">
                            With over 4 billion dialy email users it is a no-brainer to utilize this medium of communication. 
                            Email marketing can help brands generate a loyal brand following and segment content and campaigns 
                            based on various factors to increase ROI.
                        </p>
                    </div>
                </div>
                <div className="card seo-card">
                    <div className="card-icon-container">
                        <FaSearch className="card-icon"/>
                    </div>
                    <div className="card-text">
                        <h4 className="card-heading">Search Engine Optimization</h4>
                        <p className="body-sm card-body">
                            Search engine algorithms are continuously changing and ranking on the first page can drive traffic exponentially. 
                            We keep you in the loop as we drive traffic to your website.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;