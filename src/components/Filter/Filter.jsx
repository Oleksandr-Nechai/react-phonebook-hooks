import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

function Filter({ filter, onChangeFilter }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={filter}
      />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
