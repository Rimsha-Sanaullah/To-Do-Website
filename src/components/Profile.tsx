import React, { useState } from 'react';

interface ProfileProps {
  userName: string;
  setUserName: (name: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ userName, setUserName }) => {
  const [newUserName, setNewUserName] = useState(userName);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserName(e.target.value);
  };

  const handleSave = () => {
    setUserName(newUserName);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4" style={{color: '#1D3557'}}>Profile</h2>
      <div className="mb-4">
        <label className="block mb-2" style={{color: '#1D3557'}} >User Name</label>
        <input
          type="text"
          value={newUserName}
          onChange={handleNameChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <button onClick={handleSave} className="py-2 px-4 text-white rounded" style={{backgroundColor: '#E63946'}} >Save</button>
    </div>
  );
};

export default Profile;
