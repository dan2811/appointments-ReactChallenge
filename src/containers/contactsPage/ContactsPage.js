import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, setContact}) => {


  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    if(!isDuplicate) {
      setContact([...contacts, {name, phone, email}]);
    setName('');
    setPhone('');
    setEmail('');
  };
  };


  useEffect(() => {
 
    }
    );


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone} 
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} 
          contacts={contacts}
          setIsDuplicate={setIsDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts} 
        />
      </section>
    </div>
  );
};
