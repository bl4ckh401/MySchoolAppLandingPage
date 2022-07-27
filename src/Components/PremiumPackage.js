import React from 'react'

function PremiumPackage() {
    return (
        <div className='completepackage'>
            <div className='package'>
                <div className='premiumheader'>
                    <h1>Premium</h1>
                    <h3>Advanced Features</h3>
                </div>
                <p>Ksh. 40,260 / Quarterly</p>
                <div className='features'>
                    <ul>
                        <li className='featureslist'>All Basic Features</li>
                        <li className='featureslist'>Online Examination</li>
                        <li className='featureslist'>Conveyance Management</li>
                        <li className='featureslist'>Extra Management Tools</li>
                        <li className='featureslist'>Upto 100 Account Users</li>
                        <li className='featureslist'>50GB Data Storage</li>
                    </ul>
                    <a href='/'>View Features</a>
                </div>
                <a href='/contact'><button className='btnPremium'>GO PREMIUM</button></a>
            </div>
        </div>
    )
}

export default PremiumPackage