import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const SkillsCardSlide = () => {
 
const mySkills = [
  "I specialize in web development, creating dynamic and responsive websites that engage users",
  "I masterfully extract valuable data with web scraping, turning information into insights",
  "I streamline workflows with automation, driving productivity and efficiency",
  "I efficiently organize and maintain data with expert database management",
  "I build intelligent systems with machine learning, enabling data-driven decisions",
  "I leverage advanced Excel skills to analyze data and automate complex tasks",
  "I bring ideas to life through immersive experiences with Unity game development"
]
const [skilShow, setSkilShow] = useState(0);
const [btnpressed, setBtnpressed] = useState();
const [vw,setVw] = useState();
const size = mySkills.length;
const scrollContainerRef = useRef();

  const handleNext = () => {
    // if (scrollContainerRef.current) {
    //   scrollContainerRef.current.scrollBy({ left: 215, behavior: 'smooth' });
    // }
    setBtnpressed('next')

    let next = (skilShow+1)
    if (next!=size){
      setSkilShow(next)
    }
  };

  const handlePrev = () => {
    // if (scrollContainerRef.current) {
    //   scrollContainerRef.current.scrollBy({ left: -215, behavior: 'smooth' });
    // }
    setBtnpressed('prev')

    let prev = (skilShow-1)
    if (prev>=0){
      setSkilShow(prev)
    }
  };

  useEffect(() => {
    if(btnpressed=='next'){
      setVw('100vw')
    }else{
      setVw('-100vw')
    }
  },[btnpressed]);

  return (
    <div className='my-8 text-left'>

        <div className='justify-between flex flex-row gap-4'>
        <div className='p-2 my-auto' onClick={handlePrev}><img src={assets.dropdown_icon} className='rotate-180' alt="" /></div>
          <div ref={scrollContainerRef} className='min-w-[70%] flex flex-row h-[480px] items-center gap-4 overflow-hidden relative justify-center'>
              {mySkills.map((txt,index)=><motion.div initial={{ x:btnpressed=='next'&&skilShow==index?"100vw":"-100vw" }} animate={{ x: index==skilShow?'0':vw }} transition={{ type: "spring", stiffness: 50 }} className={`${index==skilShow?'block':'hidden'} w-full justify-center absolute text-2xl bg-teal-50 sm:min-w-[600px] min-w-[250px]  flex items-center min-h-[280px] sm:max-w-[70%] text-center p-3`} index={index}>{txt}</motion.div>)}      
          </div>
          <div className='p-2 my-auto' onClick={handleNext}><img src={assets.dropdown_icon} className='' alt="" /></div>
        </div>
    </div>
  )
}

export default SkillsCardSlide