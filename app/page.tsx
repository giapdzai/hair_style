'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Header from './components/header'
import Service from './components/service'
import Event from './components/event'
import FeedBack from './components/feedBack'
import Footer from './components/footer'
import AOS from 'aos'
import 'aos/dist/aos.css';




export default function Home() {
  useEffect(() => {
    AOS.init({
      // Các tùy chọn...
    });
  }, []);

  return (
    <main>
      <Header />
      <div className='relative overflow-hidden border-2 border-t-pink-600 mb-16 mt-[68px]' style={{ backgroundImage: "url('/site/banner/room-hair.jpg')", backgroundAttachment: 'fixed', backgroundSize: 'cover', height: '650px' }}>
        <div className='absolute inset-0'>
          <div className='grid grid-cols-2 gap-40 h-full'>
            <div className='flex flex-col justify-end items-start text-slate-100 p-28' >
              <h1 className='text-5xl py-12' data-aos="fade-right">HAIR STYLIST</h1>
              <button className='py-2 w-[150px] rounded-full bg-red-600 hover:bg-slate-400 hover:bg-opacity-20'>VIEW MORE</button>
            </div>
            <div className='flex justify-end items-end mb-7'>
              <Image src={'/site/banner/girl.jpg'} className='rounded-s-[170px] ' width={400} height={350} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-32 md:16 mb-16 mx-auto max-w-[1400px] border-b-2 border-b-pink-600 p-12'>
        <div className='text-red-500 leading-loose' >
          <h1 className='font-normal text-5xl mb-20' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Hair Stylist</h1>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1 className='font-bold mb-5'>THE LATEST TRENDS</h1>
            <p className='w-[250px] mb-7'>Their mastery of these tools allows them to transform hair, whether it is through precise cutting, creative coloring, or innovative styling.</p>
          </div>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1 className='font-bold mb-5'>INTERPERSONAL SKILLS</h1>
            <p className='w-[250px]'>They create a welcoming and comfortable environment, making clients feel at ease as they discuss their hair goals and concerns.</p>
          </div>
        </div>
        <div>
          <Image src={'/site/banner/hair.jpg'} data-aos="zoom-in" className='mx-auto w-auto h-auto' width={500} height={500} alt=''></Image>
        </div>
      </div>
      <Service />
      <Event />
      <FeedBack />
      <Footer />
    </main>
  )
}
