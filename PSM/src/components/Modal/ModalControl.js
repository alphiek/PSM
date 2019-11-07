import React from "react"
import { Transition } from "react-spring/renderprops"

import { useToggle } from "../../hooks/useToggle"
import Portal from "./Portal"
import { Modal } from "./Modal"
import { ModalOpen } from "./ModalOpen"

export const ModalControl = () => {
  const { isShowing, toggle } = useToggle(false)
  return (
    <>
      <ModalOpen click={toggle} />
      <Portal>
        <Transition
          items={isShowing}
          unique={true}
          from={{ opacity: 0, backdrop: 0 }}
          enter={{ opacity: 1, backdrop: 0.3 }}
          leave={{ opacity: 0, backdrop: 0 }}
        >
          {isShowing =>
            isShowing &&
            (styles => <Modal styles={{ ...styles }} click={toggle} />)
          }
        </Transition>
      </Portal>
    </>
  )
}
