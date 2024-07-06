import { useDeleteContactMutation } from "../../../../../redux/contacts/contactsOperations";
import { useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { CastomModal } from "../../../../components/Modal/CastomModal";

export const ContactListItem = ({ number, id, name }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [openModals, setOpenModals] = useState(false);
  const handleDeleteContact = () => {
    deleteContact(id);
  };
  const toggleOpenModals = () => {
    setOpenModals(!openModals);
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={handleDeleteContact}>
        DELETE
      </button>
      <button type="button" onClick={toggleOpenModals}>
        Change
      </button>
      {openModals && (
        <CastomModal  toggleOpenModals={toggleOpenModals}>
          <Modal
            numberData={number}
            nameData={name}
            id={id}
            toggleOpenModals={toggleOpenModals}
          />
        </CastomModal>
      )}
    </li>
  );
};
