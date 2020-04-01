import React from 'react';
import './App.css';
import Avatars from './avatar';

function App() {
  return (
    <div>
      <header className="App-header">
        <Avatars firstName = "Bartholomé" url ="https://picsum.photos/200/300" alt = 'Bartholomé'/>
        <Avatars firstName = "Homer" url ="https://picsum.photos/200/300" alt = 'Homer'/>
        <Avatars firstName = "Marge" url ="https://picsum.photos/200/300" alt = 'Marge'/>
      </header>
    </div>
  );
}

export default App;
