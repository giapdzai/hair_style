'use client'
import React, { useState } from 'react';
import Image from 'next/image'

export default function Event() {
    const [imageUrl, setImageUrl] = useState('/site/event/hairmask.jpg');
    const [activeButton, setActiveButton] = useState('HairMask');
    const [activeContent, setActiveContent] = useState('Hair masks and deep conditioning treatments provide intensive nourishment to the hair. These treatments are typically applied after shampooing and left on for a specific period to penetrate the hair shaft, repair damage, and restore moisture and shine.');

    const showImage = (platform: string) => {
        setActiveButton(platform);
        switch (platform) {
            case 'HairMask':
                setImageUrl('/site/event/hairmask.jpg');
                setActiveContent('Hair masks and deep conditioning treatments provide intensive nourishment to the hair. These treatments are typically applied after shampooing and left on for a specific period to penetrate the hair shaft, repair damage, and restore moisture and shine.');
                break;
            case 'ScalpCare':
                setImageUrl('/site/event/scalpCare.jpg');
                setActiveContent('A healthy scalp is crucial for healthy hair growth. Scalp care involves practices like exfoliation to remove dead skin cells, regular cleansing to remove excess oil and buildup, and massaging to stimulate blood circulation and promote hair growth.');
                break;
            case 'Trimming':
                setImageUrl('/site/event/trimming.jpg');
                setActiveContent('Regular trimming helps remove split ends and prevents them from traveling up the hair shaft, leading to further damage. Getting haircuts from a professional stylist helps maintain a desired shape and style while keeping the hair healthy.');
                break;
            default:
                setImageUrl('');
                setActiveContent('');
                break;
        }
    };

    return (
        <>
            <div className='grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mx-auto sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1400px]'>
                <div className='border-2 border-red-500 bg-red-500 flex flex-col justify-center items-center h-[720px] relative'>
                    <Image src={'/site/event/sale.jpg'} className='w-[338px] h-[420px]' width={500} height={500} alt=''></Image>
                    <div className='absolute top-1/3 right-1/3 bg-red-600 w-20 h-20 text-2xl flex justify-center items-center rounded-full text-white'>
                        <h1>15%</h1>
                    </div>
                    <div className='absolute top-[72.5%] text-white  text-center'>
                        <p>2023</p>
                        <h1 className='text-4xl'>Your chance</h1>
                    </div>
                </div>
                <div className='border-2 border-red-500 flex flex-col justify-center items-center'>
                    <h1 className='text-6xl py-6 text-red-500'>Seasonal event</h1>
                    <button className='w-[150px] border-2 border-red-500 rounded-full bg-red-500 p-1 text-white'>View more</button>
                </div>
            </div>
            <div className='mx-auto max-w-[1400px] mb-[150px]'>
                <div className='flex flex-col justify-center items-center  text-3xl font-serif py-10 sm:flex-row'>
                    <button onClick={() => showImage('HairMask')} className={`text-pink-300  ${activeButton === 'HairMask' ? 'text-red-600' : ''}`}>Hair Mask</button>
                    <button onClick={() => showImage('ScalpCare')} className={`mx-10 text-pink-300 my-5 sm:my-0 ${activeButton === 'ScalpCare' ? 'text-red-600' : ''}`}>Scalp Care</button>
                    <button onClick={() => showImage('Trimming')} className={`text-pink-300 ${activeButton === 'Trimming' ? 'text-red-600' : ''}`}>Trimming</button>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='px-10'>
                        {imageUrl && <Image src={imageUrl} className='border-2 border-pink-500 w-full h-96' width={500} height={500} alt='...'></Image>}

                    </div>
                    <div className='lg:col-span-2 md:col-span-2 sm:col-span-1 p-12  text-red-500'>
                        <p className='text-3xl' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">{activeContent}</p>
                        <button className='border-2 border-red-500 rounded-full w-36 mt-10 hover:text-gray-300'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}
