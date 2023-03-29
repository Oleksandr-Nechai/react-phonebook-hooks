import PropTypes from 'prop-types';
// import s from './Filter.module.css';

function Filter({ filter, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
