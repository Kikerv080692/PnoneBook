import { useState, useEffect } from "react";

export const Modal = ({ toggleOpenModals, data, onSave }) => {
  const [name, setName] = useState(data?.name || "");
  const [number, setNumber] = useState(data?.number || "");

  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setNumber(data.number || "");
    }
  }, [data]);
console.log(2, data)
  const handleSave = (e) => {
    onSave(data.id, name, number);
    toggleOpenModals();
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

  const handleClose = () => {
    toggleOpenModals();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};
