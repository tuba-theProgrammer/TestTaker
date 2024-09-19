import Features from "../Features"
import Navbar from "../Header"
import HeroSection from "../HeroSection"
import Support from "../Support"

const LandingPage=()=>{
  return(<>
  <div className="sticky top-0 z-50">
    <Navbar/>
    </div>
    <div className="border border-b-inputFieldColor-500"></div>
            <div className="mx-auto max-w-screen-2xl bg-white overflow-x-hidden">
                <div className="flex flex-col mx-0 lg:mx-16">
                <section id="home" >       
    <HeroSection/>
    </section>  
    <Features/>
   <Support/>
   </div>
   </div>

  </>)
}
export default LandingPage