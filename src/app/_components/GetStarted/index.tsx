'use client'
import { useState } from "react";
import Head from "next/head";
import Modal from "react-modal";

export default function GetStartedSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setIsPlaying(true); // Auto-play when the modal opens
    };

    const handleVideoToggle = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col items-center self-stretch">
            <Head>
                <title>Get Started Section</title>
            </Head>
            <div className="flex justify-center items-start self-stretch p-[2.625rem]">
                <button
                    onClick={toggleModal}
                    className="leading-5 lg:leading-7 flex justify-center items-start text-sm lg:text-lg gap-1.5 lg:gap-1 py-2 px-3 lg:py-3 lg:px-5 rounded-lg border border-buttonColor-500"
                >
                    <svg
                        className="w-6 h-6 sm:w-[21px] sm:h-[20px] md:w-[21px] md:h-[20px]"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                            stroke="#7F56D9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10.5 8L16.5 12L10.5 16V8Z"
                            stroke="#7F56D9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="hover:text-buttonHover-500 text-buttonColor-500 font-inter text-sm lg:text-lg font-semibold">
                        See how it works
                    </div>
                </button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Video Modal"
                className="flex justify-center items-center"
                overlayClassName="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center"
            >
                {/* Updated modal container with larger size */}
                <div className="bg-white rounded-lg p-6 relative max-w-7xl w-full h-auto lg:h-[600px]">
                    <button 
                        onClick={toggleModal} 
                        className="absolute top-2 right-2 text-buttonColor-500 text-3xl"
                    >
                        &times;
                    </button>
                    <video
                        src="/assets/video-test.mp4"
                        controls
                        autoPlay={isPlaying}
                        className="w-full h-full rounded-lg"
                    />
                    <button
                        onClick={handleVideoToggle}
                        className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex justify-center items-center"
                    >
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                </div>
            </Modal>
        </div>
    );
}
