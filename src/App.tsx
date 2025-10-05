import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"


function App() {


  return (
    <div className="h-screen bg-[#EFDFD8]">
    <div className="px-8 flex flex-col justify-center items-center font-mono  ">
      <div className="w-full p-4" >
        <Header />
      </div>
      <div className="w-full px-4">
        <Navbar />
      </div>
      <div className="w-full px-4">
        <Home />
      </div>
      <div className="w-full px-4 mt-128">
        <Footer />
      </div>
    </div>
    </div>
  )
}

export default App
