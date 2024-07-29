import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import Profile from './components/Profile';

interface ToDo {
  id: number;
  text: string;
  icon: string;
  category: string;
  done: boolean;
}

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [userName, setUserName] = useState<string>('Rimsha');

  const addToDo = (text: string, category: string) => {
    const newToDo = {
      id: Date.now(),
      text,
      icon: '',
      category,
      done: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const handleToggleDone = (id: number) => {
    setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, done: !toDo.done } : toDo));
  };

  return (
    <Router>
      <div className="min-h-screen" style={{backgroundColor: '#F1FAEE' , color: '#1D3557'}}>
        <Header userName={userName} userIcon="./SVG/User.tsx" />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <>
                <AddToDo addToDo={addToDo} />
                <ToDoList toDos={toDos} onDelete={handleDelete} onToggleDone={handleToggleDone} />
              </>
            } />
            <Route path="/profile" element={<Profile userName={userName} setUserName={setUserName} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
