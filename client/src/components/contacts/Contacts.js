import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filteredContacts } = contactContext;

  if (contacts.lenght === 0) {
    return <h4>Please add a contact</h4>;
  }
  let showingContacts;
  return (
    <Fragment>
      {filteredContacts !== null
        ? filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
