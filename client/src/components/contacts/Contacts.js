import React, { useContext, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filteredContacts } = contactContext;

  if (contacts.lenght === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {/* <TransitionGroup> */}
      {filteredContacts !== null
        ? filteredContacts.map(contact => (
            //<CSSTransition key={contact.id} timeout={5000} classNames='item'>
            <ContactItem contact={contact} />
            //</CSSTransition>
          ))
        : contacts.map(contact => (
            //<CSSTransition key={contact.id} timeout={5000} classNames='item'>
            <ContactItem contact={contact} />
            //</CSSTransition>
          ))}
      {/* </TransitionGroup> */}
    </Fragment>
  );
};

export default Contacts;
