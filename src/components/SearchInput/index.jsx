import './styles.css'

export const SearchInput = ({ searchValue, onChange }) => (
    <input 
        className='text-input'
        onChange={onChange}
        value={searchValue}
        type='search' 
        placeholder='Type your search'
     />
)