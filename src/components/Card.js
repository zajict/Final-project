import {directive} from '@babel/types';
import './Card.css'
import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({avatar, email, name, id}) => {
    return (<Link to={`${id}`}>
        <div className='card'>
            <div className='card-image'>
                <img src={avatar}
                    alt='candidate'/>
            </div>
            <div className='card-name'> {name}</div>
            <div className='card-email'> {email}</div>
        </div>
    </Link>)
};
export default Card;
