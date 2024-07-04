import { useState} from "react";
import { useUpdateContactMutation } from "../../../redux/contacts/contactsOperations";


export const Modal = ({ toggleOpenModals, nameData, id, numberData}) => {
  const [name, setName] = useState(nameData);
  const [number, setNumber] = useState(numberData);
  const [updateContact, {isLoading}] = useUpdateContactMutation()


  const handleInputChange = (e) => {
    const { placeholder, value } = e.target;
    switch (placeholder) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        return;
    }
  };

  
const handleSubmit = (e) => {
  e.preventDefault()
  updateContact({id, name, number})
  toggleOpenModals()
}
 

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="number"
        value={number}
        onChange={handleInputChange}
      />
      <button type="submit" >
        Save
      </button>
    </form>
  );
};
