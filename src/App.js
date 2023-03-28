import { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],

    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkName = name => {
    const normalizeName = name.toLowerCase();
    return this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() === normalizeName
    );
  };

  handleFormSubmit = ({ name, number }) => {
    const checkName = this.checkName(name);

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(state => ({
      contacts: [
        ...state.contacts,
        {
          name,
          number,
          id: nanoid(),
        },
      ],
    }));
  };

  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(
        contact => contact.id !== id
      ),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <>
        <Section text="Phonebook" header="true">
          <ContactForm
            onSubmitForm={this.handleFormSubmit}
          />
        </Section>
        <Section text="Contacts">
          <Filter
            filter={this.state.filter}
            onChangeFilter={this.handleFilterChange}
          />
          <ContactList
            contacts={filterContacts}
            hadleClickButton={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
