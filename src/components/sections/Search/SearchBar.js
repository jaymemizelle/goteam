
import { Form } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <Form.Control
        type="text"
        placeholder="Search for a Team Member!"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    );
  };

export default SearchBar;