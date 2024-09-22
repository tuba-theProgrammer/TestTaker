import React from "react";
import { useRouter } from "next/navigation";
export default function EmailVerifiedBody() {
    const router = useRouter();
    function HomeScreenClick(){
    router.push('./homepage')
    }

  return (
    <div className="flex flex-col justify-center items-center shadow-xl rounded-lg bg-white w-full h-full lg:w-1/2 lg:h-1/2 p-5">
      <div className="relative flex justify-center items-center my-5">
        <img
          alt="email icon"
          src="./assets/ContentImages/emailVerification.svg"
          className="w-1/2 h-1/2"
        />
        <div className=" absolute bottom-0 right-12 flex justify-center items-center">
        <img
          alt="email icon"
          src="./assets/Icons/successCheckIcon.svg"
          className="w-[70px] h-[70px]"
        />
          </div>
      </div>
      <div className="flex flex-col items-center gap-1 lg:gap-2 self-stretch ">
        <div className="text-headingColor-500 font-inter text-xl lg:text-2xl font-semibold leading-5 lg:leading-7">
        Email Verified Successfully!
        </div>
        <div className="m-5 text-textColor-500 font-inter leading-6 lg:leading-7">
        Your account is now fully activated, and you can enjoy all the features and benefits we offer.

If you have any questions or need further assistance, please feel free to contact our support team.

                </div>
      </div>
      <div className="border border-b-inputFieldColor-500"></div>
      <div className="flex justify-center my-6">
        <div className="text-buttonColor-500 text-2xl font-semibold leading-6 lg:leading-7">
        
Welcome aboard!
        
        </div>
      </div>
     
      <div className="flex justify-end w-full">
        <div onClick={HomeScreenClick} className="cursor-pointer hover:text-buttonHover-400 flex gap-2 px-[1.125rem] p-2 rounded-lg border border-buttonColor-500 text-buttonColor-500 bg-white font-inter font-semibold leading-5 lg:leading-6">
          Back to HomeScreen
        </div>
      </div>
    </div>
  );
}
