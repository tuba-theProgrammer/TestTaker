'use client';


import { useState } from 'react';
import Scene from './Scene';
import GetStartedSection from '../GetStarted';

export default function HeroSection() {
    
    return (
        
        <div className="flex flex-col-reverse md:flex-row shadow-sm items-center gap-3 lg:gap-24 mt-10  lg:mt-8 ">
            <div className="md:w-1/2 m-10 lg:m-0 ">
            <div className='flex flex-col  gap-2'>
                <div className="text-2xl xlg:text-3xl 2xl:text-4xl  font-inter font-semibold  2xl:leading-[44px] leading-7 my-5 ">
                    <span className="text-smallHeading-500">AI-powered Test </span>
                    <br />
                    <span className="text-headingColor-500">Proctoring </span>
                    <span className="text-textColor-500">and </span>
                    <span className="text-headingColor-500">Creation Platform </span>
                </div>
                <div className="text-base font-normal  text-textColor-500 leading-[1.625rem]">
                
                Seamlessly generate exams with AI, monitor test-takers in real-time, and ensure integrity through advanced proctoring technology.              
                </div>
              <GetStartedSection/>
                </div>
              
               
            </div>
            <div className="block xlg:hidden">
              <Scene/>
            </div>
 
        </div>
    );
}
