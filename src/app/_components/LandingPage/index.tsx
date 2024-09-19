import Features from "../Features"
import Footer from "../Footer"
import Navbar from "../Header"
import HeroSection from "../HeroSection"
import Support from "../Support"

const LandingPage=()=>{
  return(<>
  <div className="sticky top-0 z-50">
    <Navbar/>
    <div className="border border-b-inputFieldColor-500"></div>
    </div>
  
            <div className="mx-auto max-w-screen-2xl bg-white overflow-x-hidden">
                <div className="flex flex-col mx-0 lg:mx-16">
                <section id="home" >       
    <HeroSection/>
    </section> 
    <section id="feature" >       
    <Features/>
    </section>
    <section id="support" >      
   <Support/>
   </section>
   <section id="footer" >   <Footer/> </section> 
   </div>
   </div>

  </>)
}
export default LandingPage