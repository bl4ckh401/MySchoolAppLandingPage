import React from 'react'

function BasicPackage() {
    return (
        <div className='completepackage'>
            <div className='package'>
                <div className='basicheader'>
                    <h1>Basic</h1>
                    <h3>Limited Features</h3>
                </div>
                <p><span>Ksh. 22,350 / </span>Quarterly</p>
                <div className='features'>
                    <ul className='featurelist'>
                        <li className='featureslist'>School Management</li>
                        <li className='featureslist'>SMS & Email APIs</li>
                        <li className='featureslist'>Fees & Payments Tools</li>
                        <li className='featureslist'>Event Organizing & Tracking</li>
                        <li className='featureslist'>Upto 10 Account Users</li>
                        <li className='featureslist'>1GB Data Storage</li>
                    </ul>
                    <a href='/'>View Features</a>
                </div>
                <a href='/contact'><button className='btnBasic'>GET STARTED</button></a>
            </div>
        </div>
    )
}

export default BasicPackage