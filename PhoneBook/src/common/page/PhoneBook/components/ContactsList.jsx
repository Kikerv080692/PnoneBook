import { useState } from "react";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "../../../../redux/contacts/contactsOperations";
import { Modal } from "../../../components/Modal/Modal";
import { ContactListItem } from "./ContactListItem/ContactListItem";
import { CastomModal } from "../../../components/Modal/CastomModal";
import { Filter } from "../../../components/Filter/Filter";
import {useSearchParams} from 'react-router-dom'


export const ContactsList = () => {
  const [openModals, setOpenModals] = useState(false);
  
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const { data } = useGetContactsQuery();
    const [searchParams] = useSearchParams();
    const searchContact = searchParams.get('contact') ?? ''

    const renderContact = data?.filter((contact) => contact.name.toLowerCase().includes(searchContact.toLowerCase()))

 
  return (
    <>
    <Filter/>
    <ul>
      {renderContact?.map(({ name, id, number }) => (
       <ContactListItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
    </>
  );
};
