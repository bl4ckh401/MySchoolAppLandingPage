import React from "react";
import Faq from "react-faq-component";

function FAQ() {

    const data = {
        title: "Frequently Asked Questions(How it works)",
        rows: [
            {
                title: "What makes My School App better than other alternatives?",
                content: `We are a web based solution which will reduce the requirement of support at all locations where the software runs.
                 We offer centralised data storage for easy backup and restoration. Our system provides an execellent role based security for users to prevent from data mulfunctioning possibilities. 
                 It is also highly cost effective in terms of required hardware and human resource.`,
            },
            {
                title: "What happens if my school expands?",
                content:
                    "Our system will be able to accomodate any future business growth. We invest heavily in engineering and ensure our clients get the best on time. We stay abreast of new technologies and make sure our customers do too, particularly those clients with fast growing needs; Our software has the capacity to grow with you",
            },
            {
                title: "At what time might we be able to contact you for system support?",
                content: `Our Customer commitment is reflected in overwhelming performance and excellent reliability that will protect, grow and expand, the unique value of your business assets.
                 We provide 24/6 support, this explains why our customers are loyal to us and our clientele keep on growing over the years. Our services are based on the requirements of the client
                and we will need your unquestionable support and assistance when the need arises`,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };

    const styles = {
        bgColor: '#fefefe',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'blue',
        arrowColor: "red",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    return (
        <div id="faqs" style={{ minHeight: "80vh" }}>
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
                <div className='aboutTitlePage'>
                    <div className='carousel-description'>
                        <h5 style={{ fontSize: 48, lineHeight: 1 }}>Frequently Asked Questions</h5>
                    </div>
                </div>
            </div>
            <Faq data={data}
                styles={styles}
                config={config} />
        </div>
    )
}

export default FAQ