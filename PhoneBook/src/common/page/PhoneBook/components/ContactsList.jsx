import { useState } from "react"
import { useDeleteContactMutation, useGetContactsQuery } from "../../../../redux/contacts/contactsOperations"

export const  ContactsList = () => {
    const [openModals, setOpenModals] = useState(false)
    const [deleteContact, {isLoading}] = useDeleteContactMutation()

    const {data} = useGetContactsQuery()
    console.log(data)
    
const handleDeleteContact = (id) => {
   deleteContact(id)
}

const toggleOpenModals = () => {
    setOpenModals(!openModals)
}

  return (
    <ul>

{

        data?.map(({name, id, number}) =>  
            <li key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button type='button' onClick={() => handleDeleteContact(id)}>DELETE</button>
                <button type='button' onClick={toggleOpenModals}>Change</button>
            </li>
        )
}
    
     
    </ul>
  )
}
