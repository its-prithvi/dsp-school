import React from 'react'
import Carousal from './Carousal/Carousal'
import Events from './Widgets/Events'
import MainInfo from './Widgets/MainInfo'
import DailyDairy from './Widgets/DailyDairy'
const events = ["Addmissions Open", "Environmental Studies", "Online Addmission Procedure", "Application Submit Deadline"]
function Home() {
    return (
        <div className='home w-[100%]  '>
            <div className="home__container w-[100%] flex m-auto max-w-[1280px] flex-col">
            <div className="carousal_conatiner  rounded-lg overflow-hidden mt-3 ">
                <Carousal></Carousal>
            </div>
            <div className="content_container flex md:flex-row flex-col mt-3">
                <div className="content__left md:w-[25%] w-[100%] ">
                    <Events title={"News"} color={"metal"} content={events}></Events>
                    <DailyDairy></DailyDairy>
                    <Events title={"Events"} color={"metal"} content={events}></Events>

                </div>
                <div className="content__right md:w-[75%] w-[90%] m-3  ">
                    <MainInfo></MainInfo>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home