// import s from './Contact.module.css';

function ContactList({ contacts, hadleClickButton }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => hadleClickButton(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
