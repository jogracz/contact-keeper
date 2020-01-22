import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div className='card'>
      <h2>{contact.name}</h2>
      <h3>{contact.emial}</h3>
      <h3>{contact.phone}</h3>
      <h3>{contact.type}</h3>
    </div>
  );
};

export default ContactItem;
