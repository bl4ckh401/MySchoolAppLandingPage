import React from 'react'

function ElitePackage() {
    return (
        <div className='completepackage'>
            <div className='package'>
                <div className='eliteheader'>
                    <h1>Elite</h1>
                    <h3>Unlimited Features</h3>
                </div>

                <p>Ksh. 46,470 / Quarterly</p>
                <div className='features'>
                    <ul>
                        <li className='featureslist'>All Premium Features</li>
                        <li className='featureslist'>Unlimited Management Tools</li>
                        <li className='featureslist'>Free System Backups</li>
                        <li className='featureslist'>Unlimited Account Users</li>
                        <li className='featureslist'>Unlimited Data Storage</li>
                    </ul>
                    <a href='/'>View Features</a>
                </div>
                <a href='/contact'><button className='btnElite'>GO ELITE</button></a>
            </div>
        </div >
    )
}

export default ElitePackage