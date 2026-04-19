// import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/sections/Hero"
import { Problem } from "@/sections/Problem"
import { Service } from "@/sections/Service"
import { Testimonial } from "@/sections/Testimonial"
import { Footer } from "@/layout/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* <Navbar/> */}
      <main>
        <Hero/>
        <Problem/>
        <Service/>
        <Testimonial/>
      </main>
      <Footer/>
      <WhatsAppButton />
    </div>
  )
}

export default App
