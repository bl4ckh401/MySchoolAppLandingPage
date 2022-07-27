import React from 'react'

function ProPackage() {
    return (
        <div className='completepackage'>
            <div className='package'>
                <div className='proheader'>
                    <h1>Pro</h1>
                    <h3>Advanced Features</h3>
                </div>

                <div className='features'>
                    <ul>
                        <li className='featureslist'>Inventory Management</li>
                        <li className='featureslist'> Library Management</li>
                        <li className='featureslist'>Payroll Management</li>
                        <li className='featureslist'> Hostel Management</li>
                        <li className='featureslist'>Financial Accounting</li>
                        <li className='featureslist'>Alumni Management</li>
                    </ul>
                    <a href='/'>View Features</a>
                </div>
                <a href='/contact'><button className='btnPro'>GO PREMIUM</button></a>
            </div>
        </div>
    )
}

export default ProPackage