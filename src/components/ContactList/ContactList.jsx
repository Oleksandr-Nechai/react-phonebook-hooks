import PropTypes from 'prop-types';
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  hadleClickButton: PropTypes.func.isRequired,
};
