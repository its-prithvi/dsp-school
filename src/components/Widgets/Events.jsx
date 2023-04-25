import React from 'react'

function Events({title,content,color}) {
  return (
    <div className={`event__container  bg-yellow rounded-lg m-3 p-2`}>
    <div className="event__title text-center font-bold text-white mb-3 text-2xl">
        <h1>{title}</h1>
    </div>
    <div className="event__content bg-white rounded-lg p-3">
        <ul className="event__items flex flex-col  justify-center pl-5 list-disc text-primaryDark ">
            {
                content?.map((e,idx)=> (
                    <li key={idx} className='event_item mb-5 hover:text-event cursor-pointer'>{e}</li>
                    ))
            }
        </ul>
    </div>

</div>
  )
}

export default Events