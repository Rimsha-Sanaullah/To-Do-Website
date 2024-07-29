import React from 'react';
import ToDoItem from './ToDoItem';

interface ToDo {
  id: number;
  text: string;
  icon: string;
  category: string;
  done: boolean;
}

interface ToDoListProps {
  toDos: ToDo[];
  onDelete: (id: number) => void;
  onToggleDone: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ toDos, onDelete, onToggleDone }) => {
  const categories = Array.from(new Set(toDos.map(toDo => toDo.category)));

  return (
    <div className="p-4">
      {categories.map(category => (
        <div key={category} className="mb-4">
          <h2 className="text-xl font-bold text-center py-1 rounded-full" style={{color: '#1D3557'}}>{category}</h2>
          {toDos.filter(toDo => toDo.category === category).map(toDo => (
            <ToDoItem
              key={toDo.id}
              {...toDo}
              onDelete={() => onDelete(toDo.id)}
              onToggleDone={() => onToggleDone(toDo.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
