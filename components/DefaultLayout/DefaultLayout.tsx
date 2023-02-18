// import Footer from "@components/Footer"
import Drawer from '@components/Drawer'
import Navbar from '@components/Navbar'
import { useState, ReactNode, FC, memo } from 'react'

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      {/* <Drawer isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}> */}
      <Navbar setDrawerOpen={setDrawerOpen} />
      <div className="container mx-auto px-4">{children}</div>
      {/* <Footer/> */}
      {/* </Drawer> */}
    </>
  )
}

export default memo(Layout)
