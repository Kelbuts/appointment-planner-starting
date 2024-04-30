import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
         <input 
           type='text' 
           value={name} 
           onChange= {(e) => setName(e.target.value)}
           required
           placeholder="Name: (example: John Wick)"
         />
      </label>
      <p>{isDuplicate && <p style={{ color: 'red' }}>This name already exists</p>}</p>
      <label>
        Phone:
         <input 
           type='tel' 
           value={phone} 
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
           onChange= {(e) => setPhone(e.target.value)}
           required
           placeholder="Phone: (example: 123-456-7890)"
         />
      </label>
      <label>
        Email:
         <input 
           type='email' 
           value={email} 
           onChange= {(e) => setEmail(e.target.value)}
           required
           placeholder="Email: (example: example@example.com)"
         />
      </label>
      <button type='submit' className="conttttact-form-submit-button">Submit</button>
      
    </form>
  );
};

