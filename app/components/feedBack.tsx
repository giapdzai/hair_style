'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Map from './map'


export default function FeedBack() {

    const images = [
        '/site/event/hairmask.jpg',
        '/site/event/sale.jpg',
        '/site/event/scalpCare.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex]);


    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className='bg-[#f5e3e3]'>
            
            <div className='mx-auto max-w-[1400px]'>
                <div className='grid grid-cols-3 p-16 mb-10'>
                    <div className='col-span-2'>
                        <h1 className='text-red-500 text-3xl leading-normal'>Hair care is an essential aspect of our grooming routine that often goes unnoticed. Our hair is a unique feature that deserves attention and care to maintain its health and vitality.</h1>
                    </div>
                </div>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 border-2 border-pink-500 border-x-0 mb-36'>
                    <div className='flex justify-center items-center flex-col border-2 border-r-red-500 p-16'>
                        <div className="transition-transform duration-700">
                            <Image src={images[currentIndex]} className='border-2 border-red-500 w-full h-96' width={450} height={400} alt={`Image ${currentIndex}`} />
                        </div>
                        <div className='w-full flex justify-between items-center mt-12'>
                            <button className=" rotate-45 ml-28" onClick={goToPrevious}>
                                <Image src={'/site/previous.png'} width={50} height={50} alt='Previous'></Image>
                            </button>

                            <button className=" -rotate-45 mr-28" onClick={goToNext}>
                                <Image src={'/site/next.png'} width={50} height={50} alt='Next'></Image>
                            </button>
                        </div>
                    </div>
                    <div className='p-16 text-red-500 '>
                        <h1 className='text-3xl ml-9 sm:mb-20 md:mb-36 lg:mb-64'>Positive feedback on our studio is services</h1>
                        <div className='ml-9'>
                            <div className='flex justify-between items-center border-b-2 border-b-red-500 leading-8'>
                                <h1>HAIRCUTS</h1>
                                <p>100%</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 border-b-red-500 leading-8 my-3'>
                                <h1>HAIRSTYLING</h1>
                                <p>100%</p>
                            </div>
                            <div className='flex justify-between items-center border-b-2 border-b-red-500 leading-8'>
                                <h1>HAIR COLORING</h1>
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Map />
                </div>
                <div className='grid lg:grid-cols-6 md:grid-cols-3 sm-grid-cols-2 '>
                    <div className='border-2 border-red-500 p-16 grid place-items-center cursor-pointer'>
                        <Image src={'/site/feedback/1.png'} width={70} height={70} alt=''></Image>
                    </div>
                    <div className='border-2 border-red-500 grid place-items-center p-16 cursor-pointer'>
                        <Image src={'/site/feedback/2.png'} width={70} height={70} alt=''></Image>
                    </div>
                    <div className='border-2 border-red-500 grid place-items-center p-16 cursor-pointer'>
                        <Image src={'/site/feedback/3.png'} width={70} height={70} alt=''></Image>
                    </div>
                    <div className='border-2 border-red-500 grid place-items-center p-16 cursor-pointer'>
                        <Image src={'/site/feedback/4.png'} width={70} height={70} alt=''></Image>
                    </div>
                    <div className='border-2 border-red-500 grid place-items-center p-16 cursor-pointer'>
                        <Image src={'/site/feedback/5.png'} width={70} height={70} alt=''></Image>
                    </div>
                    <div className='border-2 border-red-500 grid place-items-center p-16 cursor-pointer'>
                        <Image src={'/site/feedback/1.png'} width={70} height={70} alt=''></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}
