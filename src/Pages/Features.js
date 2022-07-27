import React from 'react'
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { FaCheck, FaStar, FaTimes } from 'react-icons/fa'

function Features() {
    const dataList = [
        { Feature: "Students Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Teachers Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Fee Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Exam_Grading_CBC Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Classroom Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Timetable Management", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Library Management", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Finance Management", Basic: <FaTimes color="red" />, Premium: <FaTimes color="red" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Attendance Management", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "E Learning", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "General Communication", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "SMS API", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Email API", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Staff Evaluation", Basic: <FaTimes color="red" />, Premium: <FaTimes color="red" />, Elite: <FaTimes color="red" /> },
        { Feature: "Events Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Notifications", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Reports Management", Basic: <FaTimes color="red" />, Premium: <FaTimes color="red" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Account Settings", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "General Settings", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Book of Accounts", Basic: <FaTimes color="red" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Contacts Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Meetings Management", Basic: <FaTimes color="red" />, Premium: <FaTimes color="red" />, Elite: <FaCheck color="#24b86c" /> },
        { Feature: "Appointments Management", Basic: <FaCheck color="#24b86c" />, Premium: <FaCheck color="#24b86c" />, Elite: <FaCheck color="#24b86c" /> },
    ];

    const proFeatures = [{
        id: 1,
        feature: "Hostel Management"
    },
    {
        id: 2,
        feature: "Maps API"
    },
    {
        id: 3,
        feature: "Alumni Management"
    },
    {
        id: 4,
        feature: "Transport Management"
    },
    {
        id: 5,
        feature: "Inventory Management"
    },
    {
        id: 6,
        feature: "Payroll Management"
    },
    ]
    return (
        <div style={{ color: "black", padding: 30 }}>
            <Table className='table' data={dataList} height={1100}>
                <Column width={400} fixed resizable>
                    <HeaderCell style={{ backgroundColor: "darkslateblue", color: "white" }}>Feature</HeaderCell>
                    <Cell style={{
                        backgroundColor: "lightsteelblue", color: "black", margin: "2px 0 2px 0",
                        borderRadius: "4px", cursor: "pointer", width: "max-content"
                    }} dataKey="Feature" />
                </Column>

                <Column width={300} resizable>
                    <HeaderCell style={{ backgroundColor: "darkslateblue", color: "white" }}>Basic</HeaderCell>
                    <Cell dataKey="Basic" style={{ backgroundColor: "aliceblue" }} />
                </Column>

                <Column width={300} resizable>
                    <HeaderCell style={{ backgroundColor: "darkslateblue", color: "white" }}>Premium</HeaderCell>
                    <Cell dataKey='Premium' style={{ backgroundColor: "aliceblue" }} />
                </Column>

                <Column width={300} resizable>
                    <HeaderCell style={{ backgroundColor: "darkslateblue", color: "white" }}>Elite</HeaderCell>
                    <Cell dataKey="Elite" style={{ backgroundColor: "aliceblue" }} />
                </Column>
            </Table>
            <div className='TheProFeatures'>
                <h1 style={{ padding: 20 }}>Pro Features</h1>
                <div className='ProFeaturesCard'>
                    <div className='ProFeaturesContent'>
                        {proFeatures.map((pro) => {
                            return (
                                <div className='ProFeaturesData' key={pro.id}>
                                    <FaStar size={48} color="white" />
                                    <div>
                                        <h5 style={{ color: "white" }}>{pro.feature}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features