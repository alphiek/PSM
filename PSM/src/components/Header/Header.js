import React from "react"
import { useToggle } from "../../hooks/useToggle"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import { Backdrop } from "./Backdrop/Backdrop"

const Header = () => {
  const { isShowing, toggle } = useToggle(false)

  return (
    <>
      <Toolbar toggleHandler={toggle} />
      <SideDrawer show={isShowing} toggleHandler={toggle} />
      {isShowing && <Backdrop click={toggle} />}
    </>
  )
}

export default Header
