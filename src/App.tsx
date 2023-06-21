import React, { useState } from 'react';
import './App.css';
import { IPost } from './models/index';
import CreatePosts from './components/CreatePosts';
import InputForm from './components/InputForm';

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

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>Notes</h1>
            <div className="flex-large">
              <h2>Posts</h2>
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
