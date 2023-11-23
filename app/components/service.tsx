
import React from 'react'
import Image from 'next/image'


export default function Service() {

  return (
    <>
      <div className='mt-36 mx-auto max-w-[1400px] mb-36'>
        <h1 className='font-medium lg:text-7xl sm:text-5xl md:text-7xl mb-12 text-center text-pink-600'>Types of Beauty Services for Hair</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-none md:gap-12 lg:gap-16 text-red-500'>
          <div className='px-10 '>
            <Image src={'/site/service/hair.jpg'} data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1300" className='w-full h-[390px]' width={500} height={500} alt=''></Image>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:cols-span-2 md:col-span-2'>
            <div>
              <div className=' px-10'  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300">
                <p className='text-2xl mb-4'>01</p>
                <h1 className='font-bold mb-5 text-2xl'>HAIRCUTS</h1>
                <p className='mb-16'>Haircuts involve trimming, shaping, or styling the hair to achieve a desired length or shape.</p>
              </div>
              <div className='px-10' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300">
                <p className='text-2xl mb-4'>02</p>
                <h1 className='font-bold mb-5 text-2xl'>STYLING</h1>
                <p className='mb-16'>Hair styling services focus on creating specific looks by using techniques like blowouts.</p>
              </div>
            </div>
            <div>
              <div className='px-10'  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300">
                <p className='text-2xl mb-4'>03</p>
                <h1 className='font-bold mb-5 text-2xl'>HAIR COLORING</h1>
                <p className='mb-16'>This service involves changing the color of the hair using various techniques like highlights.</p>
              </div>
              <div className='px-10'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300">
                <p className='text-2xl mb-4'>04</p>
                <h1 className='font-bold mb-5 text-2xl'>TREATMENTS</h1>
                <p className='mb-16'>These services aim to improve the overall health and appearance of the hair.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto sm:max-w-[550px] md:max-w-[700px] lg:max-w-[1400px] mb-36 px-10'>
        <button className='w-full lg:h-52 md:h-40 border-2 border-pink-400 bg-pink-100 hover:bg-pink-500 hover:bg-opacity-20 rounded-full sm:text-4xl lg:text-8xl md:text-7xl text-[#e33030]'>View All</button>
      </div>
      <div className='grid bg-red-500 p-10 lg:p-[30px] md:p-[20px] lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 border-2 border-red-500 mx-auto max-w-[1400px] mb-36'>
        <div className=''>
          <Image src={'/site/service/room.jpg'} width={100} height={100} layout='responsive' alt=''></Image>
        </div>
        <div className=' text-white p-12 '>
          <h1 className='text-3xl leading-10' >Visiting a beauty salon offers numerous benefits</h1>
          <p className='py-8 text-xl'>Beauty salons are staffed with trained professionals who possess extensive knowledge and expertise in their respective fields. Whether it is a hairstylist, esthetician, or makeup artist, their skills and experience ensure that you receive high-quality services tailored to your unique needs.</p>
          <p className='text-xl'>Visiting a beauty salon offers a range of benefits that extend beyond physical appearance.</p>
        </div>
      </div>
    </>
  )
}


