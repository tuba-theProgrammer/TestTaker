'use client';
import React, { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import emailjs from "emailjs-com";

interface FormState {
    name: string;
    email: string;
    message: string;
  }
const Support = () => {
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
    const formRef = useRef<HTMLFormElement>(null);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [form, setForm] = useState<FormState>({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .send(
          process.env.EMAILJS_SERVICE_ID || "service_75jc6vr",
          process.env.EMAILJS_TEMPLATE_ID || "template_paoxs2c",
          {
            from_name: form.name,
            to_name: "Tuba Asif",
            from_email: form.email,
            to_email: "tubarajput456@gmail.com",
            message: form.message,
          },
          process.env.EMAILJS_PUBLIC_KEY || "FF3OJ2A33hWo-7JOY"
        )
        .then(
          () => {
            setLoading(false);
            setResponseMessage("Thank you. I will get back to you as soon as possible.");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            setResponseMessage("Ahh, something went wrong. Please try again.");
          }
        );
    };
  

    return (
        <div className=" items-center justify-center flex flex-col md:flex-row  mb-24 mx-5  lg:mx-0 gap-10">
               {/* Left child: Image */}
               <div className="w-full md:w-1/2" ref={imageContainerRef}>
                <h2 className="w-full text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
                <span  className='text-buttonColor-500 font-semibold'>24/7 </span>Customer   <span  className='text-buttonColor-500 font-semibold'> Support?</span>

                </h2>
                <div className="text-base md:text-lg font-normal  text-textColor-500 leading-[1.625rem]">
                Our dedicated support team is here to assist you around the clock. Whether you need help setting up tests, managing proctoring features, or resolving any issues, we're just a message away. Experience seamless support to ensure smooth and efficient exam management.                </div>
              
             
            </div>

             {/* Right child: Content */}
             <div className=' flex flex-col w-full md:w-1/2 my-5 md:my-0'>
              
                            
                <form ref={formRef} onSubmit={handleSubmit} className=" flex flex-col gap-8">
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=" py-4 px-6 placeholder:text-textColor-500  rounded-lg  border border-textColor-500 font-medium"
            />
          </label>
          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="py-4 px-6 placeholder:text-textColor-500  rounded-lg  border border-textColor-500   font-medium"
            />
          </label>
          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-black font-bold mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 placeholder:text-textColor-500 border border-textColor-500 rounded-lg font-medium"
            />
          </label>

          <button
            type="submit"
           className="cursor-pointer hover:bg-buttonHover-500 flex justify-center items-center gap-2 px-[1.125rem] p-2 rounded-lg border border-buttonColor-500 bg-buttonColor-500 text-white font-inter font-semibold leading-5 lg:leading-6 cursor-pointer"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* Display Response Message */}
        <div
          className={`flex items-center justify-center text-[15px] mt-7 ${
            responseMessage.includes("Thank you")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {responseMessage}
        </div>
                
             
            </div>
         
          
        </div>
    );
};

export default Support;
