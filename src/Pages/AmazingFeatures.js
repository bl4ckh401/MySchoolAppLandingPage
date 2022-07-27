import React from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { MdWeb } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { HiDocumentDuplicate } from 'react-icons/hi'

import FeatureCard from '../Components/FeatureCard'

function AmazingFeatures() {
    return (
        <div className='AmazingPage'>
            <h3>Amazing Features</h3>
            <h4>Some Features that make Us Proud</h4>
            <p>Looking forward to something different and unique! Here we are with few that never expected in others</p>
            <div className='Amaze_Cards'>
                <FeatureCard icon={<CgMenuGridR size={48} color="green" />} title="Tons of Features" text="My School App provides many features all in one place.
                        You'll find everything you are looking for in a school management system software and we keep on providing more value to you." />
                <FeatureCard icon={<MdWeb size={48} color="green" />} title="User Friendly and Customizable Interface" text="We care! User will never bothered in our real eye catchy user friendly UI and UX Interface design. " />
                <FeatureCard icon={<HiDocumentDuplicate size={48} color="green" />} title="Proper Documentation" text="We provide clear instructions on the usage of our product through our well written product documentation and ensure setting up and Implementation of the system is no hustle." />
                <FeatureCard icon={<BiSupport size={48} color="green" />} title="Reliable Customer Support" text="The team behind My School App is determined to make your life much simple and your experience the system enjoyable. That is why they strive to provide you with 24/6 Customer support." />
            </div>
        </div>
    )
}

export default AmazingFeatures