import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  isDrawerOpen: boolean
  setDrawerOpen: (open: boolean) => any
}

const Drawer: FC<Props> = ({ children, isDrawerOpen, setDrawerOpen }) => {
  return (
    <>
      {isDrawerOpen && (
        <div onClick={() => setDrawerOpen(false)}>
          hello drawer - click to close drawer
        </div>
      )}

      {children}
    </>
  )
}

export default Drawer
