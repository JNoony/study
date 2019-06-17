import React from 'react';
import { Link } from 'react-router-dom'

function Gnb(props){
    return(
        <ul className="gnb">
            <li>
                <Link className={`gnb-day ${props.day === 'mon' ? 'on' : ''}`}  
                      to="/?day=mon" >Mon</Link>
            </li>
            <li>
                <Link className={`gnb-day ${props.day === 'tue' ? 'on' : ''}`}   
                      to="/?day=tue" >Tue</Link>
            </li>
            <li>
                <Link className={`gnb-day ${props.day === 'wed' ? 'on' : ''}`}  
                      to="/?day=wed" >Wed</Link>
            </li>
        </ul>
    )
}


export default Gnb;