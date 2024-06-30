import { useEffect, useState } from "react";
import { useAddContactMutation } from "../../../redux/contacts/contactsOperations";
import { ContactsList } from "./components/ContactsList";

export const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact, {isLoading}] = useAddContactMutation()


  const handleInputChange = (event) => {
    const { placeholder, value } = event.target;
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
const handleSubmit = async (event) => {
  event.preventDefault()
  await addContact({
    name, number
  })
}


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={handleInputChange}  />
      <input type="text" placeholder="number" value={number} onChange={handleInputChange} />
      <button type="submit"  >Save</button>
    </form>
    <ContactsList/>
    </>
  );
};
