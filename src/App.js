import { Component } from 'react';
import { nanoid } from 'nanoid';

import data from './data';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  componentDidMount() {
    const savedContacts =
      localStorage.getItem('listContacts');

    const listContacts = JSON.parse(savedContacts);

    if (listContacts) {
      this.setState({ contacts: listContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      const listContacts = JSON.stringify(contacts);
      localStorage.setItem('listContacts', listContacts);
    }
  }

  handleFilterChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
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
    const { filter = '', contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <Section text="Phonebook" header={true}>
          <ContactForm
            onSubmitForm={this.handleFormSubmit}
          />
        </Section>
        <Section text="Contacts">
          <Filter
            filter={filter}
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
