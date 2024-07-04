import { useState } from "react";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "../../../../redux/contacts/contactsOperations";
import { Modal } from "../../../components/Modal/Modal";
import { ContactListItem } from "./ContactListItem/ContactListItem";

export const ContactsList = () => {
  const [openModals, setOpenModals] = useState(false);
  
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const { data } = useGetContactsQuery();
  console.log(1, data);


 
  return (
    <ul>
      {data?.map(({ name, id, number }) => (
       <ContactListItem key={id} name={name} id={id} number={number} />
      ))}
      {openModals && (
        <Modal
          toggleOpenModals={toggleOpenModals}
        />
      )}
    </ul>
  );
};
