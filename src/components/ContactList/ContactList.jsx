import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, hadleClickButton }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.label}>
          {name}: {number}
          <button
            type="button"
            onClick={() => hadleClickButton(id)}
            className={s.btn}
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
