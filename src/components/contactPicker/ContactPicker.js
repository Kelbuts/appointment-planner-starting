import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="contact-picker"
    >
      <option value="">No Contact Selected</option>
      {contacts &&
        contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
    </select>
  );
};
