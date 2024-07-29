import React, { useState } from 'react';

interface AddToDoProps {
  addToDo: (text: string, category: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ addToDo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState<string>('Work');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToDo(text, category);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col mb-2">
        <label className="mb-1" style={{color: '#1D3557'}}>Task Description</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border rounded"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-1"style={{color: '#1D3557'}}>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
          <option value="Work">Work</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Fitness & Health">Fitness & Health</option>
          <option value="Finance">Finance</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>
      <button type="submit" className="py-2 px-4 text-white rounded" style={{backgroundColor: '#E63946'}}>Add Task</button>
    </form>
  );
};

export default AddToDo;
