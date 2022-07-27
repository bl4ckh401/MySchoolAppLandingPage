import React from 'react'
import BasicPackage from '../Components/BasicPackage'
import ElitePackage from '../Components/ElitePackage'
import PremiumPackage from '../Components/PremiumPackage'
import ProPackage from '../Components/ProPackage'
import { PackageData } from '../utils/PackageData'

function Packages() {
    return (
        <div className='allpackages' id='packages'>
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
                <div className='aboutTitlePage'>
                    <div className='carousel-description'>
                        <h5 style={{ fontSize: 48, lineHeight: 1 }}>Packages</h5>
                    </div>
                </div>
            </div>
            <BasicPackage />
            <PremiumPackage />
            <ElitePackage />
            <ProPackage />
        </div>
    )
}

export default Packages