'use client';
import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState<number>(0);
 
    useEffect(() => {
        const updateImageHeight = () => {
            if (imageContainerRef.current) {
                const height = imageContainerRef.current.clientHeight;
                setImageHeight(height);
            }
        };

        // Initial height calculation
        updateImageHeight();

        // Recalculate height on window resize if screen is larger than a specific breakpoint
        const handleResize = () => {
            if (window.innerWidth > 768) { // Adjust the breakpoint as needed
                updateImageHeight();
            }
        };

        // Add event listener on mount
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className=" items-center justify-center flex flex-col md:flex-row  mt-8  lg:mt-24 mb-5 md:mb-24 mx-5  lg:mx-0">
            {/* Left child: Image */}
            <div className="w-full md:w-1/2" ref={imageContainerRef}>
                <h2 className="block md:hidden w-full text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                   TestTaker <span className='text-buttonColor-500 font-semibold'>Features!</span>
                </h2>
                <img
                    src="/assets/Images/Content3.png"  // Replace with your image path
                    alt="Image Alt Text"
                    className="hidden md:block object-contain  rounded-lg"
                />
                
                <img
                    src="/assets/Images/Content4.png"  // Replace with your image path
                    alt="Image Alt Text"
                    className="block md:hidden object-contain w-full h-full rounded-lg"
                />

            </div>

            {/* Right child: Content */}
            <div className=' flex flex-col w-full md:w-1/2 my-5 md:my-0'>
                <h2 className="hidden md:block text-2xl xl:text-4xl font-semibold ">
                    TestTaker <span className='text-buttonColor-500 font-semibold'>Features!</span>
                </h2>
              
                <div className={`flex flex-col h-full justify-center my-0 lg:my-10 mx-2 xlg:mx-5 px-0 lg:px-5 `}>
      <div
        className="flex w-full items-center md:items-start mb-5 bg-gray-100 rounded-lg px-5 lg:px-2 py-5  transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' }}
      >
        <span className="bg-buttonColor-500 text-white rounded-md p-1 xlg:p-3 text-sm lg:text-xl font-semibold mr-5">01</span>
        <p className="text-smallHeading-400 text-sm xlg:text-xl line-clamp-2 md:line-clamp-none font-inter leading-5 xlg:leading-[1.625rem]">
        Design exams quickly with our AI-driven tool. Generate and customize questions effortlessly based on your preferences. Tailor tests to meet specific criteria with ease.        </p>
      </div>
      <div
        className="flex items-start mb-5 bg-gray-100 rounded-lg px-5 xlg:px-2 py-5 transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' }}
      >
        <span className="bg-buttonColor-500 text-white rounded-md p-1 xlg:p-3 text-sm lg:text-xl font-semibold mr-5">02</span>
        <p className="text-smallHeading-400 text-sm xlg:text-xl line-clamp-2 md:line-clamp-none font-inter leading-5 xlg:leading-[1.625rem]">
        Monitor test-takers with advanced AI and webcam technology. Detect suspicious behavior and record sessions for integrity checks. Receive instant alerts for any anomalies.        </p>
      </div>
      <div
        className="flex items-start mb-5 bg-gray-100 rounded-lg px-5 xlg:px-2 md:px-5 py-5 transition-transform duration-300 hover:scale-105"
        style={{ boxShadow: '0px 4px 20px 0px rgba(65, 91, 245, 0.06)' }}
      >
        <span className="bg-buttonColor-500 text-white rounded-md p-1 xlg:p-3 text-sm lg:text-xl font-semibold mr-5">03</span>
        <p className="text-smallHeading-400 text-sm xlg:text-xl line-clamp-2 md:line-clamp-none font-inter leading-5 xlg:leading-[1.625rem]">
        Enjoy a smooth and intuitive interface for both exam creators and takers. Effortlessly manage tests, track progress, and access results with user-friendly navigation and real-time updates.        </p>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Features;
