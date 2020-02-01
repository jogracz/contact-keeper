import React, { useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filteredContacts, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts && contacts.lenght === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filteredContacts !== null
        ? filteredContacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
