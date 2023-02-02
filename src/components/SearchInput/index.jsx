import './styles.css';
import P from 'prop-types';

export const SearchInput = ({ searchValue, handleChange }) => (
  <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Type your search"
  />
);

SearchInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
