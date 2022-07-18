import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Buttons.css'
import BtnDroplet from '../Images/btndropletsvg.svg'

const LearnMoreBtn = () => {
    return(
        <div className="learn-more">
            <Link to="/solutions" className='learn-more-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h4>Learn More</h4>
            </Link>
        </div>
    )
}

export default LearnMoreBtn