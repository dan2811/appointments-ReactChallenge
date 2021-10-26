import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value="default">Please choose a contact...</option>
      {contacts.map((obj, index) => {
        return <option value={obj.name}>{obj.name}</option>
      })}
    </select>
  );
};
