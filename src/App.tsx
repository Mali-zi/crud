import React, { useState } from 'react';
import './App.css';
import { IPost } from './models/index';
import CreatePosts from './components/CreatePosts';
import InputForm from './components/InputForm';
import ButtonUpdata from './components/ButtonUpdate';

function App() {
  const [massage, setMassage] = useState('');
  const [posts, setPosts] = useState<IPost[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (massage) {
      let nextList = [
          ...posts,
          {
            id: Math.floor(Math.random() * 100) + 1,
            text: massage,
          }
        ];
      event.preventDefault();
      setMassage('');
      setPosts(nextList);
  }};

  function handleUpdate() {

  };

  return (
    <div className="App">
      <div className="container">
        <div>
          <header className='header'>
            <h1>Notes</h1>
            <ButtonUpdata 
              handleUpdate={handleUpdate}
            />
          </header>
            <div className="flex-large">
              <CreatePosts 
                posts={posts}
                setPosts={setPosts}
              />
            </div>
            <div className="flex-large">
              <InputForm 
                massage={massage}
                setMassage={setMassage}
                handleSubmit={handleSubmit}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
