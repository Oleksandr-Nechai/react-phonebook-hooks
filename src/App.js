import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { useLocalStorage } from 'hooks';

import data from './data';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useLocalStorage('listContacts', data);
  const [filter, setFilter] = useState('');

  const filterContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  const handleFilterChange = ({ target: { value } }) => setFilter(value);

  const checkName = name => {
    const normalizeName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    );
  };

  const handleFormSubmit = ({ name, number }) => {
    const isNameInContacts = checkName(name);

    if (isNameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevState => [
      ...prevState,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const removeContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section text="Phonebook" header={true}>
        <ContactForm onSubmitForm={handleFormSubmit} />
      </Section>
      <Section text="Contacts">
        <Filter filter={filter} onChangeFilter={handleFilterChange} />
        <ContactList
          contacts={filterContacts}
          hadleClickButton={removeContact}
        />
      </Section>
    </>
  );
}

export default App;
