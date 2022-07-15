import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Buttons.css'
import BtnDroplet from '../Images/btndropletsvg.svg'

const LearnMoreBtn = () => {
    return(
        <div className="learn-more-sm">
            <Link to="/solutions" className='learn-more-sm-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h5>Learn More</h5>
            </Link>
        </div>
    )
}

export default LearnMoreBtn