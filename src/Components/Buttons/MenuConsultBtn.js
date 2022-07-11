import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Buttons.css'
import BtnDroplet from '../Images/btndropletsvg.svg'

const Button = () => {
    return(
        <div className="free-consult">
            <Link to="/consultation" className='menu-consult-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h4>Free Consultation</h4>
            </Link>
        </div>
    )
}

export default Button