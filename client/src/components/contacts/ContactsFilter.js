import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactsFilter = () => {
  const contactContext = useContext(ContactContext);
  const { clearFilter, filteredContacts, filterContacts } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filteredContacts === null) {
      text.current.value = '';
    }
  });
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactsFilter;
