import AboutMe from "./components/AboutMe/AboutMe"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import MySkills from "./components/MySkills/MySkills"
import MyWorks from "./components/MyWork/MyWorks"
import Navbar from "./components/Navbar/Navbar"
import Service from "./components/Service/Service"


function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Service/>
      <MySkills/>
      <MyWorks/>
      <Footer/>
    </>
  )
}

export default App
