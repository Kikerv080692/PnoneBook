import { useEffect, useState } from "react";

export const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

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
  return (
    <form>
      <input type="text" placeholder="name" value={name}  />
      <input type="text" placeholder="number" value={number} />
      <button type="button">Save</button>
    </form>
  );
};
