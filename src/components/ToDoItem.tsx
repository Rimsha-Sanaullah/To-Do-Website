import React from 'react';
import { IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

interface ToDoItemProps {
  id: number;
  text: string;
  category: string;
  done: boolean;
  onDelete: () => void;
  onToggleDone: () => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ id, text, category, done, onDelete, onToggleDone }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'Work':
        return <WorkIcon style={{ color: '#1D3557' }} />;
      case 'Personal Development':
        return <SchoolIcon style={{ color: '#457B9D' }} />;
      case 'Fitness & Health':
        return <FitnessCenterIcon style={{ color: '#457B9D' }} />;
      case 'Finance':
        return <AccountBalanceIcon style={{ color: '#457B9D' }} />;
      case 'Leisure':
        return <LocalActivityIcon style={{ color: '#E63946' }} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center p-2 ${done ? 'line-through text-gray-500' : 'text-gray-900'}`}>
      {getCategoryIcon() && <div className="mr-2">{getCategoryIcon()}</div>}
      <span className="flex-1">{text}</span>
      <IconButton onClick={onToggleDone}>
        <CheckIcon className={done ? 'text-green-500' : ''} />
      </IconButton>
      {done && (
        <IconButton onClick={onDelete}>
          <DeleteIcon className="text-red-500" />
        </IconButton>
      )}
    </div>
  );
};

export default ToDoItem;
