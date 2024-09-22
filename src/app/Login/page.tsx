'use client'

import Head from "next/head"
import { useState } from "react";
import axios from '../../app/_utils/axios'

import { useRouter } from "next/navigation";
import CryptoJS from 'crypto-js';
import { getUserId } from "../../app/_utils/generalFunctions";
interface LoginProps {
  onUsernameClick: () => void;
}

 const Login: React.FC<LoginProps> = ({ onUsernameClick }) => {
  const router = useRouter();
    const reviews = [
        {
          text: "We’ve been using Untitled to kick start every new project and can’t imagine working without it.",
          name: "Amélie Laurent",
          company: "Rocket.us",
          description: "Space Exploration Agency",
        },
        {
          text: "Untitled has transformed our workflow and increased our productivity significantly.",
          name: "John Doe",
          company: "Tech Solutions",
          description: "Software Development Company",
        },
        // Add more reviews as needed
      ];
      
  
      const [currentIndex, setCurrentIndex] = useState(0);
  

      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
      };
    
      const { text, name, company, description } = reviews[currentIndex];
    
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [rememberMe, setRememberMe] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const [responseMessage, setresponseMessage] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      //const [isVerifyingEmail, setIsVerifyingEmail] = useState<boolean>(false);
  
    const handlePasswordChange = (event:any) => {
      setPassword(event.target.value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
   
 

  const handleForgotPasswordClick = () => {
    // Add logic to handle forgot password action, e.g., show a modal or navigate to a forgot password page
    console.log('Forgot Password clicked');
  };

  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e:any) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setErrorMessage('Both fields are required');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setErrorMessage('Invalid email address');
//       return;
//     }

//     try {
 
//       const response = await axios.post('/auth/login-by-email', {
//         email,
//         password,
//         rememberMe
//       });
//       console.log(response.data)

// if (response.data.responsePayload?.user_id) {
// const userId = response.data.responsePayload.user_id;

// const encryptedUserId = CryptoJS.AES.encrypt(userId, process.env.NEXT_PUBLIC_SECRET_KEY as string).toString();

// localStorage.setItem('userId', encryptedUserId);

// if (!response.data.responsePayload.username) {
//   onUsernameClick();
// }else{
//   if(response.data.responsePayload.email_verified===true){
//     router.push(`/homepage`);
//   }else{
//    // setIsVerifyingEmail(true);
//     const decryptedUserId = getUserId(encryptedUserId)
//     const EmailVerifyResponse = await axios.get(`/auth/send-email-verification/${decryptedUserId}`);
//     if(EmailVerifyResponse.data.responsePayload){
//       router.push(`/verifyEmail?userId=${encryptedUserId}`);
//     }

//   //  setIsVerifyingEmail(false);
// }
// }

// }
//       setresponseMessage(response?.data?.responseMessage);

//     } catch (error:any) {
//       // Handle error
//       console.error(error);
//       setErrorMessage(error.response?.data?.responseMessage);
//     }
  };

 


  return(
    <>
  
  <div className="mx-auto min-h-screen max-w-screen-2xl bg-white overflow-x-hidden">
            <div className="flex flex-col  mx-0 lg:mx-16">
 
            <div className="flex justify-center items-center mb-10 mt-16 bg-white">
                

     <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg md:shadow-md">
     <div className="w-full md:w-1/2 px-8 py-0 flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-5 lg:gap-8 md:gap-5">
                            <div className="flex flex-col items-start gap-2 lg:gap-3 md:gap-2 self-stretch">
                                <div className="text self-stretch text-headingColor-500 font-inter text-3xl lg:text-4xl md:text-3xl font-semibold leading-7 md:leading-7 lg:leading-[44px]">Log in</div>
                                <div className="self-stretch text-textColor-500 font-inter leading-5 md:leading-5 lg:leading-6">Welcome back! Please enter your details.</div>
                            </div>
                            <div className="flex flex-col items-center self-stretch rounded-xl">
                                <div className="flex flex-col items-start gap-5 self-stretch">
                                    <div className="flex flex-col items-start self-stretch">
                                        <div className="flex flex-col items-start self-stretch gap-1.5">
                                            <div className="text self-stretch text-smallHeading-500 font-inter text-sm font-medium leading-5">Email</div>
                                            <div className="relative flex items-center w-full">
                                                <svg
                                                    className="absolute left-3"
                                                    width={21}
                                                    height={20}
                                                    viewBox="0 0 21 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19.0832 4.99992C19.0832 4.08325 18.3332 3.33325 17.4165 3.33325H4.08317C3.1665 3.33325 2.4165 4.08325 2.4165 4.99992M19.0832 4.99992V14.9999C19.0832 15.9166 18.3332 16.6666 17.4165 16.6666H4.08317C3.1665 16.6666 2.4165 15.9166 2.4165 14.9999V4.99992M19.0832 4.99992L10.7498 10.8333L2.4165 4.99992"
                                                        stroke="#667085"
                                                        strokeWidth="1.66667"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e:any) => setEmail(e.target.value)}
                                                    className="text font-inter flex items-center w-full py-2 pl-10 pr-3 rounded-lg border border-inputFieldColor-500 bg-white leading-6"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start self-stretch">
                                        <div className="flex flex-col items-start self-stretch gap-1.5">
                                            <div className="text self-stretch text-smallHeading-500 font-inter text-sm leading-5">Password</div>
                                            <div className="relative flex items-center w-full">
                                                <svg className="absolute left-3" width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.58333 9.16675V5.83341C6.58333 4.72835 7.02232 3.66854 7.80372 2.88714C8.58512 2.10573 9.64493 1.66675 10.75 1.66675C11.8551 1.66675 12.9149 2.10573 13.6963 2.88714C14.4777 3.66854 14.9167 4.72835 14.9167 5.83341V9.16675M4.91667 9.16675H16.5833C17.5038 9.16675 18.25 9.91294 18.25 10.8334V16.6667C18.25 17.5872 17.5038 18.3334 16.5833 18.3334H4.91667C3.99619 18.3334 3.25 17.5872 3.25 16.6667V10.8334C3.25 9.91294 3.99619 9.16675 4.91667 9.16675Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    placeholder="••••••••"
                                                    className="text font-inter flex items-center w-full py-2 pl-10 p3-3 rounded-lg border border-inputFieldColor-500 bg-white leading-6"
                                                />
                                                <svg className="absolute right-3" onClick={togglePasswordVisibility} width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_7798_2519)">
                                                        <path
                                                            d="M1.41699 8.00008C1.41699 8.00008 4.08366 2.66675 8.75033 2.66675C13.417 2.66675 16.0837 8.00008 16.0837 8.00008C16.0837 8.00008 13.417 13.3334 8.75033 13.3334C4.08366 13.3334 1.41699 8.00008 1.41699 8.00008Z"
                                                            stroke="#667085"
                                                            strokeWidth="1.66667"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path d="M8.75033 10.6667C9.83759 10.6667 10.717 9.78735 10.717 8.70008C10.717 7.61282 9.83759 6.73341 8.75033 6.73341C7.66306 6.73341 6.78366 7.61282 6.78366 8.70008C6.78366 9.78735 7.66306 10.6667 8.75033 10.6667Z" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_7798_2519">
                                                            <rect width={16} height={16} fill="white" transform="translate(0.750326)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                            <div className="flex justify-between items-center w-full">
                                        <div className="flex items-center gap-1.5">
                                            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="text-smallHeading-500 w-4 h-4" />
                                            <label htmlFor="rememberMe" className="text text-smallHeading-500 font-inter leading-5">Remember for 30 days </label>
                                        </div>
                                      
                                    </div>
                                    <div>
                                            <button onClick={handleForgotPasswordClick} className="text text-textColor-500 font-inter leading-5 hover:underline">Forgot password?</button>
                                        </div>
   <div className="flex flex-col items-center self-stretch rounded-lg">
      <button
        onClick={handleLogin}
        className="flex justify-center items-center gap-2 pl-[1.125rem] pr-[1.125rem] p-2 rounded-lg border border-buttonColor-500 bg-buttonColor-500 text-white w-full font-inter font-semibold leading-6"
      >
        Sign in
      </button>
      {errorMessage && <div className="flex text-red-500 mt-2">{errorMessage}</div>}
      {responseMessage && <div className="text-green-500 mt-2">{responseMessage}</div>}
    </div>
  <div className="flex items-start gap-3 lg:gap-4 md:gap-3 self-stretch">
    
   
  
  </div>

      </div>
      </div>
      <div className="flex justify-center items-start self-stretch gap-1">
      <div className="text-textColor-500 font-inter text-sm leading-5">Don’t have an account?</div>
      <div className="flex items-start">
      <div className="flex items-start">
      <a href="/SignUp" className="flex justify-center items-center gap-2 cursor-pointer hover:underline  text-clickableLabelColor-500 font-semibold leading-5 text-sm">Sign up</a>

    
        </div>  
    
        </div>
      </div>
      
      </div>

        </div>

        <div className="relative py-4 mb-5 hidden md:block bg-gray-200 w-full md:w-1/2 rounded-l-xl">
      <img
        alt="reviews image"
        src="./assets/Images/loginBg.png"
        className="w-full h-full object-cover rounded-l-xl"
      />
      <div className="absolute bottom-0 px-4 py-10 inline-flex flex-col items-start">
        <div className="flex flex-col items-start gap-3 w-full self-stretch text-white font-inter text-3xl font-medium leading-[2.375rem]">
          “{text}”
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="name self-stretch text-white font-inter text-4xl font-medium leading-[44px]">{name}</div>
          <div className="flex items-start gap-3 self-stretch">
            <div className="text_and_supporting_text flex flex-col items-start gap-0.5">
              <div className="self-stretch text-white font-inter text-lg font-semibold leading-7">{company}</div>
              <div className="self-stretch text-white font-inter font-medium leading-6">{description}</div>
            </div>
            <div className="mr-6 py-10 flex items-start gap-8 absolute right-0 bottom-0">
              <div
                className="flex justify-center items-center gap-3 w-14 h-14 rounded-[28px] border border-[#ffffff]/50 cursor-pointer"
                onClick={handlePrevious}
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div
                className="flex justify-center items-center gap-3 w-14 h-14 rounded-[28px] border border-[#ffffff]/50 cursor-pointer"
                onClick={handleNext}
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>
</div>
    </div>


</div>


    </>
  )
}

export default Login;
