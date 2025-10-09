import { Home } from "./Home"
import { Header } from "./Header"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"



function MainHomePage() {
  
  return (
    <div className="min-h-screen bg-[#EFDFD8] ">
    <div className="px-8 flex flex-col justify-center items-center font-mono">
      <div className="w-full py-4 px-2 lg:px-4" >
        <Header />
      </div>
      <div className="w-full px-2 lg:px-4 ">
        <Navbar />
      </div>
      <div className="w-full px-2 lg:px-4">
        <Home />
      </div>
      <div className="w-full px-2 lg:px-4 ">
        <Footer />
      </div>
    </div>
          
    </div>
  )
}

export default MainHomePage
