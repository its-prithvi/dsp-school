import React from 'react'

function Footer() {
    return (
        <div className='footer w-[100%] bg-primaryDark p-10 mt-4'>
            <div className="footer__conatiner md:w-[100%] w-[80%] max-w-[1280px] m-auto flex justify-between text-white">
                <div className="footer__left flex w-[20%]  h-[100%] justify-center items-center">
                    <h1>© 2023 Inphynous Techno Solutions · Legal Information London Road, West
                        Farley, Lincolnshire LN14 8RT T: 01875 348 875 · E: admin@inphynous.com</h1>
                </div>
                <div className="footer__right flex w-[20%] h-[100%] justify-center items-center">
                    <h1>School Website Powered Inphynous Techno Solutions</h1>
                </div>
            </div>
            <hr className='m-2' />
            <h1 className='text-center text-white'>© Copyright 2023</h1>
        </div>
    )
}

export default Footer