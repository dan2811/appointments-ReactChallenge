import React, { useState } from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  contacts,
  setIsDuplicate
}) => {

  //State stuff
  const [error, setError] = useState('');

  return (
    <form onSubmit={handleSubmit} >

      <div>{error}</div>

      <input 
        type='text' 
        placeholder='Name' 
        value={name} 
        onChange={(e) => {
          setName(e.target.value);
          if(contacts.some( obj => obj.name === e.target.value)) {
            setIsDuplicate(true);
            setError("This name is already in the contact list.");
          } else {
            setIsDuplicate(false);
            setError('');
          }
          }
        }
      />

      <input 
        type='tel' 
        placeholder='Phone Number' 
        onChange={setPhone} 
        value={phone} 
        pattern={"[0-9]+"}
        title="Please enter valid UK telephone numbers only."
        onChange={(e) => {
          setPhone(e.target.value);
        }} 
      />

      <input 
        type='email' 
        placeholder='Email' 
        onChange={setEmail} 
        value={email} 
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input type='submit' />
      
    </form>
  );
};
