import React from 'react'

function AppCard(props) {
    return (
        <div className='AppCard'>
            <div className='CardContent'>
                {props.Icon}
                <div className='CardText'>
                    {props.Text}
                </div>
            </div>
        </div>
    )
}

export default AppCard