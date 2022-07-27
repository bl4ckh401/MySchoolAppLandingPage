import React from 'react'

function About() {
    return (
        <div className='About' id='about'>
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
                <div className='aboutTitlePage'>
                    <div className='carousel-description'>
                        <h5 style={{ fontSize: 48, lineHeight: 1 }}>About MySchoolApp</h5>
                    </div>
                </div>
            </div>
            <div className='allabout'>
                <div className='about_top'>
                    <div className='ourgoals' >
                        <h4>Our Goal</h4>
                        <div className='Goals'>
                            <p>Our Goal is to provide features that are user friendly and easily accessible for all members of the educational community
                                from administrators right down to the student.
                            </p>
                        </div>
                    </div>
                    <div className='oursolution' >
                        <h4>Perfect Solution</h4>
                        <div className='Goals'>
                            <p>Our System is incredibly flexible and can be tailored to your specific requirements. My School app
                                offers the ability to add or remove features as need to make sure that you have all your data available at the click of a button
                            </p>
                        </div>
                    </div>
                </div>
                <div className='myapp'>
                    <h3>ABOUT MY SCHOOL SYSTEM</h3>
                    <p>My School App is a revolutionary system designed to completely manage your school operations. It provides a highly personalized portal-based solution that captores the schools processes and makes all operations
                        (students finance, Admission and Records, Continues Assessment, Exam Reports, etc) accessible and managed via web and Android App, thus allowing you to effectively serve all stakeholders: students, Parents, teachers and administrators.
                        This solution is based on Portal technology, which enables the greatest possible flexibility and personalization. It is an intergrated solution that combines systems to serve a wide range of Key audiences and stakeholders of various schools.
                        To implement my school app, schools do not need to purchase expensive hardware and software, they just need internet connection, a desktop/mobile phone. The system works as a centralised database and application that schools can easily access the
                        system from anywhere based on login credentials. We also customise my school app for individual school needs. Most importantly, Our system is a major tool in school management by making continuous communication between various schools department. In my
                        school app, most features are highly configurable, with customizable dashboard for school admins, teachers and IT managers - plus ample data storage. Given the inherently large sector of a school, from student management, academic management, school fees,
                        school assets such as text books in the library and lab equipments, mere manual systems of pen and paper is not effective and efficient. This is where a School Management System comes in play.
                        <span className='eNbee'> NB </span>
                        An effective school management app creates an open communication channel enhancing a smooth flow of information to and from the Users.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About