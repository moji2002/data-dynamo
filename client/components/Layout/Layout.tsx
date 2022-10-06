// import Footer from "@components/Footer"
import Navbar from "@components/Navbar"

const Layout = ({children}) => {
    return (
      <>
      <Navbar/>
      <div className="container mx-auto px-4">
      {children}
      </div>
      {/* <Footer/> */}
      </>
    )
  }
  
  export default Layout
  