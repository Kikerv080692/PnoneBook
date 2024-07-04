import { Children } from 'react'
import {createPortal} from 'react-dom'
const modalRoot = document.querySelector('#modal-root')

export const CastomModal = ({children, toggleOpenModals}) => {
  return createPortal(
    <div>
      <div>
        {children}
        <button type='button'>X</button>
      </div>
    </div>,
    modalRoot
  )
}


