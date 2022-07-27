import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'

function FeatureCard(props) {
    return (
        <div className='Feature_card'>
            <div className='card_top'>
                {props.icon}
                <h4>{props.title}</h4>
            </div>
            <div className='card_text'>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard