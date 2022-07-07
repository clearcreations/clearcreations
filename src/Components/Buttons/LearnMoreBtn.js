import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Buttons.css'
import BtnDroplet from '../Images/btndropletsvg.svg'

const LearnMoreBtn = () => {
    return(
        <div className="free-consult">
            <Link to="/" className='consult-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h4>Learn More</h4>
            </Link>
        </div>
    )
}

export default LearnMoreBtn