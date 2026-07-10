import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./dropdown.css";
import { useState } from "react";


function DropdownItemTags({ dropdownTitle, para , activeIcon, inactiveIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = (nextOpenState, event, metadata) => {
    setIsOpen(nextOpenState);
  };
  return (
    <DropdownButton
      id="dropdown-item-button"
      title=
      {<span className="d-flex justify-content-between">
      {dropdownTitle}{' '}
      <img className="icon-align"
        src={isOpen ? activeIcon : inactiveIcon}
        alt={isOpen ? 'Active Dropdown Icon' : 'Inactive Dropdown Icon'}
      />
    </span>
      }
      className={`custom-dropdown-arrow ${isOpen ? "dropdown-open" : ""}`}
      onToggle={handleDropdownToggle}
    >
      <Dropdown.ItemText>
        <p>{para}</p>
      </Dropdown.ItemText>
    </DropdownButton>
  );
}

export default DropdownItemTags;
