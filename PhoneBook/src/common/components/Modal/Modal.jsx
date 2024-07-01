

export const  Modal = ({toggleOpenModals}) => {
    
  return (
    <div>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="number"  />
      <button type='button'>Save</button>
      <button type='button' onClick={toggleOpenModals}>Close</button>
    </div>
  )
}



