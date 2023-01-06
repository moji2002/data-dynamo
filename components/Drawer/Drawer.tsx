const Drawer = ({ children, isDrawerOpen, setDrawerOpen }) => {
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
