import { useState } from "react";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
  useUpdateContactMutation,
} from "../../../../redux/contacts/contactsOperations";
import { Modal } from "../../../components/Modal/Modal";

export const ContactsList = () => {
  const [openModals, setOpenModals] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const [selectedContact, setSelectedContact] = useState(null);
  const { data } = useGetContactsQuery();
  console.log(1, data);

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };

  const handleUpdateContact = (id, name, number) => {
    updateContact({ id, name, number });
    setOpenModals(false);
  };

  const toggleOpenModals = (contact = null) => {
    setOpenModals(!openModals);
    setSelectedContact(contact);
  };
  return (
    <ul>
      {data?.map(({ name, id, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => handleDeleteContact(id)}>
            DELETE
          </button>
          <button
            type="button"
            onClick={() => toggleOpenModals({ id, name, number })}
          >
            Change
          </button>
        </li>
      ))}
      {openModals && (
        <Modal
          toggleOpenModals={toggleOpenModals}
          data={selectedContact}
          onSave={handleUpdateContact}
        />
      )}
    </ul>
  );
};
