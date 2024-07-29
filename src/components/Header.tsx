import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface HeaderProps {
  userName: string;
  userIcon: string;
}

const Header: React.FC<HeaderProps> = ({ userName, userIcon }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <div className="flex justify-between items-center p-4 relative" style={{color: '#F1FAEE', backgroundColor: '#1D3557'}}>
      <div className="flex items-center mx-1 md:mx-8">
        <Avatar src={userIcon} alt={userName} />
        <div className="ml-4 relative">
          <span className="cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {userName} <ArrowDropDownIcon />
          </span>
          {dropdownOpen && (
            <div className="absolute mt-2 shadow-lg rounded flex flex-col right-0" style={{backgroundColor: '#F1FAEE', color: '#1D3557'}}>
              <Link to="/" className="px-8 py-3 hover:bg-blue-200" onClick={() => setDropdownOpen(false)}>Home</Link>
              <Link to="/profile" className="px-8 py-3 hover:bg-blue-200" onClick={() => setDropdownOpen(false)}>Profile</Link>
            </div>
          )}
        </div>
      </div>
      <div className='mx-1 md:mx-8'>{currentDate}</div>
    </div>
  );
};

export default Header;
