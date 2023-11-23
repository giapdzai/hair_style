import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#e33030] px-10'>
            <div className='mx-auto sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1400px] grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-20'>
                <div className=''>
                    <h1 className='text-white lg:text-8xl sm:text-4xl font-serif'>Hair Stylist</h1>
                    <button className='w-48 text-red-500 bg-white rounded-full my-10 hover:bg-slate-800 hover:bg-opacity-30'>View More</button>
                    <p className='text-gray-300'>© Copyright 2030 Mobirise - All Rights Reserved</p>
                </div>
                <div>
                    <div className='grid grid-cols-3 text-2xl text-white mt-10 leading-relaxed'>
                        <div>
                            <h1>Services</h1>
                            <h1>Clients</h1>
                            <h1>Prices</h1>
                            <h1>Team</h1>
                        </div>
                        <div>
                            <h1>About Us</h1>
                            <h1>Forums</h1>
                            <h1>Events</h1>
                            <h1>News</h1>
                        </div>
                        <div>
                            <h1>Contacts</h1>
                            <h1>Location</h1>
                            <h1>Email us</h1>
                            <h1>Products</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
