import PropTypes from 'prop-types';
import { Items, Button } from './ContactList.styled';

function ContactList({ contacts, hadleClickButton }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Items key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => hadleClickButton(id)}
          >
            Delete
          </Button>
        </Items>
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
