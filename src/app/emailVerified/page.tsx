'use client'


import EmailVerifiedBody from "./emailVerifiedBody";


export default function EmailVerifiedPage() {
    return (
        <>
            <div className="bg-white ">
              
                <div className="border border-b-inputFieldColor-500"></div>
                <div className="min-h-screen flex flex-col flex-grow flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center mb-10 mt-16 bg-white">
                       <EmailVerifiedBody/>
                    </div>
                </div>
            </div>
        </>
    );
}
