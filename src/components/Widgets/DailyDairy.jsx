import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/calander.css'
function DailyDairy() {
    const [date, setDate] = useState(new Date());
    return (
        <div className={`dailyDairy__container bg-calander rounded-lg m-3 p-2`}>
            <div
                className="dailyDairy__title text-center font-bold text-white mb-3 text-2xl">
                <h1>Daily Diary</h1>
            </div>
            <div className="dailyDairy__content bg-white rounded-lg flex justify-center ">
                <Calendar onChange={setDate} value={date}/>
            </div>
        </div>
    )
}

export default DailyDairy